import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SidebarLink } from '../../interfaces/sidebar-link.interface';

@Component({
    selector: 'app-sidebar',
    imports: [CommonModule, RouterModule, LucideAngularModule],
    templateUrl: './sidebar.html'
})
export class Sidebar {
    @Input() links: SidebarLink[] = [];
    @Input() isCollapsed: boolean = false;
    @Input() appName: string = 'Projecta';
}
