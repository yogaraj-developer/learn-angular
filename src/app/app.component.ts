import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learn-angular';
  user = {
    name: 'Yogaraj',
    gender: 'Male',
    dob: '12/04/1993'
  };
  user_metadata = {
    education: 'X',
    place: 'Chennai'
  }

  getAppName(param: any) {
    console.log('from child.....', param);
  }
}
