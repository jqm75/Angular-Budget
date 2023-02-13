import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { Budget } from '../interfaces/budget.interface';
import { BudgetService } from '../services/budget.service';

@Component({
  selector   : 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent implements OnInit {
  public total     = 0;
  public showPanel = false;

  constructor(
    private router: Router,
    private budgetService: BudgetService
  ) {}

  ngOnInit(): void {
    this.router.getCurrentNavigation();
  }

  webCheck = (event: Event) => {
    const checkButton = event.target as HTMLInputElement;
    this.showPanel = checkButton.checked;
    this.budgetService.quantityWeb = checkButton.checked ? 1 : 0;
    this.budgetService.quantityPages = checkButton.checked ? 1 : 0;
    this.budgetService.quantityLang = checkButton.checked ? 1 : 0;
    this.totalResult();
  };

  seoCheck = (event: Event) => {
    const checkButton = event.target as HTMLInputElement;
    this.budgetService.quantitySeo = checkButton.checked ? 1 : 0;
    this.totalResult();
  };

  adsCheck = (event: Event) => {
    const checkButton = event.target as HTMLInputElement;
    this.budgetService.quantityAds = checkButton.checked ? 1 : 0;
    this.totalResult();
  };

  saveQuantity = (pageLangQuantity: Budget) => {
    this.budgetService.quantityPages = pageLangQuantity.pages;
    this.budgetService.quantityLang = pageLangQuantity.languages;
    this.totalResult();
  };

  totalResult = () => {
    this.total = this.budgetService.totalResult();
  };
}
