import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { HomeRoutingModule } from './home-routing.module';
import { ItemPhimComponent } from './danh-sach-phim/item-phim/item-phim.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShareModule } from 'src/_core/shared/share.module';
import { MaterialModule } from 'src/_core/share/material.module';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, DanhSachPhimComponent, TinTucComponent, ItemPhimComponent, ChiTietPhimComponent, PipesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
    MaterialModule
  ]
})
export class HomeModule { }
