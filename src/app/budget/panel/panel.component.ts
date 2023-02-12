import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Budget } from '../interfaces/budget.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({

  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']

})

export class PanelComponent implements OnInit {


  @Output() pagesAndLangQuantityEmitter = new EventEmitter<Budget>;

  constructor (

    private fb: FormBuilder,
    private budgetService: BudgetService

  ){}

  ngOnInit(): void {

    const total = this.budgetService.totalResult()

    this.budgetForm.valueChanges.subscribe(form => this.pagesAndLangQuantityEmitter.emit(form));

  }

  calculateAddAndSubtract(inputPagLang: string, add: boolean = false ): void {

    let valueControl = this.budgetForm.get(inputPagLang)!.value;
    add ? valueControl++ : valueControl--
    this.budgetForm.get(inputPagLang)!.patchValue(valueControl)

  }

  public budgetForm : FormGroup = this.fb.group({

    pages: [1, [Validators.required, Validators.min(1)] ],
    languages: [1, [Validators.required, Validators.min(1)] ]

  })

 /*  add(pag: string) {

    if (pag === 'pages') {
      this.quantityPages++;
    }
    if (pag === 'languages') {
      this.quantityLang++;
    }
  }

  substract(lang: string) {

    if (lang === 'pages' && this.quantityPages > 1) {
      this.quantityPages--;
    }
    if (lang === 'languages' && this.quantityLang > 1) {
      this.quantityLang--;
    }
  } */

  /* private quantityPages: number = 0
  private quantityLang : number = 0

  pagesEntered ( event:Event ) {

    let pageInput = event.target as HTMLInputElement;

    this.quantityPages = parseInt(pageInput.value)

    this.pageQuantityToParent()

  }

  requestedLanguages ( event:Event ) {

    let langInput = event.target as HTMLInputElement;

    this.quantityLang = parseInt(langInput.value)

    this.langQuantityToParent()

  }

  pageQuantityToParent () {

    this.pagesAndLangQuantityEmitter.emit({quantityPages: this.quantityPages, quantityLang:this.quantityLang});

  }

   langQuantityToParent () {

    this.pagesAndLangQuantityEmitter.emit({quantityPages: this.quantityPages, quantityLang:this.quantityLang});
  } */
}
