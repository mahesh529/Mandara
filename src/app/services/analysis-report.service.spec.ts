import { TestBed } from '@angular/core/testing';

import { AnalysisReportService } from './analysis-report.service';

describe('AnalysisReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalysisReportService = TestBed.get(AnalysisReportService);
    expect(service).toBeTruthy();
  });
});
