import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestAJAXService {

  trendingCoins: any[] = [];
  searchResponse: any[] = [];
  coinData: any = null;

  constructor(private http: HttpClient) {
  }

  getTrending() {
    this.http.get("https://api.coingecko.com/api/v3/search/trending").subscribe((coins: any) => {
      this.trendingCoins = coins.coins;
      console.log(this.trendingCoins);
    });
  }

  searchCoin(searchInput: any) {
    this.http.get("https://api.coingecko.com/api/v3/search?query=" + searchInput).subscribe((searchResponse: any) => {
      this.searchResponse = searchResponse.coins;
      console.log(searchResponse.coins);
    });
  }

  getDataCoin(idCoin: any) {
    this.http.get("https://api.coingecko.com/api/v3/coins/" + idCoin).subscribe((response: any) => {
      this.coinData = response;
      console.log(response);
    });
  }
}
