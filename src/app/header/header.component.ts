import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNavigate = new EventEmitter<string>();
  collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string): void{
      this.onNavigate.emit(feature);
  }
 



}
