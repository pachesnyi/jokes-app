import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JokeDto} from "../models/joke.model";
import {map} from "rxjs/operators";
import {JokesResponseDto} from "../interfaces/jokes-response.interface";
import {JokeSingleResponseDto} from "../interfaces/joke-single-response";

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private _apiUrl: string = ' http://api.icndb.com/jokes';
  private readonly ITEMS_AMOUNT = 35;

  constructor(
    private http: HttpClient
  ) { }

  getJokesList(): Observable<JokeDto[]> {
    return this.http.get<JokesResponseDto>(`${this._apiUrl}/random/${this.ITEMS_AMOUNT}`).pipe(
      map(data=> {
        return data.value.map(joke=> new JokeDto(joke))
      })
    );
  }

  getJokeDetails(id:string): Observable<JokeDto> {
    return this.http.get<JokeSingleResponseDto>(`${this._apiUrl}/${id}`).pipe(map(data=> new JokeDto(data['value'])));
  }





}
