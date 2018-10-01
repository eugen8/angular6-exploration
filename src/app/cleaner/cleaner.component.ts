import { Component, OnInit, Input } from '@angular/core';
import { CLEANER_LIST } from './cleaner-data-mock';
import { CleanerDetailComponent } from '../cleaner-detail/cleaner-detail.component';


declare var window: Window;
declare var document: Document;


@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.scss']
})
export class CleanerComponent implements OnInit {
  doc: Document = document;
  selectedCleaner: Cleaner;
  

  
  constructor() {
    this.Joe = new Cleaner(); 
    this.Joe.id=1;
    this.Joe.name='Joe Joel'; // new Cleaner(1,'Joe Joel');
    
  }
  Joe: Cleaner;
   Jim:Cleaner = {id:2, name:'Jim Beam'};
   Kerry:Cleaner = {id:3};
   Kim = new Cleaner();
   otherCleaners:Cleaner[] = CLEANER_LIST;
  ngOnInit() {
    this.Kim.name='Kim';

  }
  

  onSelect(cl:Cleaner, source: string): void { 
    this.selectedCleaner = cl;
    console.log('from: ' + source);
  }
  

  onSelectBoxChange( cl:Cleaner, s:any): void { 
    console.log( cl);
    console.log(s);
  };

  
}


export class Cleaner {
  id:number;
  name?:string;
  
}
