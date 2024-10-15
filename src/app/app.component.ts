import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Main } from './jsonplaceholder/component/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, Main], // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jason';
}
