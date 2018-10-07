import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mArticles:Array<any>;
  mSources: Array<any>;

  constructor(private newsApi: NewsApiService) {
    console.log('App component constructor called');
  }

  ngOnInit() {
    // Load articles
    this.newsApi.initArticles()
      .subscribe(data => this.mArticles = data['articles']);

    // Load news sources
    this.newsApi.initSources()
      .subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log("Selected source is: " + source);
    this.newsApi.getArticlesByID(source)
      .subscribe(data => this.mArticles = data['articles']);
  }
}
