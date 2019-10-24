import { Component, ViewChild, AfterViewInit, OnInit, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute, Resolve } from '@angular/router';
import {Sort} from '@angular/material/sort';

import { environment } from '../../../../../environments/environment';
import { OffersService } from '../../../../services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OffersService]
})
export class OffersComponent implements OnInit {
  public sortedData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sortedData = this.route.snapshot.data.offers.offers;
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'offer_id': return compare(a.offer_id, b.offer_id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'image_url': return compare(a.image_url, b.image_url, isAsc);
        case 'cash_back': return compare(a.cash_back, b.cash_back, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
