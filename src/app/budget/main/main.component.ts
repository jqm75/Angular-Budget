import { Component } from '@angular/core';
import { PageLangQuantity } from '../interfaces/page-lang-quantity';
import { BudgetService } from '../services/budget.service';


@Component({

  selector   : 'app-main',
  templateUrl: './main.component.html',
  styleUrls  : ['./main.component.sass']

})

export class MainComponent {

  public total      : number = 0;
  public showPanel  : Boolean = false;

  constructor (

    private budgetService: BudgetService

  ){}


  webCheck( event:Event ){

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.showPanel = true;
      this.budgetService.quantityWeb = 1;

    } else {

      this.showPanel = false;

      this.budgetService.quantityPages, this.budgetService.quantityLang = 0;

      this.budgetService.quantityWeb = 0;

    }

    this.totalResult();

  }

  seoCheck( event:Event ) {

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.budgetService.quantitySeo = 1;

    } else {

      this.budgetService.quantitySeo = 0;

    }

    this.totalResult();

    console.log( this.totalResult() );


  }

  adsCheck( event:Event ){

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.budgetService.quantityAds = 1;

    } else {

      this.budgetService.quantityAds = 0;

    }

    this.totalResult();

  }

  saveQuantity(pageLangQuantity: PageLangQuantity) {

    this.budgetService.quantityPages = pageLangQuantity.quantityPages;
    this.budgetService.quantityLang  = pageLangQuantity.quantityLang;

    this.totalResult();

  }

  totalResult(){

    this.total = this.budgetService.totalResult();

  }

}


//TODO: Sumar el total  + webPagesQuantity * 30 y webLangQuantity * 30 en una función totalResult()

//  (Nombre de pàgines * el nombre d'idiomes * 30)€.
