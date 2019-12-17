import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from "../data.service";
import {HostListener,Directive,HostBinding,Input} from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { TwitterserviceService } from '../twitterservice.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
breakpoint:number;
selectedUser;
		title ;
		   type ;
		   chartdata ;
		   columnNames;
		   options;
		   width;
		   height;
	userData:any;
	dilogue:string;
	myTimeline;
  constructor(private router: Router, private data: DataService, public dialog: MatDialog, private api: TwitterserviceService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  		console.log('calling on it');
  		this.userData = JSON.parse(localStorage.getItem('Array'));
  		this.api.getTweets().subscribe((myTimeline: any)=>{
	      this.myTimeline = myTimeline.data.statuses;
	      console.log(this.myTimeline);
		});
		if(window.innerWidth<=768)
	    {
	      this.breakpoint=1;
	    }
	    
	    else
	    {
	    	this.breakpoint=2;
	    }
  		this.title = 'Chart of Metrics';
		   this.type = 'PieChart';
		   this.chartdata = [
		      ['1', 40],
		      ['2', 20]
		   ];
		   console.log(this.chartdata);
		   this.columnNames = ['testuser1', 'testuser2'];
		   console.log(this.columnNames);
		   this.options = {
			   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
			};
		   this.width = 550;
		   this.height = 300;
		   this.cdr.detectChanges();
  }
  onResize(event) {
    if(event.target.innerWidth <= 768)
    {
      this.breakpoint=1;
    }
    else 
    {
      this.breakpoint=1;
    }
   
  }
  openDialog(): void {
  	let ModalSettings = {
	   height: '300px',
  	   width: '500px',
	  margin: '0 auto',
	  hasBackdrop: true,
	  data: JSON.parse(localStorage.getItem('Array'))
	};
    const dialogRef = this.dialog.open(ModalComponent, ModalSettings);

    dialogRef.afterClosed().subscribe(result => {
      this.dilogue = result;
    });
    }
    onSelectChange(user)
    {
    	this.selectedUser=user;
    	console.log(this.selectedUser);
    }
    compareFavorites()
    {
    	
    	this.title = 'PieChart of Favorites';
		   this.type = 'PieChart';
		   this.chartdata = [
		      [this.userData.user.name, this.userData.user.favourites_count],
		      [this.selectedUser.user.name, this.selectedUser.user.favourites_count]
		   ];

		   console.log(this.chartdata);
		   this.columnNames = [this.userData.user.name, this.selectedUser.user.name];
		   console.log(this.columnNames);
		   this.options = {
			   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
			};
		   this.width = 550;
		   this.height = 300;
		   this.cdr.detectChanges();

    }
    compareFollowers()
    {
    	this.title = 'PieChart of Followers';
		   this.type = 'PieChart';
		   this.chartdata = [
		      [this.userData.user.name, this.userData.user.followers_count],
		      [this.selectedUser.user.name, this.selectedUser.user.followers_count]
		   ];

		   console.log(this.chartdata);
		   this.columnNames = [this.userData.user.name, this.selectedUser.user.name];
		   console.log(this.columnNames);
		   this.options = {
			   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
			};
		   this.width = 550;
		   this.height = 300;
		   this.cdr.detectChanges();
    }
    compareEngagements()
    {
    	this.title = 'PieChart of Engagements';
		   this.type = 'PieChart';
		   this.chartdata = [
		      [this.userData.user.name, this.userData.user.friends_count],
		      [this.selectedUser.user.name, this.selectedUser.user.friends_count]
		   ];

		   console.log(this.chartdata);
		   this.columnNames = [this.userData.user.name, this.selectedUser.user.name];
		   console.log(this.columnNames);
		   this.options = {
			   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
			};
		   this.width = 550;
		   this.height = 300;
		   this.cdr.detectChanges();

    }
    logout()
  {     
        localStorage.removeItem('token1');
  
	this.router.navigate(['/home']);
        return false;
  }
}
