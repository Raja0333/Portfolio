import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { CommonModule } from '@angular/common';
import { SocialProfilesComponent } from "./social-profiles/social-profiles.component";


@Component({
  selector: 'app-root',
  imports: [MenuComponent, CommonModule, RouterOutlet, SocialProfilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  isSlidbarShowing = false;
  openSidebar() {
    this.isSlidbarShowing = true;
  }
  closeSidebar() {
    this.isSlidbarShowing = false;
  }
}
