import { Component } from '@angular/core';
import { ExternalApiComponent } from "../external-api/external-api.component";
import packageInfo from '../../../package.json';

@Component({
  selector: 'app-entry',
  imports: [ExternalApiComponent],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})

export class EntryComponent {

  public currentYear: number;
  
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  public getEnvironmentVersion(): string {
    return packageInfo.version;
  }
}
