import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from '../components/contact-filter/contact-filter.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactPreviewComponent } from '../components/contact-preview/contact-preview.component';
import { InputComponent } from '../components/input/input.component';
import { ContactDetailsComponent } from '../pages/contact-details/contact-details.component';
import { ContactEditComponent } from '../pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ChartComponent } from '../components/chart/chart.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoginComponent } from '../pages/login/login.component';
import { TransferFundComponent } from '../components/transfer-fund/transfer-fund.component';
import { MoveListComponent } from '../components/move-list/move-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactPageComponent,
    HomePageComponent,
    ChartComponent,
    HeaderComponent,
    LoginComponent,
    TransferFundComponent,
    MoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
