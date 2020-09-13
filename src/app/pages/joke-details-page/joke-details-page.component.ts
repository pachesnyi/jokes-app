import {Component, OnDestroy, OnInit} from '@angular/core';
import {JokeDto} from "../../models/joke.model";
import {ActivatedRoute, Params} from "@angular/router";
import {Subject} from "rxjs";
import {switchMap, takeUntil} from "rxjs/operators";
import {JokesService} from "../../services/jokes.service";

@Component({
  selector: 'app-joke-details-page',
  templateUrl: './joke-details-page.component.html',
  styleUrls: ['./joke-details-page.component.scss']
})
export class JokeDetailsPageComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _jokesService: JokesService
  ) { }

  currentJoke: JokeDto;

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params: Params)=> {
          return this._jokesService.getJokeDetails(params.id);
        })
      ).subscribe(data=> {
        this.currentJoke = data;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
