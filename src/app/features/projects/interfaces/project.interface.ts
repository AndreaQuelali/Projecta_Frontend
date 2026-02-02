import { BadgeType } from '../../../shared/components/badge/badge';

export interface Project {
    id: string;
    title: string;
    description: string;
    icon: string;
    status: string;
    statusType: BadgeType;
    dueDate: string;
    progress: number;
    members: { name: string; avatar: string }[];
    tags: string[];
}
