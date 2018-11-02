import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalysisReportService {

  listReportsUrl:object={
    'Shonit':'https://xenon.sigtuple.com/mandara/api/analysesPaginated?product=56c815cc56685df2014df1fb&pageNo=0&limit=10&sortKey=start_ts&sortOrder=desc',
    'Shrava':'https://xenon.sigtuple.com/mandara/api/analysesPaginated?product=57d976bb227a01395981dc41&pageNo=0&limit=10&sortKey=start_ts&sortOrder=desc',
    'Aadi':'https://xenon.sigtuple.com/mandara/api/analysesPaginated?product=582f0fe4dd9d645dda81165d&pageNo=0&limit=10&sortKey=start_ts&sortOrder=desc'
  }

  constructor(private http: HttpClient) { }
  
  getListReport(module){        
    return this.http.get(this.listReportsUrl[module]).subscribe((returnedStuff) => {
      console.log(returnedStuff);
    });
  }
}
