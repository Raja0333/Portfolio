import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu',
  imports: [RouterLink,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() menuClicked = new EventEmitter<void>();

  onMenuClick() {
    this.menuClicked.emit(); // Notifies parent to close the sidebar
  }

  activeItem: number | null = null;
  selectItem(item: number) {
    this.activeItem = this.activeItem === item ? null : item;
  }
}
