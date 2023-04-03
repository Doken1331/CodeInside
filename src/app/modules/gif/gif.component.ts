import { Component, OnInit } from '@angular/core';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit {

  public url: string = this.pictureService.serviceUrl;
  public localArr: any = [];
  public json: any;
  public parsedArr: any;
  public iteratorLocalStorage: number = 1;
  public refreshBoolean: boolean = false;

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.getRandomGif();
  }

  public optionType(type: string): void {
    return this.pictureService.getOptionType(type);
  }

  public optionFilter(filter: string): void {
    return this.pictureService.getOptionFilter(filter);
  }

  public getRandomGif(): void {
    this.iteratorLocalStorage = 1;
    this.localArr.push(this.url);
    localStorage.setItem('oldGif', JSON.stringify(this.localArr))
    this.checkOldGif();
    this.url = this.pictureService.serviceUrl;
    this.pictureService.getAllCats().subscribe(res => {
      const cats = Object.values(res);
      let randomNum = this.pictureService.getRandomNum(1114); // 1114 cats
      while(!cats[randomNum].tags.includes('gif')) { // checking on gif (leave a gif)
        randomNum = this.pictureService.getRandomNum(1114);
      }
      this.url += '/cat/' + cats[randomNum]._id;
    });
  }

  public checkOldGif(): boolean {
    this.json = localStorage.getItem('oldGif');
    this.parsedArr = JSON.parse(this.json);
    return this.parsedArr.length > 1 ? this.refreshBoolean = true : this.refreshBoolean = false;
  }

  public refreshOldGif(): void {
    this.json = localStorage.getItem('oldGif');
    this.parsedArr = JSON.parse(this.json);
    this.iteratorLocalStorage <= (this.parsedArr.length - 2) ? this.refreshBoolean = true : this.refreshBoolean = false;
    this.url = this.parsedArr[this.parsedArr.length - this.iteratorLocalStorage];
    this.iteratorLocalStorage++;
  }

}
