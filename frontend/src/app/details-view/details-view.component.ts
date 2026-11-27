import { HostListener, Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { WotewatejaComponent } from '../wotewateja/wotewateja.component';
import { Injectable } from '@angular/core';
@Injectable()
@Component({
    selector: 'app-details-view',
    templateUrl: './details-view.component.html',
    styleUrls: ['./details-view.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DetailsViewComponent implements OnInit {
  @ViewChild(WotewatejaComponent) child;
  @Input() form;
  users;
  Username;
  jina;
  mwei;
  pin;
  // d = new Date();
  Account_no;
  kata;
  mkopo;
  allr;
  getlisttoto;
  file_no;
  mona;
  mwaka;
  array =['moja', 'mbili'];
  wilaya;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  all;
  malipo;
  mopa  = '';
  Faida;
  Rejesho_mwezi;
  malipzo;
  mez;
  details;
  date;
  malip;
  d = new Date();
  Simu;
  mwezi;
  Balance;
  datar;
  riba;
  imageUrl;
  malipz;
  als;
  mkoa;
  infos;
  selectedFile: File = null;

  //(file: FileList) {
  //   this.selectedFile = file[0];
  // }


  onfileSelected(file: FileList) {
    this.selectedFile = file.item(0);

    // to show image preview
    const reader = new FileReader();
    reader.onload = (event: any ) => {
      this.imageUrl = event.target.result;
    };

    reader.readAsDataURL(this.selectedFile);



  }

  constructor(public restframework: RestframeworkService) {
    // this.restframework.getLists().then(data => {
    //   this.malip = data;
    //   this.datar = localStorage.getItem('id')

    //   for (const m of this.malip){
    //     // console.log('misemo;'+m.nyumba)

    //     if (String(m.pk) === String(this.datar)){

    //       this.mona = m.Username
    //       this.file_no = m.file_no
    //       //.log( m.Username)


    //     }


    //   }
    // });
    this.restframework.getPersonalWeka().then(data => {
      this.malipzo = data;



    });
    this.time();
    this.loadSelectedAccountData();

    this.restframework.getMieziToa().then(datas => {
      this.users = datas;
    });

    this.getdata();
   }

  private loadSelectedAccountData(): void {
    this.restframework.getStoredLists().then(records => {
      this.als = Array.isArray(records) ? records : [];
      const selectedId = localStorage.getItem('id');
      const selected = this.als.find(record => String(record.pk) === String(selectedId));
      if (selected) {
        this.mona = selected.Username;
        this.file_no = selected.file_no;
      }

      return this.restframework.getPersonalToa();
    }).then(data => {
      this.malipz = Array.isArray(data) ? data : [];
      for (const payment of this.malipz) {
        if (payment.user === this.mona && String(this.mwaka) === String(payment.mwaka)) {
          const monthlyAmounts = {
            January: payment.January,
            February: payment.February,
            March: payment.March,
            April: payment.April,
            May: payment.May,
            June: payment.June,
            July: payment.July,
            August: payment.August,
            September: payment.September,
            October: payment.October,
            November: payment.November,
            December: payment.December
          };
          this.mez = monthlyAmounts[this.mwei];
        }
      }
    });
  }

   onUploadProfileData() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.ref().start();
    this.restframework.postProfiledata(this.selectedFile, this.Username, this.pin, this.Simu).subscribe(
      data => {
        //.log('done');
        // this.ngProgress.ref().complete();
      }
    );

  }
  // ================= profile photo =================
  photoUploading = false;
  photoDone = false;
  photoError = '';

  // is there a real photo to show? (otherwise we show the initials)
  hasPhoto() {
    return this.imageUrl != null && this.imageUrl !== '' && this.imageUrl !== '/assets/profile.png';
  }

  // "Gasper Kessy" -> "GK"
  initials(name) {
    if (name == null) {
      return '?';
    }
    const words = String(name).trim().split(' ');
    let letters = '';
    for (const w of words) {
      if (w !== '' && letters.length < 2) {
        letters = letters + w.charAt(0).toUpperCase();
      }
    }
    return letters;
  }

  // a picture was chosen: open the crop window first
  onPhotoPicked(input, customer) {
    if (input.files.length === 0) {
      return;
    }
    const file = input.files[0];
    input.value = '';

    if (file.type.indexOf('image/') !== 0) {
      this.photoError = 'Chagua picha (JPG au PNG).';
      return;
    }
    this.photoError = '';
    this.openCrop(file, customer);
  }


  // ================= crop window =================
  // The picture moves behind a round frame of 280 x 280.
  // cropX / cropY = where the top-left corner of the picture is, inside the frame.

  cropOpen = false;
  cropSrc = '';         // the chosen picture
  cropImg = null;       // the loaded picture (to know its size and to draw it)
  cropCustomer = null;  // the customer the photo is for
  cropName = '';
  frame = 280;          // size of the frame in pixels
  zoom = 1;             // 1 = the picture just covers the frame, 3 = 3 times bigger
  cropX = 0;
  cropY = 0;
  dragging = false;
  dragStartX = 0;
  dragStartY = 0;

  openCrop(file, customer) {
    this.cropCustomer = customer;
    this.cropName = file.name;
    this.cropSrc = URL.createObjectURL(file);

    const img = new Image();
    img.onload = () => {
      this.cropImg = img;
      this.zoom = 1;
      // start with the picture in the middle of the frame
      this.cropX = (this.frame - this.imgWidth()) / 2;
      this.cropY = (this.frame - this.imgHeight()) / 2;
      this.cropOpen = true;
    };
    img.src = this.cropSrc;
  }

  // how big the picture is drawn now
  scale() {
    if (this.cropImg == null) {
      return 1;
    }
    // smallest size that still covers the whole frame, times the zoom
    const cover = Math.max(this.frame / this.cropImg.width, this.frame / this.cropImg.height);
    return cover * this.zoom;
  }

  imgWidth() {
    return this.cropImg == null ? 0 : this.cropImg.width * this.scale();
  }

  imgHeight() {
    return this.cropImg == null ? 0 : this.cropImg.height * this.scale();
  }

  // the picture must always cover the frame (no empty corners)
  keepInside() {
    const minX = this.frame - this.imgWidth();
    const minY = this.frame - this.imgHeight();
    if (this.cropX > 0) { this.cropX = 0; }
    if (this.cropY > 0) { this.cropY = 0; }
    if (this.cropX < minX) { this.cropX = minX; }
    if (this.cropY < minY) { this.cropY = minY; }
  }

  // zoom around the middle of the frame
  setZoom(value) {
    if (value < 1) { value = 1; }
    if (value > 3) { value = 3; }
    const middle = this.frame / 2;
    // which point of the picture is in the middle now
    const pointX = (middle - this.cropX) / this.scale();
    const pointY = (middle - this.cropY) / this.scale();
    this.zoom = value;
    // keep that same point in the middle
    this.cropX = middle - pointX * this.scale();
    this.cropY = middle - pointY * this.scale();
    this.keepInside();
  }

  zoomIn() {
    this.setZoom(this.zoom + 0.2);
  }

  zoomOut() {
    this.setZoom(this.zoom - 0.2);
  }

  // mouse wheel on the frame
  onWheel(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
      this.setZoom(this.zoom + 0.1);
    } else {
      this.setZoom(this.zoom - 0.1);
    }
  }

  // ---------- moving the picture with the mouse or a finger ----------

  startDrag(event) {
    event.preventDefault();
    const point = event.touches ? event.touches[0] : event;
    this.dragging = true;
    this.dragStartX = point.clientX - this.cropX;
    this.dragStartY = point.clientY - this.cropY;
  }

  moveDrag(event) {
    if (!this.dragging) {
      return;
    }
    const point = event.touches ? event.touches[0] : event;
    this.cropX = point.clientX - this.dragStartX;
    this.cropY = point.clientY - this.dragStartY;
    this.keepInside();
  }

  endDrag() {
    this.dragging = false;
  }

  // a click on the dark background closes the window,
  // but not when a drag of the picture ends there
  backdropDown = false;

  onBackdropDown(event) {
    this.backdropDown = (event.target === event.currentTarget);
  }

  onBackdropClick(event) {
    if (this.backdropDown && event.target === event.currentTarget) {
      this.cancelCrop();
    }
    this.backdropDown = false;
  }

  cancelCrop() {
    this.cropOpen = false;
    this.dragging = false;
    if (this.cropSrc !== '') {
      URL.revokeObjectURL(this.cropSrc);
    }
    this.cropSrc = '';
    this.cropImg = null;
  }

  // "Hifadhi picha": cut the part inside the frame (512 x 512) and upload it
  saveCrop() {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // the part of the original picture that is inside the frame
    const fromX = -this.cropX / this.scale();
    const fromY = -this.cropY / this.scale();
    const fromSize = this.frame / this.scale();
    ctx.drawImage(this.cropImg, fromX, fromY, fromSize, fromSize, 0, 0, size, size);

    const customer = this.cropCustomer;
    const name = this.cropName.replace(/\.[^.]+$/, '') + '.jpg';
    const file = this.dataUrlToFile(canvas.toDataURL('image/jpeg', 0.92), name);
    this.cancelCrop();
    this.uploadPhoto(file, customer);
  }

  // turn the picture made by the canvas ("data:image/jpeg;base64,....") into a file to upload
  dataUrlToFile(dataUrl, name) {
    const text = atob(dataUrl.split(',')[1]);
    const bytes = new Uint8Array(text.length);
    for (let i = 0; i < text.length; i++) {
      bytes[i] = text.charCodeAt(i);
    }
    return new File([bytes], name, { type: 'image/jpeg' });
  }

  // Esc closes the crop window
  @HostListener('document:keydown.escape')
  onEscapeCrop() {
    if (this.cropOpen) {
      this.cancelCrop();
    }
  }


  // send the (cropped) photo for this customer
  uploadPhoto(file, customer) {
    // show the new picture straight away
    const oldPhoto = this.imageUrl;
    this.imageUrl = URL.createObjectURL(file);

    this.photoUploading = true;
    this.photoDone = false;
    this.photoError = '';

    // the photo is saved with the customer's username, so it can be found again
    this.restframework.postProfiledata(file, customer.Username, customer.pin, customer.Simu).subscribe(
      (data: any) => {
        this.photoUploading = false;
        this.photoDone = true;
        if (data != null && data.photo) {
          this.imageUrl = data.photo;
        }
        setTimeout(() => {
          this.photoDone = false;
        }, 3000);
      },
      err => {
        // put the old picture back
        this.photoUploading = false;
        this.imageUrl = oldPhoto;
        this.photoError = 'Imeshindikana kupakia picha. Jaribu tena.';
      }
    );
  }

  awesome(){
    //.log('mimi nimeipata')
    this.getdata();
  }
  time(){
    this.mwaka = this.d.getFullYear();
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);
      this.mwei=this.monthes[this.d.getMonth()]
      //.log(this.mwei)
      // console.log(this.mwaka)
  }}


  getdata(){



    this.restframework.getListsTotal(localStorage.getItem('id')).then(res=>{
      this.getlisttoto=res;
      for(const m of this.getlisttoto){
        this.Username = m.Username;
        this.jina = m.jina;
        this.kata = m.kata;
        this.mkoa = m.mkoa;
        this.Simu = m.Simu;
        this.wilaya = m.wilaya;
        this.pin = m.pin;
        this.Account_no = m.Account_no;

      }

    })



      this.restframework.getInfoStoredData().then(dats =>{
        this.infos = dats;
        for(const n of this.infos){
          this.datar = localStorage.getItem('id');
          if(n.user === this.Username){
            this.riba = n.Riba;
            this.Balance = n.Balance;
            this.mwezi = n.mwezi;
            this.mkopo = n.mkopo;
            this.Faida = n.Faida;
            this.Rejesho_mwezi = n.Rejesho_mwezi;
            this.date = this.d.getMonth() + 1;

          }

        }
      });
      this.restframework.getStoredProfilestats().then(giv =>{
        this.allr = giv;
        for(const j of this.allr){
          // console.log('kwenye picha')

          if(j.user){

              this.imageUrl = j.photo;
              // console.log('picha : '+ j.photo)

          } else{

              this.imageUrl = '/assets/profile.png';


          }

        }
      })


  }

  ngOnInit() {

  }

  fuck(){
    // console.log('yeeeeeeeahhhhhh we getdata')
    this.getdata();
  }



}
