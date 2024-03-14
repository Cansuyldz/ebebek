import { SwiperOptions } from "swiper";

export interface SwipersModel {
  categories: [{ name: string; }],
  swipers: SwiperItemModel[]
}

interface SwiperItemModel {
  id: string;
  name: string;
  background: string
  config: SwiperOptions;
  swiperItems: [
    {
      index: number;
      img: string
    }
  ]
}

export interface ProductSwiperModel {
  title: string;
  background?: string;
  config:SwiperOptions;
  productSwiper: ProductSwiperItemModel[]
}

interface ProductSwiperItemModel {
  image: string;
  text: string;
  price: string;
  oldPrice?: string;
  percent?: string;
  promo?: string
}

