import { Component, OnInit } from '@angular/core';
import { AerolabService } from 'src/app/services/aerolab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private aerolabService: AerolabService) {}

  async ngOnInit() {
    this.products = await this.aerolabService.getProducts();
  }
}
