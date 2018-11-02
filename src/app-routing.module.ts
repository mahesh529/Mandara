import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisReportComponent } from './app/components/analysis-report/analysis-report.component';

const routes: Routes = [
  { path: 'Shonit', component:AnalysisReportComponent },
  { path: 'Shrava', component:AnalysisReportComponent },
  { path: 'Aadi', component:AnalysisReportComponent } 
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
