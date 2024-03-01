import { Component, OnInit, AfterViewInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/user.service';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.component.html',
  styleUrls: ['./accueiladmin.component.css']
})
export class AccueiladminComponent implements OnInit, AfterViewInit {
  clients: user[] = [];

  constructor(private client: ClientService, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllClient();
  }

  getAllClient(): void {
    this.client.getAllClient().subscribe(
      (response) => {
        this.clients = response.data;
        console.log(this.clients);
      }
    );
  }

  ngAfterViewInit(): void {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'donut',
        width: 330,
      },
      series: [44, 55, 41],
      labels: ['Comedy', 'Action', 'SciFi'],
      colors: ['#E08D14', '#02273D', '#21758F'],
      legend: {
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
       labels: {
          colors: '#333'
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '50%, 37%, 5%', // Taille de chaque tranche
          }
        }
      }
    };

    const chart = new ApexCharts(document.getElementById('chart'), options);
    chart.render();
  }
}
