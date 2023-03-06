import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes  } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';




const Routs:Routes = [

  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'visitor',component:VisitorFormComponent},

  
]



@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(
    Routs
  ) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, BlogComponent, EnquiryComponent, VisitorFormComponent ],
  bootstrap:    [ AppComponent, VisitorFormComponent, EnquiryComponent ]
})
export class AppModule { }
