import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Card } from '../../../../shared/components/card/card';
import { Badge } from '../../../../shared/components/badge/badge';
import { Project } from '../../interfaces/project.interface';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, Card, Badge],
    templateUrl: './project-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
    @Input() project!: Project;
}
