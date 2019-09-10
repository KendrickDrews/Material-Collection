import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MineralListHeaderComponent } from './mineral-list-header/mineral-list-header.component';
import { MineralListComponent } from './mineral-list/mineral-list.component';
import { MineralListItemComponent } from './mineral-list-item/mineral-list-item.component';
import { MineralListFooterComponent } from './mineral-list-footer/mineral-list-footer.component';
import { MineralDataService } from './mineral-data.service';
import { ApiService } from './api.service';
import { MineralFormInputComponent } from './mineral-form-input/mineral-form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MineralListHeaderComponent,
    MineralListComponent,
    MineralListItemComponent,
    MineralListFooterComponent,
    MineralFormInputComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [MineralDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
