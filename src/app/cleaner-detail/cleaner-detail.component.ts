import { Component, OnInit , Input} from '@angular/core';
import { Cleaner } from '../cleaner/cleaner.component';

@Component({
  selector: 'app-cleaner-detail',
  templateUrl: './cleaner-detail.component.html',
  styleUrls: ['./cleaner-detail.component.scss']
})
export class CleanerDetailComponent implements OnInit {

  constructor() { }

  @Input()  cleaner: Cleaner;

  ngOnInit() {
  }

}
