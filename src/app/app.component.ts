import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed = true;
  feature = 'recipe';

  onChangeTab(featureSelected: string): void {
    this.feature = featureSelected;
  }

}
