import { Component, OnInit, Input } from '@angular/core';
import { moveEmbeddedView } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/_core/shared/share-data.service';


@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Input() phim;

  constructor(private router:Router, private shareDataService: ShareDataService) { }

  ngOnInit() {
  }
  
  muaVe(){
    this.router.navigate(["/home/chi-tiet-phim", this.phim.MaPhim], 
    {queryParams: {tenPhim: this.phim.TenPhim} }
    );
  }

  xemNhanh(){
    this.shareDataService.sharingDataChiTietPhim(this.phim);
  }


}
