import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DangKyComponent } from 'src/app/home/form/dang-ky/dang-ky.component';
import { DangNhapComponent } from 'src/app/home/form/dang-nhap/dang-nhap.component';

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<DangKyComponent> {
  canDeactivate(component){
    return (
      component.canDeactivate() || confirm("Bạn có muốn rời trang này không?")
    );
  }
}

//Nếu không có injectable thì sẽ bị lỗi export
@Injectable({
  providedIn: 'root'
})

export class CanDeactivateDangNhapGuard implements CanDeactivate<DangNhapComponent> {
  canDeactivate(component){
    return (
      component.canDeactivate() || confirm("Bạn có muốn rời trang này không?")
    );
  }
}