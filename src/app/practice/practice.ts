import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-practice',
  imports: [CommonModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {

  data: any[] = [];
  ARRAY1 = [1, 2, 3, 4, 5];
  ARRAY2 = [6, 7, 8, 9, 10];
  // myObservable = new Observable();

  myObservable = of(this.ARRAY1, this.ARRAY2, true, "Hello", 100, 200.5, { name: "John", age: 30 }, [1, 2, 3, 4, 5]);

  getData() {
    this.myObservable.subscribe({
      next: (value: any) => {
        this.data.push(value)
      },
      error(error: any) {
        console.log(error);
        alert(error);
      },
      complete() {
        console.log("Completed");

        alert("Completed");
      }
    })
  }


}
