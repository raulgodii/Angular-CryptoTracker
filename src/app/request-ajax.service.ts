import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestAJAXService {

  trendingCoins: any[] = [];
  searchResponse: any[] = [];
  coinData: any = null;
  spinner: boolean = false;

  constructor(private http: HttpClient) {
  }

  getTrending() {
    this.spinner = true;
    this.http.get("https://api.coingecko.com/api/v3/search/trending").subscribe((coins: any) => {
      this.trendingCoins = coins.coins;
      console.log(this.trendingCoins);
      this.spinner = false;
    });
  }

  searchCoin(searchInput: any) {
    this.spinner = true;
    this.http.get("https://api.coingecko.com/api/v3/search?query=" + searchInput).subscribe((searchResponse: any) => {
      this.searchResponse = searchResponse.coins;
      console.log(searchResponse.coins);
      this.spinner = false;
    });
    
  }

  getDataCoin(idCoin: any) {
    this.spinner = true;
    this.http.get("https://api.coingecko.com/api/v3/coins/" + idCoin).subscribe((response: any) => {
      this.coinData = response;
      console.log(response);
      this.spinner = false;
    });
  }
}
