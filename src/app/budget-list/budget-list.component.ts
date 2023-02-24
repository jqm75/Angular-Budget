import { Component } from '@angular/core';
import { Budget } from '../budget/interfaces/budget.interface';
import { BudgetService } from '../services/budget.service';
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.sass']
})

export class BudgetListComponent {

  public budgetList: Budget[] = []; 
  public searchText: string = "";
  public currentOrder = this.sortById;

  constructor (

    private budgetService: BudgetService

  ) {
    this.budgetList = this.budgetService.budgetList
  }

  showBudgetList = () => {
    this.budgetService.showBudgetList = !this.budgetService.showBudgetList
  }

  sortById(){
    this.currentOrder = this.sortById;
    this.budgetList = this.budgetList.sort((a: Budget, b: Budget) => {
      return a.id - b.id 
    })
  }

  sortByClient(){
    this.currentOrder = this.sortByClient;
    this.budgetList = this.budgetList.sort((a: Budget, b: Budget) => {
      if(a.clientName > b.clientName) return 1;
      if(a.clientName < b.clientName) return -1;
      return 0;
    })
  }

  sortByBudget(){
    this.currentOrder = this.sortByBudget;
    this.budgetList = this.budgetList.sort((a: Budget, b: Budget) => {
      if(a.budgetName > b.budgetName) return 1;
      if(a.budgetName < b.budgetName) return -1;
      return 0;
    })
  }


  resetBudgetList(){

    this.budgetList = this.budgetService.budgetList
    this.sortById()

  }
  
  sortByDate(){
    this.currentOrder = this.sortByDate;
    this.budgetList = this.budgetList.sort((a: Budget, b: Budget) => {
      if((a.date && b.date) && a.date > b.date) return 1;
      if((a.date && b.date) && a.date < b.date) return -1;
      return 0;
    })
  }

  deleteBudget(index: number) {
    this.budgetList.splice(index, 1);
  }
  
  searchByBudgetName(searchText: string){
    
    this.budgetList = this.budgetService.budgetList
    this.budgetList = this.budgetList.filter((bg) => {
      return bg.budgetName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
    this.currentOrder();
  
  }
  /* deleteSearch(){
    this.searchText = "";
    this.goBack();
    this.currentOrder();
  } */
  
}

