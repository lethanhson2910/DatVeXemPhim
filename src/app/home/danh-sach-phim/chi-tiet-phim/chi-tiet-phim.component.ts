import { Component, OnInit } from '@angular/core';
import { QuanLiPhimService } from './../../../../_core/services/quan-li-phim.service';
import { DataService } from './../../../../_core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  // lấy thông tin trên url dùng ActivatedRoute

  public maPhim:any;
  public tenPhim:any;
  public phim:any;


  constructor(
    private quanLiPhimService: QuanLiPhimService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
    ) { }

  //cấc hàm chạy trong onInit
  ngOnInit() {
    this.getParams();
    this.getChiTietPhim();
  }

  getChiTietPhim(){
    // this.quanLiPhimService.layChiTietPhim(this.maPhim).subscribe((data:any)=>{
    //   console.log(data);
    //    this.phim = data;
    // });
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data:any)=>{
      this.phim = data;
    });
  }

  getParams(){
    // nhận 1 tham số
    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id'); //id <= {path: "chi-tiet-phim/:id" homeRouting

    // nhận nhiều tham số
    this.activatedRoute.queryParams.subscribe((params:any) => {
      // this.maPhim = params.maPhim;
      // console.log(params.tenPhim);

      this.tenPhim = params.tenPhim;
    });

  }

  muaVe(maLichChieu){
    this.router.navigate(["/home/phong-ve", maLichChieu]);
  }

}
