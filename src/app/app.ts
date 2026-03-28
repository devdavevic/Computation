import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',

})
export class AppComponent {

  basicSalary: number = 0;
  tax: number = 0;
  philhealth: number = 0;
  pagibig: number = 0;
  sss: number = 0;
  netIncome: number = 0;

  computeSalary() {
    const salary = Number(this.basicSalary);

    this.tax = salary * 0.10;
    this.philhealth = salary * 0.05;
    this.pagibig = salary * 0.02;
    this.sss = salary * 0.04;

    this.netIncome = salary - (
      this.tax +
      this.philhealth +
      this.pagibig +
      this.sss
    );
  }
}