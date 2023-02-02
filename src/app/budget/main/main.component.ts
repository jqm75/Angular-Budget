import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent {

  private webPrice: number = 500;
  private webSeo  : number = 300;
  private webAds  : number = 200;
  public total   : number = 0;

  webCheck(event:Event){

    let checkButton = event.target as HTMLInputElement;
    /* checkButton.checked= false */
    console.log(checkButton.checked);

    if(checkButton.checked){

      this.total = this.total + this.webPrice

    } else {

      this.total = this.total - this.webPrice

    }
  }

  seoCheck(event:Event) {

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.total = this.total + this.webSeo

    } else {

      this.total = this.total - this.webSeo

    }

  }

  adsCheck(event:Event){

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.total = this.total + this.webAds

    } else {

      this.total = this.total - this.webAds

    }

  }

}
