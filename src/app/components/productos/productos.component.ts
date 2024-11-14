import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AerolabService } from 'src/app/services/aerolab.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private aerolabService: AerolabService
  ) {}

  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id')!;
    this.product = await this.aerolabService.getProductById(productId);
  }
}
