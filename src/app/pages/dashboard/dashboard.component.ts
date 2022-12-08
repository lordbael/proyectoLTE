import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }
 
  view: [number, number] = [600, 300];

  view2: [number, number] = [560, 300];

  view3: [number, number] = [500, 400];

  view4: [number, number] = [500, 300];

  // **options

  //circle
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  //vertical
  showXAxis = true;
  showYAxis = true;
  gradient2 = false;
  showLegend2 = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  //horizontal
  showXAxis3: boolean = true;
  showYAxis3: boolean = true;
  gradient3: boolean = false;
  showLegend3: boolean = true;
  showXAxisLabel3: boolean = true;
  yAxisLabel3: string = 'Country';
  showYAxisLabel3: boolean = true;
  xAxisLabel3: string = 'Population';

  //area
  legend: boolean = true;
  showLabels4: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel4: boolean = true;
  showXAxisLabel4: boolean = true;
  xAxisLabel4: string = 'Year';
  yAxisLabel4: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

   single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  constructor() {
    /* Object.assign(this, { single }); */
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
