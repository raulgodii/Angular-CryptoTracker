import { Component, OnInit } from '@angular/core';

// import Chart and all chart types (tree-shakeable)
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-prueba',
  template: '<canvas #chartCanvas></canvas>',
  styleUrls: []
})
export class PruebaComponent implements OnInit {
  title = 'angular-charts-data';
  result: any;
  coinPrice: any;
  coinName: any;
  chart1: any = [];
  chart2: any = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {

      this.chart1 = new Chart('canvas1', {
        type: 'line',
        data: {
          labels: this.coinName,
          datasets: [
            {
              data: this.coinPrice,
              borderColor: '#0d47a1',
              fill: false,
              label: 'Line Chart: Crypto Prices',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 1
            },
          ]
        },

        options: {
          aspectRatio: 3
        }
      });

      this.chart2 = new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.coinName,
          datasets: [
            {
              data: this.coinPrice,
              borderColor: '#0d47a1',
              label: 'Bar Chart: Crypto Prices',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          aspectRatio: 3,
        }
      });
  }
}
