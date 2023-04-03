import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {

  public url: string = this.pictureService.serviceUrl;
  public type: string = '';
  public filter: string = '';
  public localArr: any = [];
  public json: any;
  public parsedArr: any;
  public iteratorLocalStorage: number = 1;
  public refreshBoolean: boolean = false;

  public form: FormGroup = new FormGroup({
    "selectType": new FormControl('', [Validators.required]),
    "selectFilter": new FormControl('', [Validators.required])
  });

  public selectedOptionType: string | null = localStorage.getItem('type') || 'sm';
  public selectedOptionFilter: string | null = localStorage.getItem('filter') || 'without';

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.getRandomCat();
  }

  public optionType(type: string): void {
    return this.pictureService.getOptionType(type);
  }

  public optionFilter(filter: string): void {
    return this.pictureService.getOptionFilter(filter);
  }

  public getRandomCat(): void {
    this.iteratorLocalStorage = 1;
    this.localArr.push(this.url);
    localStorage.setItem('oldCat', JSON.stringify(this.localArr))
    this.checkOldCat();
    this.url = this.pictureService.serviceUrl;
    this.pictureService.getAllCats().subscribe(res => {
      const cats = Object.values(res);
      let randomNum = this.pictureService.getRandomNum(1114); // 1114 cats
      while(cats[randomNum].tags.includes('gif')) { // checking on gif (skip gif)
        randomNum = this.pictureService.getRandomNum(1114);
      }
      this.url += '/cat/' + cats[randomNum]._id + '?type=' + localStorage.getItem('type') + '&filter=' + localStorage.getItem('filter');
    });
  }

  public checkOldCat(): boolean {
    this.json = localStorage.getItem('oldCat');
    this.parsedArr = JSON.parse(this.json);
    return this.parsedArr.length > 1 ? this.refreshBoolean = true : this.refreshBoolean = false;
  }

  public refreshOldCat(): void {
    this.json = localStorage.getItem('oldCat');
    this.parsedArr = JSON.parse(this.json);
    this.iteratorLocalStorage <= (this.parsedArr.length - 2) ? this.refreshBoolean = true : this.refreshBoolean = false;
    this.url = this.parsedArr[this.parsedArr.length - this.iteratorLocalStorage];
    this.iteratorLocalStorage++;
  }

}
