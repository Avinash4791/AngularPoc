import {Component} from '@angular/core'; // added component fron angular core library
 
//Decorator
@Component ({
  selector : 'app-root', // directive for any html page, mostly used in index.html after body tag.
  templateUrl : './app.component.html', // its a file containing template html, template :consist of HTML template like <h1></h1>
})
//Class used to make Angular component.
export class AppComponent {
  name:string = "Avinash123";
}