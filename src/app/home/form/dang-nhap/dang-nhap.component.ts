import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/_core/services/user.service';
import { DataService } from './../../../../_core/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  @ViewChild("formDangNhap") formDangNhap: NgForm;

  constructor(private userService: UserService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  @HostListener("window:beforeunload", ["$event"])
  canDeactivate($event): boolean{
    return this.formDangNhap.submitted || !this.formDangNhap.dirty;
  }

  DangNhap(value){
    // this.userService.loginUser(value.taiKhoan, value.matKhau).subscribe((data)=>{
    //   if(data === "Tài khoản hoặc mật khẩu không đúng !"){
    //     alert(data);
    //   }
    //   else{
    //     alert('Đăng nhập thành công');
    //   }
    // })

    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${value.taiKhoan}&MatKhau=${value.matKhau}`;
    this.dataService.post(uri).subscribe((data:any)=>{
      if(data === "Tài khoản hoặc mật khẩu không đúng !"){
        alert(data);
      }
      else{
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(["home/danh-sach-phim"]);
        alert('Đăng nhập thành công');
      }
    });
  }
}
