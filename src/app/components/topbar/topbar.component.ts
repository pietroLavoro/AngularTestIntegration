import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule, Menu } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports: [CommonModule, MenuModule],
})
export class TopbarComponent {
  @ViewChild('userMenu') userMenu!: Menu;

  userItems: MenuItem[] = [
    { label: 'Profilo', icon: 'pi pi-user', command: () => this.onProfile() },
    { label: 'Impostazioni', icon: 'pi pi-cog', command: () => this.onSettings() },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.onLogout() },
  ];

  userMenuVisible = false;

toggleUserMenu() {
  this.userMenuVisible = !this.userMenuVisible;
}


  onProfile() {
    console.log('Vai al profilo');
  }

  onSettings() {
    console.log('Apri impostazioni');
  }

  onLogout() {
    console.log('Logout eseguito');
  }
}
