import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-dashboard-hati-mikopo',
    templateUrl: './dashboard-hati-mikopo.component.html',
    styleUrls: ['./dashboard-hati-mikopo.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardHatiMikopoComponent implements OnInit {
  malipo;
  users;

  // the loan agreement forms (PDF) of this company
  forms = [];
  company = '';        // the company the forms belong to
  title = '';          // "Jina la fomu"
  pdf = null;          // the PDF chosen
  dragging = false;    // a file is dragged over the box
  loading = false;     // getting the list
  uploading = false;   // sending a PDF
  downloading = null;  // the form being downloaded
  message = '';        // green message
  error = '';          // red message

  constructor(public restframework: RestframeworkService) {
    this.restframework.getAliekopa().then(data => {
      this.malipo = data;
    });
  }

  ngOnInit() {
    this.findCompany();
  }


  // ---------- which company? ----------
  // we use the company saved at login; if there is none, we ask the backend
  findCompany() {
    this.company = localStorage.getItem('company_username')
      || localStorage.getItem('company')
      || localStorage.getItem('user')
      || '';

    if (this.company !== '') {
      this.loadForms();
      return;
    }

    const id = localStorage.getItem('id');
    if (id == null) {
      this.error = 'Taarifa za kampuni hazipatikani. Ingia (login) tena.';
      return;
    }

    this.loading = true;
    this.restframework.getListsTotal(id).then((data: any) => {
      this.loading = false;
      if (data != null && data[0] != null) {
        this.company = data[0].company_username || data[0].company || '';
      }
      if (this.company !== '') {
        this.loadForms();
      } else {
        this.error = 'Taarifa za kampuni hazipatikani. Ingia (login) tena.';
      }
    });
  }


  // ---------- the list of forms ----------
  loadForms() {
    this.loading = true;
    this.restframework.getLoanAgreementTemplates(this.company).subscribe(
      (data: any) => {
        this.loading = false;
        this.forms = data;
      },
      err => {
        this.loading = false;
        this.error = 'Imeshindikana kupata orodha ya fomu. Jaribu tena.';
      }
    );
  }


  // ---------- choosing the PDF ----------

  // chosen in the window
  onPicked(input) {
    if (input.files.length > 0) {
      this.choosePdf(input.files[0]);
    }
    input.value = '';
  }

  onDragOver(event) {
    event.preventDefault();
    this.dragging = true;
  }

  onDragLeave() {
    this.dragging = false;
  }

  // dropped on the box
  onDrop(event) {
    event.preventDefault();
    this.dragging = false;
    if (event.dataTransfer.files.length > 0) {
      this.choosePdf(event.dataTransfer.files[0]);
    }
  }

  // keep the PDF; if there is no name yet, use the file name
  choosePdf(file) {
    this.message = '';
    this.error = '';

    if (!file.name.toLowerCase().endsWith('.pdf')) {
      this.error = 'Tafadhali chagua faili la PDF.';
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      this.error = 'PDF haiwezi kuzidi MB 20.';
      return;
    }

    this.pdf = file;
    if (this.title.trim() === '') {
      this.title = file.name.replace(/\.pdf$/i, '');
    }
  }

  removePdf() {
    this.pdf = null;
  }

  // "2.4 MB" or "350 KB"
  size(bytes) {
    if (bytes >= 1024 * 1024) {
      return (bytes / 1024 / 1024).toFixed(1) + ' MB';
    }
    return Math.max(1, Math.round(bytes / 1024)) + ' KB';
  }


  // ---------- sending the PDF ----------
  upload() {
    this.message = '';
    this.error = '';

    if (this.company === '') {
      this.error = 'Taarifa za kampuni hazipatikani. Ingia (login) tena.';
      return;
    }
    if (this.pdf == null) {
      this.error = 'Chagua faili la PDF kwanza.';
      return;
    }
    if (this.title.trim() === '') {
      this.error = 'Weka jina la fomu.';
      return;
    }

    const formData = new FormData();
    formData.append('company_username', this.company);
    formData.append('title', this.title.trim());
    formData.append('pdf_file', this.pdf, this.pdf.name);

    this.uploading = true;
    this.restframework.uploadLoanAgreementTemplate(formData).subscribe(
      (data: any) => {
        this.uploading = false;
        this.forms.unshift(data);   // the new form at the top
        this.title = '';
        this.pdf = null;
        this.message = 'Fomu imepakiwa.';
      },
      err => {
        this.uploading = false;
        this.error = 'Imeshindikana kupakia fomu. Jaribu tena.';
      }
    );
  }


  // ---------- downloading a form ----------
  // The PDF is on the backend (another address), so a normal link would only open it.
  // We get the file first, then save it on the computer with the form name.
  download(form) {
    if (this.downloading != null) {
      return;
    }
    this.downloading = form;

    fetch(form.pdf_file)
      .then(res => {
        if (!res.ok) {
          throw new Error('not found');
        }
        return res.blob();
      })
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = form.title + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        this.downloading = null;
      })
      .catch(err => {
        this.downloading = null;
        this.error = 'Imeshindikana kupakua "' + form.title + '". Jaribu tena.';
      });
  }

  // open the PDF in a new tab to read or print
  open(form, event) {
    event.stopPropagation();
    window.open(form.pdf_file, '_blank', 'noopener');
  }
}
