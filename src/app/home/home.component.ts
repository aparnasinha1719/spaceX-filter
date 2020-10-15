import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/spaceX/space-x.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  missions = [];
  years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  constructor(
    private spaceXService: SpaceXService
  ) { }

  ngOnInit(): void {
    this.filterSpaceX();
  }
  filterSpaceX(year?, launchStatus?, landStatus?) {
    this.spaceXService.getMissionsFromServer(year, launchStatus, landStatus).then((response: any) => {
      console.log(response);

      if (response) {
        this.missions = response;
      }
    });

  }
}
