import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ProjectCard } from '../components/recent-cards/recent-cards.component';
import { MostViewedItem } from '../components/most-viewed/most-viewed.component';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    getRecentProjects(): Observable<ProjectCard[]> {
        const projects: ProjectCard[] = [
            {
                id: '1',
                title: 'Rediseño Dashboard',
                description: 'Actualización completa de la interfaz de usuario con nuevas métricas y gráficos interactivos.',
                icon: 'layout',
                status: 'En Progreso',
                statusType: 'info',
                lastUpdated: '2h',
                membersCount: 5,
                completedTasks: 12,
                totalTasks: 24,
                members: [
                    { name: 'Ana', avatar: 'https://ui-avatars.com/api/?name=Ana&background=random' },
                    { name: 'Carlos', avatar: 'https://ui-avatars.com/api/?name=Carlos&background=random' },
                    { name: 'Maria', avatar: 'https://ui-avatars.com/api/?name=Maria&background=random' }
                ]
            },
            {
                id: '2',
                title: 'API Integración',
                description: 'Desarrollo de endpoints REST para la nueva aplicación móvil.',
                icon: 'server',
                status: 'Pendiente',
                statusType: 'warning',
                lastUpdated: '1d',
                membersCount: 2,
                completedTasks: 5,
                totalTasks: 18,
                members: [
                    { name: 'Pedro', avatar: 'https://ui-avatars.com/api/?name=Pedro&background=random' },
                    { name: 'Luis', avatar: 'https://ui-avatars.com/api/?name=Luis&background=random' }
                ]
            },
            {
                id: '3',
                title: 'Marketing Q1',
                description: 'Planificación estratégica de campañas para el primer trimestre.',
                icon: 'megaphone',
                status: 'Completado',
                statusType: 'success',
                lastUpdated: '3d',
                membersCount: 8,
                completedTasks: 45,
                totalTasks: 45,
                members: [
                    { name: 'Sofia', avatar: 'https://ui-avatars.com/api/?name=Sofia&background=random' },
                    { name: 'Juan', avatar: 'https://ui-avatars.com/api/?name=Juan&background=random' },
                    { name: 'Elena', avatar: 'https://ui-avatars.com/api/?name=Elena&background=random' }
                ]
            }
        ];
        return of(projects).pipe(delay(500)); // Simular latencia
    }

    getMostViewedItems(): Observable<MostViewedItem[]> {
        const items: MostViewedItem[] = [
            { id: '1', title: 'Informe Mensual', type: 'Documento', icon: 'file-text', views: 124 },
            { id: '2', title: 'Roadmap 2025', type: 'Tablero', icon: 'map', views: 98 },
            { id: '3', title: 'Recursos Humanos', type: 'Carpeta', icon: 'folder', views: 85 },
            { id: '4', title: 'Backlog General', type: 'Lista', icon: 'list', views: 76 }
        ];
        return of(items).pipe(delay(500));
    }
}
