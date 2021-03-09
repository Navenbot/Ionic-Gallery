import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  pass: any;

  constructor(){}

  ngOnInit(){
    console.log(localStorage.getItem('img3'));
    // if(localStorage.getItem('img3')!=null){
      this.pass= localStorage.getItem('img3');
      // localStorage.clear();
      console.log(this.pass);
  // }
  // else{
  //   console.log("Tab1:Data is Empty");
  // }
  }
}
