import { Component, OnInit } from '@angular/core';
import {JokesService} from "../../services/jokes.service";
import {Observable} from "rxjs";
import {JokeDto} from "../../models/joke.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  jokesStream$: Observable<JokeDto[]>

  constructor(
    private _jokesService: JokesService
  ) { }

  ngOnInit(): void {
    this.jokesStream$ = this._jokesService.getJokesList();
  }

}
