export interface SidebarLink {
    path: string;
    label: string;
    icon: string;
    badge?: string;
    badgeType?: 'success' | 'warning' | 'error' | 'info';
}
