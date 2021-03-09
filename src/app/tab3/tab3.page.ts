import { Component, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imageData1: string;
  @Input() useURI = true;

  constructor(private camera: Camera, public http: HttpClient, private storage: Storage) { }

  getPicture(srcType: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.useURI ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: srcType,
      targetWidth: 800,
      targetHeight: 800,
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      if (this.useURI) {
        // const temp = imageData.split('?');
        // this.imageData = temp[0];
        this.imageData1 = (window as any).Ionic.WebView.convertFileSrc(imageData);
      } else {
        const base64 = 'data:image/jpeg;base64,' + imageData;
        this.imageData1 = base64;
      }
    }, (err) => {
      alert(err);
    });
  }

  get1(){
    console.log(this.imageData1);
   let send = { image: this.imageData1};
    this.http.post("https://reqres.in/api/users",send).subscribe(data => {
      alert('Uploaded');
      console.log(data);
    }, error => {
      console.log(error);
    }
    
    );
  }

  pass(){
    if(this.imageData1!=null){
    localStorage.setItem('img3',this.imageData1);
    console.log(this.imageData1);
    } else {
      console.log("Tab3:Empty Data");
    }
  }

}