import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { MostViewedItem } from '../../interfaces/most-viewed-item.interface';

@Component({
    selector: 'app-most-viewed',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './most-viewed.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostViewedComponent {
    @Input() items: MostViewedItem[] = [];
}
