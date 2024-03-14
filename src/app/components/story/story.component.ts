import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { StorysModel } from "../../model/story.model";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  storyies$: Observable<StorysModel[]> = this.http.get<StorysModel[]>('../../assets/json/story.json')

  constructor(
    private http: HttpClient,
  ) {
  }
}

