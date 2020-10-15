import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../util/configuration/configuration.service';
@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  constructor(
    private http: HttpClient,
    private configService: ConfigurationService
  ) { }


  getMissionsFromServer(year?, launchStatus?, landStatus?) {
    let query = '';
    if (year) { query = `${query}&launch_year=${year}`; }
    if (launchStatus) { query = `${query}&launch_success=${launchStatus}`; }
    if (landStatus) { query = `${query}&land_success=${landStatus}`; }
    console.log(query);

    return new Promise((resolve, reject) => {
      this.http.get(`${this.configService.baseUrl}${query}`).subscribe((response: any) => {
        if (response) {
          resolve(response);
          return;
        }
        reject(response);

      });
    }).catch(err => err);


  }

}
