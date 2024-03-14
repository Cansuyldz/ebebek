import { Component, Input, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductSwiperModel } from "../../model/swipers.model";

@Component({
  selector: 'app-product-swiper',
  templateUrl: './product-swiper.component.html',
  styleUrl: './product-swiper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductSwiperComponent {

  @Input() swiper!: ProductSwiperModel;
  config = {
    slidesPerView: 5,
    navigation: true
  }

  constructor(
    private http: HttpClient,
  ) {
    console.log(this.swiper)
  }
}
