import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  getTitle() {
    return "Hello";
  }
  title = "Home?";
  subheader = "To Be or Not to Be";
  count = 50;
}
