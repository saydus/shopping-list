import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onChangeToRecipe = new EventEmitter<boolean>();
  collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }


  onClickRecipe(): void {
    this.onChangeToRecipe.emit(true);
  }

  onClickShopping(): void{
    this.onChangeToRecipe.emit(false);
  }



}
