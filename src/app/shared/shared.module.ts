import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  // export components for other modules
  exports: [
    NavBarComponent,
    FooterComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
