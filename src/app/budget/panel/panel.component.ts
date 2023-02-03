import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})

export class PanelComponent {


  @Output() pagesAndLangQuantityEmitter = new EventEmitter<Object>;
/*
  @Output() webPagesQuantityEmitter = new EventEmitter<Object>();
  @Output() webLangQuantityEmitter  = new EventEmitter<number>();
*/

  private webPagesQuantity: number = 0
  private webLangQuantity : number = 0


  pagesEntered ( event:Event ) {

    let pageInput = event.target as HTMLInputElement;

    this.webPagesQuantity = parseInt(pageInput.value)

    this.pageQuantityToParent()

  }

  requestedLanguages ( event:Event ) {

    let langInput = event.target as HTMLInputElement;

    this.webLangQuantity = parseInt(langInput.value)

    this.langQuantityToParent()

  }

  pageQuantityToParent () {

    this.pagesAndLangQuantityEmitter.emit({webPagesQuantity: this.webPagesQuantity, webLangQuantity:this.webLangQuantity});

  }

  langQuantityToParent () {

    this.pagesAndLangQuantityEmitter.emit({webPagesQuantity: this.webPagesQuantity, webLangQuantity:this.webLangQuantity});
  }
}
