import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { HomeRoutingModule } from './home-routing.module';
import { ItemPhimComponent } from './danh-sach-phim/item-phim/item-phim.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, DanhSachPhimComponent, TinTucComponent, ItemPhimComponent, ChiTietPhimComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
