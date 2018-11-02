import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandaraFooterComponent } from './mandara-footer.component';

describe('MandaraFooterComponent', () => {
  let component: MandaraFooterComponent;
  let fixture: ComponentFixture<MandaraFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandaraFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandaraFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
