import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({

  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']

})

export class MainComponent {

  private webPrice: number = 500;
  private webPages: number = 30;
  private webLanguages: number = 30;

  private webSeo  : number = 300;
  private webAds  : number = 200;

  public total    : number = 0;

  public showPanel: Boolean = false;

  public budgetForm : FormGroup = this.fb.group({



  })

  constructor (

    private fb: FormBuilder,



  ){}


  webCheck( event:Event ){

    let checkButton = event.target as HTMLInputElement;

    console.log(checkButton.checked);

    if(checkButton.checked){

      this.total = this.total + this.webPrice
      this.showPanel = true

    } else {

      this.showPanel = false
      this.total = this.total - this.webPrice

    }
  }

  seoCheck( event:Event ) {

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.total = this.total + this.webSeo

    } else {

      this.total = this.total - this.webSeo

    }

  }

  adsCheck( event:Event ){

    let checkButton = event.target as HTMLInputElement;

    if(checkButton.checked){

      this.total = this.total + this.webAds

    } else {

      this.total = this.total - this.webAds

    }

  }


}
