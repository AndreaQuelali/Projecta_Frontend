import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-home-banner',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './home-banner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBannerComponent { }
