import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnquiryComponent } from './enquiry.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [EnquiryComponent],
  bootstrap: [EnquiryComponent],
})
export class enquiryModule {}
