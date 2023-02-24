import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { Budget } from '../interfaces/budget.interface';
import { BudgetService } from '../../services/budget.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector   : 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent implements OnInit {

  public total     = 0;
  public showPanel = false;

  public budgetDataForm : FormGroup = this.fb.group({
    clientName: ['', [Validators.required, Validators.minLength(3)] ],
    budgetName: ['', [Validators.required, Validators.minLength(3)] ]
  })

  constructor(
    private router: Router,
    public budgetService: BudgetService,
    private fb: FormBuilder
  ) {}

  invalidField( clientName: string ) {
    return this.budgetDataForm.controls[clientName].errors && this.budgetDataForm.controls[clientName].touched
  }

  ngOnInit(): void {
    this.router.getCurrentNavigation();
  }

  showBudgetList = () => {
    this.budgetService.showBudgetList = !this.budgetService.showBudgetList
  }

  webCheck = (event: Event) => {
    const checkButton = event.target as HTMLInputElement;
    this.showPanel = checkButton.checked;
    this.budgetService.quantityWeb = checkButton.checked ? 1 : 0;
    this.budgetService.quantityPages = checkButton.checked ? 1 : 0;
    this.budgetService.quantityLang = checkButton.checked ? 1 : 0;
    this.totalResult();

    this.deleteError();
  };

  seoCheck = (event: Event) => {
    const checkButton = event.target as HTMLInputElement;
    this.budgetService.quantitySeo = checkButton.checked ? 1 : 0;
    this.totalResult();

    this.deleteError();
  };

  adsCheck = (event: Event) => {
    const checkButton = event.target as HTMLInputElement;
    this.budgetService.quantityAds = checkButton.checked ? 1 : 0;
    this.totalResult();

    this.deleteError();
  };

  saveQuantity = (pageLangQuantity: Budget) => {
    this.budgetService.quantityPages = pageLangQuantity.pages;
    this.budgetService.quantityLang = pageLangQuantity.languages;
    this.totalResult();
  };

  saveClientName = (event: Event) => {
    const checkButton = event.target as HTMLInputElement;
    this.budgetService.quantityAds = checkButton.checked ? 1 : 0;
    this.totalResult();
  };

  totalResult = () => {
    this.total = this.budgetService.totalResult();
  };

  saveDataBudget () {
    if ( this.total != 0)
    this.budgetService.saveDataBudget(this.budgetDataForm)
    //if (!this.budgetService.showBudgetList) this.showBudgetList()
    else {
      const checkboxList = document.querySelectorAll('input[type=checkbox]'); // con document y querySelectorAll buscamos todos los checkbox de la página, se podría cambiar ('input[type=checkbox]') por un la clase .budgetCheckbox
    
    for (let i = 0; i < checkboxList.length; i++) {
      let checkbox = checkboxList[i] as HTMLInputElement;
      checkbox.classList.add('error')
    }
  }
    
  }

  deleteError (){
    const checkboxList = document.querySelectorAll('input[type=checkbox].error');

    for (let i = 0; i < checkboxList.length; i++) {
      let checkbox = checkboxList[i] as HTMLInputElement;
      checkbox.classList.remove('error')
    }
  }

}
