import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent {

  private webPagesQuantity: number = 0
  private webLangQuantity: number = 0


  pagesEntered ( event:Event ) {

    let pageInput = event.target as HTMLInputElement;

    this.webPagesQuantity = parseInt(pageInput.value)
    console.log(this.webPagesQuantity)


    //this.total = this.total + this.webAds



  }

  requestedLanguages ( event:Event ) {

    let langInput = event.target as HTMLInputElement;

    this.webLangQuantity = parseInt(langInput.value)
    console.log(this.webLangQuantity)
  }

}
