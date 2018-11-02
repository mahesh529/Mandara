import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  pathArray:any;
  isCreated:boolean=false;
  constructor() { 
   
  }

  ngOnInit() {
    if(!this.isCreated)
    this.pathArray=this.setBreadCrumbs();
    this.isCreated=true;
  }

  setBreadCrumbs(){
    let prevStr="",pathArray=[];
    let segments= window.location.pathname.split('/');
    for(let index=1;index<segments.length ;index++)
    {
      prevStr=index>1?prevStr+'/':prevStr;
      pathArray.push(prevStr+segments[index]);
      prevStr= pathArray[pathArray.length-1];
    }
    return pathArray;
  }
}
