import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, PanelMenuModule],
})
export class SidebarComponent {
  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: ['/dashboard'],
    },
    {
      label: 'Anagrafico',
      icon: 'pi pi-id-card',
      routerLink: ['/anagrafico'],
    },
    {
      label: 'CPA',
      icon: 'pi pi-folder',
      routerLink: ['/cpa'],
    },
    {
      label: 'FPA',
      icon: 'pi pi-briefcase',
      routerLink: ['/fpa'],
    },
    {
      label: 'Mailing list',
      icon: 'pi pi-envelope',
      routerLink: ['/mailing'],
    },
    {
      label: 'Certificazione Unico',
      icon: 'pi pi-file',
      routerLink: ['/certificazione'],
    }
  ];
}
