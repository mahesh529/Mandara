import { Component, OnInit } from '@angular/core';
import { AnalysisReportService } from '../../services/analysis-report.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analysis-report',
  templateUrl: './analysis-report.component.html',
  styleUrls: ['./analysis-report.component.scss']
})
export class AnalysisReportComponent implements OnInit {
  search:string='';
  showSearch:boolean=false;

  constructor(private reportServie:AnalysisReportService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    const module: string = this.route.url['value'][0].path;
    this.getReports(module);
  }

  getReports(module){
    console.log(this.reportServie.getListReport(module));
  }

  toggleSearch(){
  
    this.showSearch=!this.showSearch;

  }

  getFilterOptions(){

  }

  refreshAnalysisTable(){

  }
  
}
