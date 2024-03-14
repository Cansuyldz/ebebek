import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductSwiperModel } from "../../model/swipers.model";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  pickForYouSwiper$: Observable<ProductSwiperModel> = this.http.get<ProductSwiperModel>('../../assets/json/sizin_icin_sectiklerimiz.json');
  shops$: Observable<ProductSwiperModel> = this.http.get<ProductSwiperModel>('../../assets/json/cok_satanlar.json');
  outlets$: Observable<ProductSwiperModel> = this.http.get<ProductSwiperModel>('../../assets/json/super-fiyat.json');

  constructor(
    private http: HttpClient,
  ) {
  }
}
