import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../../services/bitcoin.service'

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  marketPriceObj: Promise <any>;

  marketPrice = {
    title: 'Market price (USD)',
    type: 'AreaChart',
    data: [],
    columnNames: ['Date', 'Usd'],
    options: null,
    width: 550,
    height: 400,
  };

  tradeVolumes = {
    title: 'Exchange Trade Volume (USD)',
    type: 'AreaChart',
    data: [],
    columnNames: ['Date', 'Usd'],
    options: null,
    width: 550,
    height: 400,
  }

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private bitcoinService: BitcoinService) {

   }

   async  getConfirmedTransactions(){
    const tradeData = await  this.bitcoinService.getConfirmedTransactions()
    this.tradeVolumes.data = tradeData
  }

  async getMarketPriceObj(){
    const marketObj = await  this.bitcoinService._getMarketPrice()
    this.marketPrice.data = marketObj
   }



  ngOnInit(): void {
    this.getMarketPriceObj()
    this.getConfirmedTransactions()

  //   this.chart.data =  [
  //     ['Firefox', 45.0],
  //     ['IE', 26.8],
  //     ['Chrome', 12.8],
  //     ['Safari', 8.5],
  //     ['Opera', 6.2],
  //     ['Others', 0.7]
  //  ];
   // tslint:disable-next-line: align
  }

}
