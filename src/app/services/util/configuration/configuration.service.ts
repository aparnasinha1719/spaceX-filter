import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public baseUrl = 'https://api.spacexdata.com/v3/launches?limit=100';
  constructor() { }
}
