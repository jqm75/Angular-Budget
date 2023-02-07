import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  private webPrice   : number = 500;
  private seoPrice   : number = 300;
  private adsPrice   : number = 200;
  private extrasPrice: number = 30;
  // private pagesPrice    : number = 0;
  // private languagesPrice: number = 0;

  public quantityPages : number = 0
  public quantityLang  : number = 0
  public quantityWeb   : number = 0
  public quantitySeo   : number = 0
  public quantityAds   : number = 0

  public total : number = 0;

  totalResult(){

    this.total = 0;

    this.total += this.quantityWeb * this.webPrice
    this.total += this.quantitySeo * this.seoPrice
    this.total += this.quantityAds * this.adsPrice
    this.total += this.quantityPages * this.quantityLang * this.extrasPrice

    return this.total

  }

}
