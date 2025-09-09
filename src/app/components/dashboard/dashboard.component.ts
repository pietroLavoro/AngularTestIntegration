import { Component } from '@angular/core';
import { UIChart } from "primeng/chart";

@Component({
  selector: 'app-dashboard',
  imports: [UIChart],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  lineData: any;
barData: any;
chartOptions: any;

ngOnInit() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  this.lineData = {
    labels,
    datasets: [
      {
        label: 'Provvigioni',
        data: [65, 59, 80, 81, 56, 85, 90],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.4
      },
      {
        label: 'Contributi',
        data: [28, 48, 40, 19, 86, 27, 60],
        fill: false,
        borderColor: '#66BB6A',
        tension: 0.4
      }
    ]
  };

  this.barData = {
    labels,
    datasets: [
      {
        label: 'Provvigioni',
        backgroundColor: '#42A5F5',
        data: [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label: 'Contributi',
        backgroundColor: '#66BB6A',
        data: [35, 25, 60, 31, 76, 37, 70]
      }
    ]
  };

  this.chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
}


}

