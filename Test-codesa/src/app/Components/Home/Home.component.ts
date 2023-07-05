import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  isRenderForm: boolean = false;
  isRenderButton: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  renderForm(){
    if(this.isRenderForm == false){
      this.isRenderButton = false;
      this.isRenderForm = true;
    }
    else{
      this.isRenderButton = true;
      this.isRenderForm = false;
    }
  }
}
