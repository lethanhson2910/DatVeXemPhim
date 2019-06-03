import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { UserService } from './../../../../_core/services/user.service';
import { DataService } from './../../../../_core/services/data.service';
import { config } from 'rxjs';
import { log } from 'util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {
  @ViewChild("formDangKy") formDangKy: NgForm;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
  }

  @HostListener("window:beforeunload", ["$event"])
  canDeactivate($event): boolean{
    return this.formDangKy.submitted || !this.formDangKy.dirty;
  }

  DangKy(value){
    const objUser:any = {
      TaiKhoan : value.taiKhoan,
      MatKhau: value.matKhau,
      Email: value.email,
      SoDT: value.soDT,
      MaNhom: 'GP09',
      MaLoaiNguoiDung: 'KhachHang',	
    };
    // this.userService.registerUser(objUser).subscribe((data)=>{
    //   console.log(data);
    //   if(data === "Tài khoản đã tồn tại"){
    //     alert(data);
    //   }
    //   else{
    //     alert("Đăng ký thành công");
    //   }
    // });


    const uri = `QuanLyNguoiDung/ThemNguoiDung`;
    this.dataService.post(uri, objUser).subscribe((data:any)=>{
      if(data === "Tài khoản đã tồn tại"){
        alert(data);
      }
      else{
        alert("Đăng ký thành công");
      }
    });
  }

  
}
