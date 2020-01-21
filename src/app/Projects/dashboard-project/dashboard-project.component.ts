import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'


@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrls: ['./dashboard-project.component.css']
})
export class DashboardProjectComponent implements OnInit {

  constructor() { }
  public chart: any = null;

  test = {
    name:''
  };
  projects = [
    {  Company: 'Barcel', Name: 'Instalacion de codos', Status: "Ok" },
    {  Company: 'Barcel', Name: 'Instalacion de tubos', Status: "Retraso" },
    {  Company: 'Dobos', Name: 'Instalacion de remesas', Status: "Retraso Considerable" },
    {  Company: 'Barcel', Name: 'Instalacion de tubos', Status: "Retraso" },
    {  Company: 'Dobos', Name: 'Instalacion de remesas', Status: "Retraso Considerable" }
  ];

  personal = [
    { name:"Daniel Flores", workedHours: 20, extraHours:16},
    { name:"Mario Flores", workedHours: 40},
    { name:"El chato Flores", workedHours: 40, extraHours:2}
  ]
  ngOnInit() {
    this.chart = new Chart('barChart', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }

    });
  }

   /**
   * functions
   */

  RowSelected(u:any){
    this.test.name = u.Name;
    console.log(u); 
  }
}
