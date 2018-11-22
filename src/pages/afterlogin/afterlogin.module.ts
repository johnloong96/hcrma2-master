import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AfterloginPage } from './afterlogin';

@NgModule({
  declarations: [
    AfterloginPage,
  ],
  imports: [
    IonicPageModule.forChild(AfterloginPage),
  ],
})
export class AfterloginPageModule {}
