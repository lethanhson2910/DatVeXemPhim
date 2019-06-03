import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QuanLiPhimService} from './../../../_core/services/quan-li-phim.service';
import {DataService} from './../../../_core/services/data.service';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {

  public maLichChieu:any;
  public danhSachGhe:any;

  constructor(private activatedRoute: ActivatedRoute,
    private quanLiPhimService: QuanLiPhimService,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.getParams();
    this.getChiTietPhongVe();
  }

  getParams(){
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("maLichChieu");
  }

  getChiTietPhongVe(){
    // this.quanLiPhimService.chiTietPhongVe(this.maLichChieu).subscribe((data)=>{
    //   console.log(data);
    //   this.danhSachGhe = data.DanhSachGhe;
    // });

    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.dataService.get(uri).subscribe((data:any)=>{
      this.danhSachGhe = data.DanhSachGhe;
    });
  }

  chonGhe(objGhe){
    console.log(objGhe);
    
  }

}
