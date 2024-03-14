import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainSwiperModule } from "../main-swiper/main-swiper.module";
import { HomeComponent } from "./home.component";
import { StoryModule } from "../story/story.module";
import { ProductSwiperModule } from "../product-swiper/product-swiper.module";

@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        MainSwiperModule,
        StoryModule,
        ProductSwiperModule
    ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
