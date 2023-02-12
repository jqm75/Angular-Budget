import { Component, OnInit } from '@angular/core';
import { Budget } from '../interfaces/budget.interface';
import { BudgetService } from '../services/budget.service';
import { Router, Routes } from '@angular/router';


@Component({

  selector   : 'app-main',
  templateUrl: './main.component.html',
  styleUrls  : ['./main.component.sass']

})

export class MainComponent implements OnInit{

  public total      : number = 0;
  public showPanel  : Boolean = false;

  constructor (

    private router       : Router,
    private budgetService: BudgetService

  ){}

  ngOnInit(): void {
    this.router.getCurrentNavigation();

    // console.log( this.router.getCurrentNavigation()!.extractedUrl.queryParams );

  }


  webCheck( event:Event ){

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.showPanel = true;
      this.budgetService.quantityWeb = 1;
      this.budgetService.quantityPages = 1;
      this.budgetService.quantityLang = 1;

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

  saveQuantity(pageLangQuantity: Budget) {

    this.budgetService.quantityPages = pageLangQuantity.pages;
    this.budgetService.quantityLang  = pageLangQuantity.languages;

    this.totalResult();

  }

  totalResult(){

    this.total = this.budgetService.totalResult();

  }

}
