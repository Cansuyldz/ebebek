import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { SwipersModel } from "../../model/swipers.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-main-swiper',
  templateUrl: './main-swiper.component.html',
  styleUrl: './main-swiper.component.scss'
})
export class MainSwiperComponent {
  swipers$: Observable<SwipersModel> = this.http.get<SwipersModel>('../../assets/json/swiper.json');

  constructor(
    private http: HttpClient,
  ) {
  }

  swiperChange(index: number, swiperContainer: HTMLDivElement) {
    var swiperCategories = document.querySelectorAll('.swiper-banner .container-fluid ul li');
    document.querySelector('.swiper-banner .container-fluid ul li.active')!.classList.remove('active');
    swiperCategories[index].classList.add('active');
    var openedSwiper = swiperContainer.querySelector('.swiperElem.active') as HTMLDivElement;
    openedSwiper.classList.remove('active');
    swiperContainer.querySelectorAll('.swiperElem')[index].classList.add('active');
  }

  slideChange(elem: any, prevOrNext: string) {
    var swiperContainer = document.querySelector('.swiper-container') as HTMLDivElement;
    const swiper = elem.elementRef.nativeElement.swiper;
    var swiperImages = document.querySelector('.swiperElem.active .swiper-images') as HTMLDivElement;
    var activeIndex = swiper.activeIndex;
    /// sliderın ilk slide'ında geri butonuna bastığında slider geri alma
    if (activeIndex == 0 && prevOrNext == 'prev') {
      swiperContainer.querySelector('.swiperElem.active')!.classList.remove('active');
      var swiperLength = swiperContainer.querySelectorAll('.swiperElem').length;
      swiperContainer.querySelectorAll('.swiperElem')[swiperLength - 1].classList.add('active')
      return;
    }
    var lastIndex = swiperImages.querySelectorAll('.swiper-img-w').length - 1;
    /// sliderın son slide'ında ileri butonuna bastığında slider'ı ileri alma
    if (activeIndex == lastIndex) {
      var activeSlider = swiperContainer.querySelector('.swiperElem.active') as HTMLDivElement;
      var activeLength = activeSlider.className.split('-')[1];
      activeSlider.classList.remove('active');
      document.querySelectorAll('.swiper-container .swiperElem')[parseInt(activeLength) + 1]!.classList.add('active');
      document.querySelectorAll('.swiper-banner .container-fluid ul li')[parseInt(activeLength) + 1].classList.add('active')
      document.querySelector('.swiper-banner .container-fluid ul li.active')!.classList.remove('active')
      return;
    }
    if (swiperImages) {
      swiperImages.querySelector('.swiper-img-w.active')!.classList.remove('active');
      swiperImages.querySelectorAll('.swiper-img-w')[prevOrNext == 'next' ? activeIndex + 1 : activeIndex - 1].classList.add('active');
    }
    prevOrNext == 'next' ? swiper.slideNext() : swiper.slidePrev();
  }
}
