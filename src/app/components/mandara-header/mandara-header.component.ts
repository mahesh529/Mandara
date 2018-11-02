import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mandara-header',
  templateUrl: './mandara-header.component.html',
  styleUrls: ['./mandara-header.component.scss']
})
export class MandaraHeaderComponent implements OnInit {

  @ViewChild('firstModule') firstModule: ElementRef;
  
  constructor() { }

  ngOnInit() {
    
  }
  
}
