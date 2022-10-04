import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngFor-input-decorator-exercise';
  users: Object[] = [
    {
      username: "Riley",
      id: 1
    },
    {
      username: "Carter",
      id: 2
    },
    {
      username: "Gavin",
      id: 3
    },
    {
      username: "Brody",
      id: 4
    },
    {
      username: "Jane",
      id: 5
    }
  ]
}
