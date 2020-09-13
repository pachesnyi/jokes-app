import { Component, OnInit } from '@angular/core';
import {PaginationService} from "../../services/pagination.service";

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent implements OnInit {

  pages: number[];

  constructor(
    private _paginationService: PaginationService
  ) { }

  ngOnInit(): void {
    this.pages = Array(this._paginationService.pagesAmountValue).fill(0).map((x,i)=> i);
  }

  isActive(page) {
    return this._paginationService.currentPage === page + 1;
  }

  isFirstPage() {
    return this._paginationService.currentPage <= 1;
  }

  isLastPage() {
    return this._paginationService.currentPage === this._paginationService.pagesAmount;
  }

  paginatePrev() {
    if(!this.isFirstPage()) {
      this._paginationService.currentPage$.next(this._paginationService.currentPage - 1);
      this.initItems();
    }
  }

  paginateNext() {
    if(!this.isLastPage()) {
      this._paginationService.currentPage$.next(this._paginationService.currentPage + 1);
      this.initItems();
    }
  }

  initItems() {
    this._paginationService.currentItems$.next(this._paginationService.handlePageItems(this._paginationService.allItems));
  }

  setCurrentPage(page: number) {
    this._paginationService.currentPage$.next(page);
  }

  handlePaginate(page) {
    this.setCurrentPage(page);
    this.initItems();
  }



}
