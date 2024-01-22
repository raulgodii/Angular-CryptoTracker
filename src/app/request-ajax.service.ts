import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestAJAXService {

  trendingCoins: any[] = [];

  constructor(private http: HttpClient) {
  }

  getTrending() {
    this.http.get("https://api.coingecko.com/api/v3/search/trending").subscribe((coins: any) => {
      this.trendingCoins = coins.coins;
      console.log(this.trendingCoins);
    });
  }
}
