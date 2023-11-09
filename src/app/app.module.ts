import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardDataComponent } from './components/card-data/card-data.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { GraphsDataComponent } from './components/graphs-data/graphs-data.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { FormsModule } from '@angular/forms';
import { LoanService } from './loan.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardDataComponent,
    TableDataComponent,
    GraphsDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxApexchartsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [LoanService],
  bootstrap: [AppComponent],
})
export class AppModule {}
