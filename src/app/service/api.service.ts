import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Response } from '../model/Response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  private urlApi = 'https://rickandmortyapi.com/api/character';
  private currentPage = 1;

  constructor(private http: HttpClient) { }

  public getData(): Observable<Response>{
    const url = `${this.urlApi}?page=${this.currentPage}`;
    return this.http.get<Response>(url);
  }

  public getCharacters(page: number): Observable<Response> {
    return this.http.get<Response>(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }

  public getCharacterById(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get(url);
  }
  

  public goToNextPage(): void {
    this.currentPage++;
  }

  public goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
