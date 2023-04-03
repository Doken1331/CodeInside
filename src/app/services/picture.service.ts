import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICat } from 'src/app/interfaces/cat.service';


@Injectable({
  providedIn: 'root'
})
export class PictureService {

  public serviceUrl: string;
  public cats: ICat[] = [];
  public catUrl: string = '';

  constructor(private http: HttpClient) {
    this.serviceUrl = "https://cataas.com";
  }

  public getAllCats():Observable<ICat[]> {
    return this.http.get<ICat[]>(this.serviceUrl + '/api/cats?limit=1114');
  }

  public getOptionType(type: string): void {
    return localStorage.setItem('type', type);
  }

  public getOptionFilter(filter: string): void {
    return localStorage.setItem('filter', filter);
  }

  public getRandomNum(max: number): number {
    return Math.floor(Math.random() * max);
  }

}
