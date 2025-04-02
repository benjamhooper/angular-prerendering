import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';

interface IpAddress {
  ip: string;
}

interface IpInfo extends IpAddress {
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

@Component({
  selector: 'app-external-api',
  imports: [],
  templateUrl: './external-api.component.html',
  styleUrl: './external-api.component.css'
})
export class ExternalApiComponent {
  private http = inject(HttpClient);

  public ipInfo: IpInfo = {} as IpInfo;
  public loading: boolean = true;
  public error: boolean = true;

  constructor() {
    this.getIPAddress().pipe(
      switchMap(response => this.http.get<IpInfo>(`https://ipapi.co/${response.ip}/json`))
    ).subscribe({
      next: (response) => {
        this.ipInfo = response;
        this.error = false;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching IP info:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  public getIPAddress() {
    return this.http.get<IpAddress>("http://api.ipify.org/?format=json");
  }
}
