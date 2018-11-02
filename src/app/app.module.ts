import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MandaraHeaderComponent } from './components/mandara-header/mandara-header.component';
import { MandaraFooterComponent } from './components/mandara-footer/mandara-footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { AnalysisReportComponent } from './components/analysis-report/analysis-report.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    MandaraHeaderComponent,
    MandaraFooterComponent,
    AnalysisReportComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
