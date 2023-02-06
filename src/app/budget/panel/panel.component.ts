import { Component, EventEmitter, Output } from '@angular/core';
import { PageLangQuantity } from '../interfaces/page-lang-quantity';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})

export class PanelComponent {


  @Output() pagesAndLangQuantityEmitter = new EventEmitter<PageLangQuantity>;
/*
  @Output() quantityPagesEmitter = new EventEmitter<Object>();
  @Output() webLangQuantityEmitter  = new EventEmitter<number>();
*/

  private quantityPages: number = 0
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
  }
}
