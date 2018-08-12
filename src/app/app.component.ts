import { Component } from '@angular/core';
import { MEETUPS } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  date = new Date('2018-08-01');
  value = 0.12;
  num = 1000;

  events = MEETUPS;
}
