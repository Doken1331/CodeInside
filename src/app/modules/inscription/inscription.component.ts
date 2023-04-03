import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public url: string = this.pictureService.serviceUrl;
  public type: string = '';
  public filter: string = '';
  public localArr: any = [];
  public json: any;
  public parsedArr: any;
  public iteratorLocalStorage: number = 1;
  public refreshBoolean: boolean = false;
  public valueInput: string = '';

  public form: FormGroup = new FormGroup({
    "selectType": new FormControl('', [Validators.required]),
    "selectFilter": new FormControl('', [Validators.required]),
    "input": new FormControl('', [Validators.required])
  });

  public selectedOptionType: string | null = localStorage.getItem('type') || 'sm';
  public selectedOptionFilter: string | null = localStorage.getItem('filter') || 'without';

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.getRandomInscription();
  }

  public optionType(type: string): void {
    return this.pictureService.getOptionType(type);
  }

  public optionFilter(filter: string): void {
    return this.pictureService.getOptionFilter(filter);
  }

  public getRandomInscription(): void {
    this.iteratorLocalStorage = 1;
    this.localArr.push(this.url);
    localStorage.setItem('oldCat', JSON.stringify(this.localArr));
    this.checkOldInscription();
    this.url = this.pictureService.serviceUrl;
    this.pictureService.getAllCats().subscribe(res => {
      const cats = Object.values(res);
      let randomNum = this.pictureService.getRandomNum(1114); // 1114 cats
      while(cats[randomNum].tags.includes('gif')) { // checking on gif (skip gif)
        randomNum = this.pictureService.getRandomNum(1114);
      }
      this.url += '/cat/' + cats[randomNum]._id + '/says/' + this.valueInput + '?type=' + localStorage.getItem('type') + '&filter=' + localStorage.getItem('filter');
    });
  }

  public checkOldInscription(): boolean {
    this.json = localStorage.getItem('oldCat');
    this.parsedArr = JSON.parse(this.json);
    return this.parsedArr.length > 1 ? this.refreshBoolean = true : this.refreshBoolean = false;
  }

  public refreshOldInscription(): void {
    this.json = localStorage.getItem('oldCat');
    this.parsedArr = JSON.parse(this.json);
    this.iteratorLocalStorage <= (this.parsedArr.length - 2) ? this.refreshBoolean = true : this.refreshBoolean = false;
    this.url = this.parsedArr[this.parsedArr.length - this.iteratorLocalStorage];
    this.iteratorLocalStorage++;
  }

}
