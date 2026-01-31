import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type BadgeType = 'success' | 'warning' | 'error' | 'info' | 'gray';

@Component({
    selector: 'app-badge',
    imports: [CommonModule],
    templateUrl: './badge.html',
})
export class Badge {
    @Input() type: BadgeType = 'gray';
    @Input() label: string = '';
    @Input() size: 'sm' | 'md' = 'md';

    get badgeClasses(): string {
        const baseClasses = 'inline-flex items-center font-semibold rounded-full';

        const sizeClasses = {
            sm: 'px-2 py-0.5 text-[10px]',
            md: 'px-2.5 py-1 text-xs',
        };

        const typeClasses = {
            success: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
            warning: 'bg-amber-100 text-amber-700 border border-amber-200',
            error: 'bg-red-100 text-red-700 border border-red-200',
            info: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
            gray: 'bg-gray-100 text-gray-700 border border-gray-200',
        };

        return `${baseClasses} ${sizeClasses[this.size]} ${typeClasses[this.type]}`;
    }
}
