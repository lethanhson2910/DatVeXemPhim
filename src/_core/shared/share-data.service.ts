import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  listDanhSachPhim = new BehaviorSubject([] as any);
  shareListDanhSachPhim = this.listDanhSachPhim.asObservable();
  
  chiTietPhim = new BehaviorSubject({} as any);
  shareChiTietPhim = this.chiTietPhim.asObservable();

  constructor() {}

  sharingDataListDanhSachPhim(listPhim){
    this.listDanhSachPhim.next(listPhim);
  }

  sharingDataChiTietPhim(Phim){
    this.chiTietPhim.next(Phim);
  }
}
