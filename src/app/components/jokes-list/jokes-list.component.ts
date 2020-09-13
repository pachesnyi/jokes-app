import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {JokeDto} from "../../models/joke.model";
import {takeUntil} from "rxjs/operators";
import {PaginationService} from "../../services/pagination.service";

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit, OnDestroy {

  @Input() jokes$: Observable<JokeDto[]>;

  currentItems$: Observable<JokeDto[]>;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _paginationService: PaginationService
  ) { }

  ngOnInit(): void {
    this.currentItems$ = this._paginationService.currentItems$;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
