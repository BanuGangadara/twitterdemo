import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	
	user:any;
  constructor() { }

  ngOnInit() {
  	this.user=JSON.parse(localStorage.getItem('Array'));
  }

}
