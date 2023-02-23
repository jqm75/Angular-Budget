import { Injectable } from '@angular/core';
import { Budget } from '../budget/interfaces/budget.interface';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  private webPrice     : number = 500
  private seoPrice     : number = 300
  private adsPrice     : number = 200
  private extrasPrice  : number = 30

  public quantityPages : number = 0
  public quantityLang  : number = 0
  public quantityWeb   : number = 0
  public quantitySeo   : number = 0
  public quantityAds   : number = 0

  public clientName    : string = ''
  public budgetName    : string = ''

  public total         : number = 0

  public showBudgetList: boolean = false

/*   public sortColumn: string = ''
  public sortDirection: string = 'asc' */

  public budgetList    : Budget [] = []

  totalResult(){

    this.total = 0;

    this.total += this.quantityWeb * this.webPrice
    this.total += this.quantitySeo * this.seoPrice
    this.total += this.quantityAds * this.adsPrice
    this.total += this.quantityPages * this.quantityLang * this.extrasPrice

    return this.total

  }

  saveDataBudget(budgetDataForm:FormGroup){

    let budget: Budget = {
      //id          : this.budgetList.length+1,
      id          : this.generateUniqueId(),
      web         : this.webPrice,
        pages     : this.quantityPages,
        languages : this.quantityLang,

      seo         : this.seoPrice,
      ads         : this.adsPrice,

      date        : new Date(),

      clientName  : budgetDataForm.value.clientName,
      budgetName  : budgetDataForm.value.budgetName

    }
    
    if (budgetDataForm.invalid) {

      budgetDataForm.markAllAsTouched();
      return;

    }

    budget.total = this.totalResult()

    this.budgetList.push(budget);

    console.log(this.budgetList);

  }

  generateUniqueId() {
      
    let id = 1;
  
    if (this.budgetList.length > 0) {


      const ids = this.budgetList.map(budget => (budget.id));
      const maxId = Math.max(...ids);
      id = maxId + 1;
  
      while (ids.includes(id)) {
        id++;
      }
    }
  
    return id;
  }

  /* sortTable(column: string) {
    if (column === this.sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  
    const isAsc = this.sortDirection === 'asc';
    this.budgetList = this.budgetList.sort((a, b) => {
      if (this.sortColumn === 'clientName') {
        return this.compare(a.clientName, b.clientName, isAsc);
      } else if (this.sortColumn === 'budgetName') {
        return this.compare(a.budgetName, b.budgetName, isAsc);
      } else if (this.sortColumn === 'date') {
        return this.compare(new Date(a.date), new Date(b.date), isAsc);
      } else if (this.sortColumn === 'total') {
        return this.compare(a.total, b.total, isAsc);
      } else {
        return 0;
      }
    });
  }
  
  public compare(a: any, b: any, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  } */
}
