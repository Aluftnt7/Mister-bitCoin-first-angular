import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import * as moment from 'moment';




@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  // tslint:disable-next-line: variable-name
  // private _rate$ = new BehaviorSubject<any>(this._rate);
  // public rate$ = this._rate$.asObservable();

 async getRate(coins: number = 1){
    const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);

    // this._rate$.next(this._rate)
    return rate.data;
  }

  async _getMarketPrice(){

    let marketTable = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    return  marketTable.data.values.map((value: { x: number; y: any; }) => {
      return  [this.formatDate(value.x * 1000), value.y];
    });

  }

async  getConfirmedTransactions(){
  let tradeVolumes = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
  return  tradeVolumes.data.values.map((value: { x: number; y: any; }) => {
    return  [this.formatDate(value.x * 1000), value.y];
  });
  }




  formatDate(timeStamp) {
    return moment(timeStamp).format('MMM Do YY')
  }

  constructor() { }
}
