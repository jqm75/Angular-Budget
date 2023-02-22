import { Component } from '@angular/core';
import { Budget } from '../budget/interfaces/budget.interface';
import { BudgetService } from '../services/budget.service';
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.sass']
})

export class BudgetListComponent {

  budgetList: Budget[] = [];

  constructor (

    private budgetService: BudgetService

  ) {

    this.budgetList = this.budgetService.budgetList

  }

  showBudgetList = () => {
    this.budgetService.showBudgetList = !this.budgetService.showBudgetList
  }
}

