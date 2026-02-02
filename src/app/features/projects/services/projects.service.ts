import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    getProjects(): Observable<Project[]> {
        const projects: Project[] = [
            {
                id: '1',
                title: 'Rediseño Dashboard',
                description: 'Actualización completa de la interfaz de usuario con nuevas métricas y gráficos interactivos.',
                icon: 'layout-dashboard',
                status: 'En Progreso',
                statusType: 'info',
                dueDate: '15 Mar 2024',
                progress: 65,
                members: [
                    { name: 'Ana', avatar: 'https://ui-avatars.com/api/?name=Ana&background=random' },
                    { name: 'Carlos', avatar: 'https://ui-avatars.com/api/?name=Carlos&background=random' },
                    { name: 'Maria', avatar: 'https://ui-avatars.com/api/?name=Maria&background=random' }
                ],
                tags: ['UI/UX', 'Frontend']
            },
            {
                id: '2',
                title: 'API Integración',
                description: 'Desarrollo de endpoints REST para la nueva aplicación móvil y documentación Swagger.',
                icon: 'server',
                status: 'Pendiente',
                statusType: 'warning',
                dueDate: '20 Abr 2024',
                progress: 15,
                members: [
                    { name: 'Pedro', avatar: 'https://ui-avatars.com/api/?name=Pedro&background=random' }
                ],
                tags: ['Backend', 'API']
            },
            {
                id: '3',
                title: 'Marketing Q1',
                description: 'Planificación estratégica de campañas para el primer trimestre del año fiscal.',
                icon: 'megaphone',
                status: 'Completado',
                statusType: 'success',
                dueDate: '30 Ene 2024',
                progress: 100,
                members: [
                    { name: 'Sofia', avatar: 'https://ui-avatars.com/api/?name=Sofia&background=random' },
                    { name: 'Juan', avatar: 'https://ui-avatars.com/api/?name=Juan&background=random' }
                ],
                tags: ['Marketing', 'Fiscal']
            },
            {
                id: '4',
                title: 'Migración Base de Datos',
                description: 'Migración de datos de usuarios y transacciones a la nueva infraestructura en la nube.',
                icon: 'database',
                status: 'En Progreso',
                statusType: 'info',
                dueDate: '10 May 2024',
                progress: 45,
                members: [
                    { name: 'Luis', avatar: 'https://ui-avatars.com/api/?name=Luis&background=random' },
                    { name: 'Elena', avatar: 'https://ui-avatars.com/api/?name=Elena&background=random' },
                    { name: 'Tom', avatar: 'https://ui-avatars.com/api/?name=Tom&background=random' }
                ],
                tags: ['DevOps', 'Database']
            },
            {
                id: '5',
                title: 'App Móvil iOS',
                description: 'Desarrollo nativo de la aplicación iOS con soporte para notificaciones push.',
                icon: 'smartphone',
                status: 'Error',
                statusType: 'error',
                dueDate: '01 Feb 2024',
                progress: 80,
                members: [
                    { name: 'Sara', avatar: 'https://ui-avatars.com/api/?name=Sara&background=random' }
                ],
                tags: ['Mobile', 'iOS']
            }
        ];
        return of(projects).pipe(delay(800));
    }
}
