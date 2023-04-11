import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-science-work',
  templateUrl: './user-profile-science-work.component.html',
  styleUrls: ['./user-profile-science-work.component.css']
})
export class UserProfileScienceWorkComponent {
  currentTab = 'tab1';

  tabs = [
    {id: 'tab1', title: 'Tab 1', component: 'tab1-component'},
    {id: 'tab2', title: 'Tab 2', component: 'tab2-component'},
    {id: 'tab3', title: 'Tab 3', component: 'tab3-component'},
    {id: 'tab4', title: 'Tab 4', component: 'tab4-component'}
  ];

  onNavChange(event: any) {
    this.currentTab = event;
  }
}
