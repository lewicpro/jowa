import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-bankstatement',
    templateUrl: './bankstatement.component.html',
    styleUrls: ['./bankstatement.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BankstatementComponent implements OnInit {
  datar;
  users;
  user;
  jina;
  phone;
  pin;
  Userdata={user:'meme'}
  jomo;
  selectedFile: File = null;

  // the four boxes we show on the page (the html loops over this list)
  kinds = [
    { key: 'bankstatement', label: 'Bank Statement', tone: 'g-blue', icon: 'up-i-doc' },
    { key: 'idcard', label: 'Identity card', tone: 'g-orange', icon: 'up-i-id' },
    { key: 'Atm', label: 'ATM card', tone: 'g-green', icon: 'up-i-card' },
    { key: 'slip', label: 'Slip', tone: 'g-crimson', icon: 'up-i-slip' },
  ];

  // for every box we remember:
  state = {};      // 'idle', 'uploading', 'done' or 'error'
  files = {};      // the file chosen in that box
  lastName = {};   // the name of the last file, to show under the title
  dragOver = null; // the box a file is being dragged over

  // the uploaded documents of this customer, shown at the bottom
  docs = [];
  docsLoaded = false;

  onfileSelected(file: FileList) {
    this.selectedFile = file[0];
  }

  constructor(public restframework: RestframeworkService) {
    this.restframework.getLists().then(data => {
      this.datar = localStorage.getItem('id');
      this.users = data;
      for (const m of this.users) {
        if ( String(m.pk) === String(this.datar)) {
          this.user = m.Username;
          this.jina = m.jina;
          this.pin = m.pin;
          this.phone = m.Simu;
          // console.log('user' + this.user);
          // console.log('jina' + this.jina);

        }

      }
      this.loadDocs();


    });
    this.restframework.getPayments().then(datad => {
      this.jomo = datad;
      //.log(this.jomo.user);

      // console.log('come jomo' + this.jomo);
      for (const n of this.jomo) {
        // console.log('pk ' + n.user);
        this.datar = localStorage.getItem('id');
        if ( n.user === this.user) {
          // console.log('come come' + n.Balance);
          if (n.Balance != null) {
            // console.log(n.Balance);
          }
          // this.balancem = n.Balance;
          // this.twobalacnce = this.jumla + this.balancem;
          // localStorage.setItem('balancem', n.Balance);
          // console.log('come go' + this.twobalacnce);


        }

      }
    });
  }


  // the button of a box was clicked
  onButton(kind, picker) {
    // already sending, do nothing
    if (this.state[kind] === 'uploading') {
      return;
    }
    // the last upload failed: send the same file again
    if (this.state[kind] === 'error') {
      this.upload(kind);
      return;
    }
    // otherwise open the window to choose a file
    picker.click();
  }


  // a file was chosen in the window: upload it at once
  onPicked(kind, input) {
    if (input.files.length > 0) {
      this.files[kind] = input.files[0];
      input.value = '';
      this.upload(kind);
    }
  }


  // a file is dragged over a box
  onDragOver(event, kind) {
    event.preventDefault();
    this.dragOver = kind;
  }


  // a file was dropped on a box: upload it at once
  onDrop(event, kind) {
    event.preventDefault();
    this.dragOver = null;
    if (event.dataTransfer.files.length > 0) {
      this.files[kind] = event.dataTransfer.files[0];
      this.upload(kind);
    }
  }


  // send the file of a box to the backend
  upload(kind) {
    const file = this.files[kind];
    if (file == null) {
      return;
    }
    if (this.user == null) {
      alert('Taarifa za mteja bado zinapakia. Jaribu tena baada ya muda mfupi.');
      return;
    }

    this.state[kind] = 'uploading';
    this.lastName[kind] = file.name;

    // every box has its own address in the backend
    let request;
    if (kind === 'bankstatement') {
      request = this.restframework.postdata(file, this.user, this.pin, this.phone);
    } else if (kind === 'idcard') {
      request = this.restframework.postFiledata(file, this.user, this.pin, this.phone);
    } else if (kind === 'Atm') {
      request = this.restframework.postAtmdata(file, this.user, this.pin, this.phone);
    } else if (kind === 'slip') {
      request = this.restframework.postSlipdata(file, this.user, this.pin, this.phone);
    }

    request.subscribe(
      data => {
        // it worked
        this.state[kind] = 'done';
        this.files[kind] = null;
        this.loadDocs();

        // after 3 seconds the button says "Pakia nyingine" again
        setTimeout(() => {
          if (this.state[kind] === 'done') {
            this.state[kind] = 'idle';
          }
        }, 2800);
      },
      err => {
        // it failed: the button will say "Jaribu tena"
        this.state[kind] = 'error';
      }
    );
  }


  // is this document for our customer?
  // old uploads were saved as "Masatu" or "lewis masatu", so we check both, small letters
  isMine(m) {
    if (m.user == null) {
      return false;
    }
    const name = String(m.user).toLowerCase().trim();

    if (this.user != null && name === String(this.user).toLowerCase().trim()) {
      return true;
    }
    if (this.jina != null && name === String(this.jina).toLowerCase().trim()) {
      return true;
    }
    return false;
  }


  // get the uploaded documents of this customer, one list after the other
  loadDocs() {
    const list = [];

    this.restframework.getBankstats().then(data1 => {
      this.addDocs(list, data1, 'bankstatement', 'Bank Statement');
      return this.restframework.getIdentitystats();

    }).then(data2 => {
      this.addDocs(list, data2, 'idcard', 'Identity card');
      return this.restframework.getAtmstats();

    }).then(data3 => {
      this.addDocs(list, data3, 'Atm', 'ATM card');
      return this.restframework.getSlipstats();

    }).then(data4 => {
      this.addDocs(list, data4, 'slip', 'Slip');

      this.docs = list.reverse();   // newest first
      this.docsLoaded = true;
    });
  }


  // put the documents of our customer from one list into "list"
  addDocs(list, data, field, label) {
    for (const m of data) {
      if (m[field] && this.isMine(m)) {
        const url = m[field];
        const name = decodeURIComponent(url.split('/').pop());
        const ext = name.split('.').pop().toLowerCase();

        let isImage = false;
        if (ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'gif' || ext === 'webp' || ext === 'bmp') {
          isImage = true;
        }

        list.push({ label: label, url: url, name: name, ext: ext, isImage: isImage, missing: false });
      }
    }
  }


  ngOnInit() {
  }



}
