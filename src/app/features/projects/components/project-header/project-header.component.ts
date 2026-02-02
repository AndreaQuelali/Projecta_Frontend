import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { CustomInput } from '../../../../shared/components/input/input';
import { Dropdown } from '../../../../shared/components/dropdown/dropdown';

@Component({
    selector: 'app-project-header',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, CustomInput, Dropdown],
    templateUrl: './project-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHeaderComponent { }
