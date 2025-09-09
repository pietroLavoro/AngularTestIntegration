import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule],   // 👈 importa aquí
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/dashboard'] },
    { label: 'Anagrafico', icon: 'pi pi-id-card', routerLink: ['/anagrafico'] },
    { label: 'CPA', icon: 'pi pi-briefcase', routerLink: ['/cpa'] },
    { label: 'FPA', icon: 'pi pi-file', routerLink: ['/fpa'] },
    { label: 'Mailing list', icon: 'pi pi-envelope', routerLink: ['/mailing'] },
    { label: 'Certificazione Unico', icon: 'pi pi-file-export', routerLink: ['/cert'] },
  ];

  ngOnInit(): void {
    this.addIconSpacing(this.items);
  }

  private addIconSpacing(items: MenuItem[] | undefined): void {
    if (!items) return;
    for (const it of items) {
      if (it.icon) {
        const cls = it.icon.split(/\s+/).filter(Boolean);
        if (!cls.includes('pi-fw')) cls.push('pi-fw');
        if (!cls.includes('mr-2')) cls.push('mr-2');
        it.icon = cls.join(' ');
      }
      if (it.items?.length) this.addIconSpacing(it.items);
    }
  }
}
