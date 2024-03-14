import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwiperModule } from "swiper/angular";
import { ProductSwiperComponent } from "./product-swiper.component";

@NgModule({
  declarations: [
    ProductSwiperComponent
  ],
  exports: [
    ProductSwiperComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})

export class ProductSwiperModule {
}
