import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-topbar',
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './topbar.html'
})
export class Topbar {
    @Input() userName: string = '';
    @Input() userAvatar?: string;
    @Input() notificationCount: number = 0;

    @Output() search = new EventEmitter<string>();
    @Output() toggleSidebar = new EventEmitter<void>();
    @Output() profileClick = new EventEmitter<void>();

    onSearch(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.search.emit(value);
    }
}
