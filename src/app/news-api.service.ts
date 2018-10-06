import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  base_url = 'http://newsapi.org/v2/';  
  api_key = '&apiKey=e6f9f0324de54b09854321c7d3d76d15'

  constructor(private http: HttpClient) { }
  
  initSources() {
    return this.http.get(`${this.base_url}sources?language=en${this.api_key}`);    
  }

  initArticles() {
    return this.http.get(`${this.base_url}top-headlines?sources=techcrunch${this.api_key}`);
  }

  getArticlesByID(source: String) {
    return this.http.get(`${this.base_url}top-headlines?sources=${source}${this.api_key}`)
  }
}
