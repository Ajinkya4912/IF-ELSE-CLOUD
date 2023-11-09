import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs-data',
  templateUrl: './graphs-data.component.html',
  styleUrls: ['./graphs-data.component.scss'],
})
export class GraphsDataComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: any = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [{ data: [28, 48, 40, 19, 86, 27, 90, 50, 60], label: 'Income' }],
  };

  public barChartOptions: any = {
    responsive: false,
  };
  public lineChartData: any = {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        data: [0, 20, 10, 30, 20, 50, 60],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'blue',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'blue',
      },
    ],
  };
  public lineChartOptions: any = {
    responsive: false,
  };
  public lineChartLegend = true;
  public doughnutChartLabels: string[] = ['Men', 'Electronics', 'Women'];
  public doughnutChartDatasets: any = [
    { data: [500, 450, 100], label: 'Series A' },
  ];

  public doughnutChartOptions: any = {
    responsive: false,
  };

  constructor() {}

  ngOnInit() {}
}
