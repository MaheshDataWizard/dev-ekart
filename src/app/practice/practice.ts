import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-practice',
  imports: [CommonModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {

  data: any[] = [];

  myObservable = new Observable((sub) => {
    setTimeout(() => sub.next(1), 1000);
    setTimeout(() => sub.next(2), 2000);
    setTimeout(() => sub.next(3), 3000);
    setTimeout(() => sub.next(4), 4000);
    setTimeout(() => sub.next(5), 5000);
    setTimeout(() => sub.next(6), 6000);
    setTimeout(() => sub.next(7), 7000);
    setTimeout(() => sub.next(8), 8000);
    setTimeout(() => sub.next(9), 9000);
    setTimeout(() => sub.next(10), 10000);
  })

  getData() {
    this.myObservable.subscribe((value: any) => {
      this.data.push(value);
    })
  }


}
