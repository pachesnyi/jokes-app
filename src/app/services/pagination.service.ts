import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {JokesService} from "./jokes.service";
import {JokeDto} from "../models/joke.model";
import {takeUntil} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaginationService implements OnDestroy{

  private readonly OFFSET: number = 10;

  currentPage$ = new BehaviorSubject<number>(1);

  allItems: JokeDto[];

  pagesAmount: number;

  currentItems$ = new BehaviorSubject<JokeDto[]>(null);

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _jokesService: JokesService
  ) {
    this._jokesService.getJokesList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.allItems = data;
        this.currentItems$.next(this.handlePageItems(data));
        this.setAmountValue(this.setPagesAmount(data.length));
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get pagesAmountValue() {
    return this.pagesAmount;
  }

  setAmountValue(data) {
    return this.pagesAmount = data;
  }

  get currentPage() {
    return this.currentPage$.getValue();
  }

  setPagesAmount(allItemsLength: number) {
    return Math.ceil(allItemsLength / this.OFFSET);
  }

  handlePageItems(allItems: any[]) {
    return allItems.slice((this.currentPage - 1) * this.OFFSET, this.currentPage * this.OFFSET);
  }

}
