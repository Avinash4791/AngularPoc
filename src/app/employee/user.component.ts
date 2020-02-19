import {Component, OnInit} from '@angular/core';
import {User} from './user.model';

@Component ({
    selector : 'app-emp', // directive for any html page, mostly used in index.html after body tag.
    templateUrl : './user.component.html', // its a file containing template html, template :consist of HTML template like <h1></h1>
  })
export class UserComponent {
    users : User[];
    show:boolean = true;
    buttonName:string = 'Hide';

    ngOnInit() {
      this.users = [{ name : 'Mahesh', age : 25 },
    {name: 'Shakti', age : 23},
    {name: 'Krishna', age : 21},
    {name: 'Radha', age : 21},
    {name: 'Nimesh', age: 24}];
    }

    toggleContent() {
      this.show = !this.show;
      if(this.show)  
        this.buttonName = "Hide";
      else
        this.buttonName = "Show";
    }
}
