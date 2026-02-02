import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Observable } from 'rxjs';
import { ProjectHeaderComponent } from '../components/project-header/project-header.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../interfaces/project.interface';

@Component({
    selector: 'app-projects-page',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, ProjectHeaderComponent, ProjectCardComponent],
    templateUrl: './projects.page.html'
})
export class ProjectsPage implements OnInit {
    private projectsService = inject(ProjectsService);
    projects$!: Observable<Project[]>;

    ngOnInit() {
        this.projects$ = this.projectsService.getProjects();
    }
}
