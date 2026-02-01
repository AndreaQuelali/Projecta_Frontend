import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Card } from '../../../../shared/components/card/card';
import { Badge, BadgeType } from '../../../../shared/components/badge/badge';
import { ProjectCard } from '../../interfaces/project-card.interface';

@Component({
    selector: 'app-recent-cards',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, Card, Badge],
    templateUrl: './recent-cards.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentCardsComponent {
    @Input() projects: ProjectCard[] = [];
}
