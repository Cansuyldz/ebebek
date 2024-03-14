import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  headerMenu!: any[];
  level2OpenElement!: HTMLDivElement;

  constructor(
    private http: HttpClient,
  ) {
    this.http.get<any[]>('../../assets/json/menu.json').subscribe(res => {
      this.headerMenu = res;
    })
  }

  ngOnInit() {
  }

  menuOpen(event: any) {
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
    } else {
      event.target.classList.add('active');
    }
  }

  level2Open(event: any) {
    if (this.level2OpenElement) {
      console.log(this.level2OpenElement);
      this.level2OpenElement.classList.remove('active');
    }
    var className = event.target.classList[0];
    var index = className.split('_')[1];
    console.log(index)
    var elem = document.querySelector('.level-2-item-index_' + index) as HTMLDivElement;
    this.level2OpenElement = elem;
    elem.classList.add('active');
  }
}
