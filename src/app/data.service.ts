import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
	private user = new BehaviorSubject([]);
  	currentUser = this.user.asObservable();
  constructor() { }
  changeUser(user: any) {
    this.user.next(user)
  }
}
