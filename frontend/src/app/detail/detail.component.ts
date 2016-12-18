import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

import { DinosService } from '../core/dinos.service';
import { ItemDetail } from '../core/models/item-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  item: ItemDetail;
  error: boolean;
  loading: boolean;

  constructor(
    private titleService: Title,
    private dinosService: DinosService,
    private route: ActivatedRoute) { }

  getItem() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];

      this.dinosService.getItem$(id)
        .subscribe(
        res => {
          this.item = res;
          this.titleService.setTitle(this.item.name);
          this.loading = false;
        },
        err => {
          this.error = true;
          this.loading = false;
        }
        );
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getItem();
  }

  get isLoaded() {
    return this.loading === false;
  }

}
