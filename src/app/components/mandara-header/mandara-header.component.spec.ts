import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandaraHeaderComponent } from './mandara-header.component';

describe('MandaraHeaderComponent', () => {
  let component: MandaraHeaderComponent;
  let fixture: ComponentFixture<MandaraHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandaraHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandaraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
