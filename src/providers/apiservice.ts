import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import  CryptoJS  from 'crypto-js';

/*
  Generated class for the Apiservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Apiservice {
  public data;
  constructor(public http: Http) {}

  load(credentials) {

    // POST API
      var link = 'https://www.sh.pcceduportal.com/api/test?username=' + credentials.username + '&password=' + credentials.password;
      var data = JSON.stringify({ username: credentials.username, password: CryptoJS.SHA256(credentials.password).toString() });
          
      this.http.post(link, data)
        .subscribe(data => {
          credentials.response = data["_body"];
        }, error => {
            credentials.response = "Oooops!";
        });
    
    // GET API
      // if (this.data) {
      //   return Promise.resolve(this.data);
      // }

      // return new Promise(resolve => {
      //   this.http.get('https://www.sh.pcceduportal.com/api/test') // https://randomapi.com/api/8c46783526f492b20c9bb3b2a4f039be?results=10
      //     .map(res => res.json())
      //     .subscribe(data => {
      //       this.data = data.results;
      //       resolve(this.data);
      //     });
      // });
}

}
