import { BadgeType } from '../../../shared/components/badge/badge';

export interface ProjectCard {
    id: string;
    title: string;
    description: string;
    icon: string;
    status: string;
    statusType: BadgeType;
    lastUpdated: string;
    members: { name: string; avatar: string }[];
    membersCount: number;
    completedTasks: number;
    totalTasks: number;
}
