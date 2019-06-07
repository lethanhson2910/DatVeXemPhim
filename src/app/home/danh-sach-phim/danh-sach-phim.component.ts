import {Component, OnInit} from '@angular/core';

//import
import {PhimService} from './../../../_core/services/phim.service';
import {QuanLiPhimService} from './../../../_core/services/quan-li-phim.service';
import {DataService} from './../../../_core/services/data.service';
import {ShareDataService} from './../../../_core/shared/share-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim = [];
  subDanhSachPhim: Subscription;

  constructor(private phimService: PhimService, private quanLyPhimService: QuanLiPhimService, private dataService: DataService, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim() {
    //lấy dánh sách phim từ PhimService
    // this.danhSachPhim = this.phimService.layDanhSachPhim();
    // console.log(this.danhSachPhim);

    //lấy dữ liệu từ server backend
    // this.quanLyPhimService.layDanhSachPhim().subscribe((data: any) => {
    //   console.log(data);
    //   this.danhSachPhim = data;
    // });

    const uri = 'QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    this.subDanhSachPhim = this.dataService.get(uri).subscribe((data: any) => {
      console.log(data);
      this.danhSachPhim = data;
      this.shareDataService.sharingDataListDanhSachPhim(data);
    });
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.subDanhSachPhim.unsubscribe();
  }

}
