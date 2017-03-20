import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Apiservice } from './apiservice';
import { CryptoJS } from 'crypto-js';

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
  public students: any;

  constructor(public http: Http, public apiserve: Apiservice) { 
    this.apiserve.load()
      .then(data => {
        this.students = data;
      });
  }
  
  public login(credentials) {
    // if (credentials.username === null || credentials.password === null) {
      // return Observable.throw("Login Failed. Credentials invalid");
      // return false;
    // } else {
      let l = this.students.length;
      console.log(this.students.length + ' : ');
      // let hashpassword = CryptoJS.SHA256(credentials.password).toString(CryptoJS.enc.Hex);
      for (let i = 0; i < l; i++){
        // if (credentials.username === this.students[i].username && hashpassword === this.students[i].password) {
          console.log(this.students[i].username + ' : ');
        // }
      }
      
      // return Observable.create(observer => {
      //   // At this point make a request to your backend to make a real check!
      //   let access = (credentials.password === "20135845" && credentials.username === "angel");
      //   this.currentUser = new User(credentials.username, credentials.password);
        
      //   localStorage.setItem("username", credentials.username);
      //   localStorage.setItem("password", credentials.password);
      //   observer.next(access);
      //   observer.complete();
      // }); 
    // }
  }
}
