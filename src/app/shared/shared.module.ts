import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsModule } from '../validators/validators.module';
import { SharedMaterialModule } from './shared-material.module';


@NgModule({
  exports: [
    SharedMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ValidatorsModule
  ]
})
export class SharedModule {
}
