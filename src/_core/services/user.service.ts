import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user:any): Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    return this.http.post(url ,user, httpOptions).pipe(
      tap(
        // ket qua
        ()=>{},
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  loginUser(TaiKhoan:any, MatKhau:any): Observable<any>{
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${TaiKhoan}&MatKhau=${MatKhau}`
    return this.http.post(url, httpOptions).pipe(
      tap(
        // ket qua
        ()=>{},
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }


  handleError(err){
    //handle Error:backend cung cấp để viế
    return err;
  }

}
