import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RegisterComponent } from '../../components/register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  domainName = "www.aprendetypescript.com";
  price = 100;
}
