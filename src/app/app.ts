import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Topbar } from './shared/components/topbar/topbar';
import { SidebarLink } from './shared/interfaces/sidebar-link.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projecta_Frontend');

  sidebarLinks: SidebarLink[] = [
    { path: '/', label: 'Dashboard', icon: 'layout-dashboard' },
    { path: '/projects', label: 'Proyectos', icon: 'folder-kanban', badge: '3', badgeType: 'info' },
    { path: '/tasks', label: 'Mis Tareas', icon: 'check-square' },
    { path: '/team', label: 'Equipo', icon: 'users' },
    { path: '/reports', label: 'Reportes', icon: 'bar-chart-3' },
    { path: '/settings', label: 'Configuración', icon: 'settings' }
  ];
}
