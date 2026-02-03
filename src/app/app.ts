import { Component } from '@angular/core';
import { Practice } from './practice/practice';

@Component({
  selector: 'app-root',
  imports: [Practice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Ekart";
}
