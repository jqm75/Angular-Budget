import { Component } from '@angular/core';
import { Budget } from '../budget/interfaces/budget.interface';
import { BudgetService } from '../services/budget.service';
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.sass']
})

export class BudgetListComponent {

  /* public sortColumn: string = ''
  public sortDirection: string = 'asc' */

  budgetList: Budget[] = [];

  constructor (

    private budgetService: BudgetService

  ) {

    this.budgetList = this.budgetService.budgetList

  }

  showBudgetList = () => {
    this.budgetService.showBudgetList = !this.budgetService.showBudgetList
  }

  deleteBudget(index: number) {
    this.budgetList.splice(index, 1);
  }

 /*  sortTable(column: string) {
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

