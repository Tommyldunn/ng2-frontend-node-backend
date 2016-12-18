import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DinosService } from '../core/dinos.service';
import { Item } from '../core/models/item.model';
import { FilterService } from '../core/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FilterService]
})
export class HomeComponent implements OnInit {
  items: Item[];
  filteredDinos: Item[];
  error: boolean;
  loading: boolean;
  pageName: string = 'ITEMS';
  query: string = '';

  constructor(
    private titleService: Title,
    private dinosService: DinosService,
    private filterService: FilterService) { }

  getItems() {
    this.dinosService.getAllItems$()
      .subscribe(
      res => {
        this.items = res;
        this.filteredDinos = res;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.error = true;
        this.loading = false;
      }
      );
  }

  ngOnInit() {
    this.titleService.setTitle(this.pageName);
    this.loading = true;
    this.getItems();
  }

  filterDinos() {
    this.filteredDinos = this.filterService.search(this.items, this.query);
  }

  resetQuery() {
    this.query = '';
    this.filteredDinos = this.items;
  }

  get isLoaded() {
    return this.loading === false;
  }

  get noSearchResults() {
    return this.items && !this.filteredDinos.length && this.query && !this.error;
  }

}
