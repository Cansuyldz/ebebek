import { NgModule } from "@angular/core";
import { MainSwiperComponent } from "./main-swiper.component";
import { CommonModule } from "@angular/common";
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    MainSwiperComponent
  ],
  exports: [
    MainSwiperComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})

export class MainSwiperModule {
}
