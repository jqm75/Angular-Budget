import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PageLangQuantity } from '../interfaces/page-lang-quantity';


@Component({

  selector   : 'app-main',
  templateUrl: './main.component.html',
  styleUrls  : ['./main.component.sass']

})

export class MainComponent {

  private webPrice  : number = 500;
  private seoPrice  : number = 300;
  private adsPrice  : number = 200;
  private pagesPrice    : number = 0;
  private languagesPrice: number = 0;
  private extrasPrice: number = 30;

  private quantityPages : number = 0
  private quantityLang  : number = 0
  private quantityWeb   : number = 0
  private quantitySeo   : number = 0
  private quantityAds   : number = 0


  public total    : number = 0;

  public showPanel: Boolean = false;

  public budgetForm : FormGroup = this.fb.group({



  })

  constructor (

    private fb: FormBuilder,

  ){}


  webCheck( event:Event ){

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.quantityWeb = 1;

    } else {

      this.quantityWeb = 0;

    }

    this.totalResult();

  }

  seoCheck( event:Event ) {

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.quantitySeo = 1;

    } else {

      this.quantitySeo = 0;

    }

    this.totalResult();

    console.log( this.totalResult() );


  }

  adsCheck( event:Event ){

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.quantityAds = 1;

    } else {

      this.quantityAds = 0;

    }

    this.totalResult();

  }

  saveQuantity(pageLangQuantity: PageLangQuantity) {

    //this.total += (pageLangQuantity.quantityPages * this.pagesPrice) + (pageLangQuantity.quantityLang * this.languagesPrice);
    this.quantityPages = pageLangQuantity.quantityPages;
    this.quantityLang  = pageLangQuantity.quantityLang;

    this.totalResult();

  }


  totalResult(){

   // console.log('holi', this.quantityWeb * this.webPrice );

    this.total = 0;

    this.total += this.quantityWeb * this.webPrice
    this.total += this.quantitySeo * this.seoPrice
    this.total += this.quantityAds * this.adsPrice
    this.total += this.pagesPrice * this.quantityLang * this.languagesPrice * this.extrasPrice

    return this.total

  }

}


//TODO: Sumar el total  + webPagesQuantity * 30 y webLangQuantity * 30 en una función totalResult()

//  (Nombre de pàgines * el nombre d'idiomes * 30)€.
