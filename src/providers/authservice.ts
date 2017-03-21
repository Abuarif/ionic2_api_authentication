import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Apiservice } from './apiservice';
import  CryptoJS  from 'crypto-js';

/*
  Generated class for the Authservice provider. 

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class User {
  username: string;
  password: string;
 
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
@Component({
  providers: [Authservice]
})
@Injectable()
export class Authservice {
  CryptoJS = require('crypto-js');
  currentUser: User;
  // public students: Array<{id: number, firstname: string, lastname: string, username: string, password: string}>;

  constructor(public http: Http, public apiserve: Apiservice) { 
    // GET API
      // this.apiserve.load()
      //   .then(data => {
      //     this.students = data;
      //   });
    // this.students = [
    //   {id: 20122643, firstname: 'Adam', lastname: 'Lacay', username: 'adaml', password: '20122643'},
    //   {id: 20131560, firstname: 'Jodi Ann', lastname: 'Familaran', username: 'jodif', password: '20131560'},
    //   {id: 20135776, firstname: 'Brandon', lastname: 'Boado', username: 'brandonb', password: '20131560'},
    //   {id: 20135845, firstname: 'Angelica', lastname: 'Marcelino', username: 'angelicam', password: '20135845'},
    //   {id: 20097891, firstname: 'Kurt', lastname: 'Acosta', username: 'kurta', password: '20097891'},
    // ]
  }
  
  public login(credentials) {
    this.apiserve.load(credentials);
    // if (credentials.username === null || credentials.password === null) {
    //   // return Observable.throw("Login Failed. Credentials invalid");
    //   return false;
    // } else {
    //   let l = this.students.length;
    //   let hashpassword = CryptoJS.SHA256(credentials.password).toString();
    //   console.log('credentials : ' + credentials.username + ', ' + hashpassword);
    //   for (let i = 0; i < l; i++){
    //     console.log('count : ' + i + ' : user = ' + this.students[i].username + ' : pass = ' + CryptoJS.SHA256(this.students[i].password).toString());
    //     if (credentials.username === this.students[i].username && hashpassword === this.students[i].password) {
    //       console.log(this.students[i].username + ' : user found ! ');
        
    //       // return Observable.create(observer => {
    //       //   // At this point make a request to your backend to make a real check!
    //       //   let access = (credentials.username === this.students[i].username && hashpassword === this.students[i].password);
    //       //   this.currentUser = new User(credentials.username, hashpassword);
    //       //   localStorage.setItem("username", credentials.username);
    //       //   localStorage.setItem("password", credentials.hashpassword);
    //       //   observer.next(access);
    //       //   observer.complete();
    //       // });
    //       break;
    //     }  
    //   }
    // }
  }
}
