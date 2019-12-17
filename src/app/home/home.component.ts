import { Component, OnInit } from '@angular/core';
import { TwitterserviceService } from '../twitterservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataService } from "../data.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myTimeline;
  user:any;
  breakpoint: number;
  cards = [
    { id: 1, title: 'Leads', cols: 1, rows: 1 },
    { id: 2, title: 'Agent Performance', cols: 1, rows: 1 },
    { id: 3, title: 'Applications', cols: 1, rows: 1 },
    { id: 4, title: 'Applications', cols: 1, rows: 1 },
    { id: 5, title: 'Leads', cols: 1, rows: 1 },
    { id: 6, title: 'Agent Performance', cols: 1, rows: 1 },
    { id: 7, title: 'Applications', cols: 1, rows: 1 },
    { id: 8, title: 'Applications', cols: 1, rows: 1 },
    { id: 9, title: 'Applications', cols: 1, rows: 1 },
    { id: 10, title: 'Applications', cols: 1, rows: 1 },
    { id: 11, title: 'Applications', cols: 1, rows: 1 },
    { id: 12, title: 'Applications', cols: 1, rows: 1 }
  ];
  constructor(private router: Router, private data: DataService, private api: TwitterserviceService) { }

  ngOnInit() {
  	this.data.currentUser.subscribe(user => this.user = user)
  	if(window.innerWidth<=600)
    {
      this.breakpoint=1;
    }
    else if(window.innerWidth>=600 && window.innerWidth<=768)
    {
      this.breakpoint=2;
    }
    else if(window.innerWidth<=768 && window.innerWidth>=992)
    {
      this.breakpoint=3;
    }
    else
    {
    	this.breakpoint=4;
    }
  	
      this.api.getTweets().subscribe((myTimeline: any)=>{
      this.myTimeline = myTimeline.data.statuses;
      console.log(this.myTimeline);
		});
   	}
   	
  
  onResize(event) {
    if(event.target.innerWidth <= 600)
    {
      this.breakpoint=1;
    }
    else if(event.target.innerWidth>=600 && event.target.innerWidth<=768)
    {
      this.breakpoint=2;
    }
    else if(event.target.innerWidth>=768 && event.target.innerWidth<=992)
    {
      this.breakpoint=3;
    }
    else
    {
    	this.breakpoint=4;
    }
   
  }
  onSelectChange(opt){
  	console.log('selected option '+opt);
  	if(opt=='dateasc')
  	{
  		let direction=1;
  		this.sort('created_at', direction);
  	}
  	else if(opt=='datedesc')
  	{
  		let direction=-1;
  		this.sort('created_at', direction);
  	}
  	else if(opt=='favoritesasc')
  	{
  		let direction=1;
  		this.sort('followers_count', direction);
  	}
  	else if(opt=='favoritesdesc')
  	{
  		let direction=-1;
  		this.sort('followers_count', direction);
  	}
  }
  sort(property, direction) {
    var columna;
    var columnb;
    this.myTimeline.sort(function (a, b) {
     if(property=='dateasc' || property=='datedesc')
     {
     columna=<any>new Date(a[property]);
     columnb=<any>new Date(b[property]);
      }
      else
      {
      	columna=a.user[property];
      	columnb=b.user[property];
      }
      console.log(columna+"helloto "+columnb);
      if (columna < columnb) {
      	console.log('hello');
        return -1 * direction;
      }
      else if (columna > columnb) {
        return 1 * direction;
        console.log('world');
      }
      else {
      	console.log('jlajf');
        return 0;
      }
    });
  };
  dashboardDirect(card)
  {
  	console.log(card);
  	this.data.changeUser(card);
  	localStorage.setItem('Array', JSON.stringify(card));
  	localStorage.setItem('token1', 'success');
  	this.router.navigate(['/dashboard']);

  }
}
