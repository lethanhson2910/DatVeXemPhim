import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }


//Tạo share module để có thể tái sử dụng ModalComponent
//Vì mỗi component chỉ sử dụng đc cho 1 module