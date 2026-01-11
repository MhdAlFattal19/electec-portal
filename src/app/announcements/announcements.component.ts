
import { Component } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';
@Component({
    selector: 'Announcements',
    template: `
    <nb-layout>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>    
    
    `,
})

export class AnnouncementsComponent {

}