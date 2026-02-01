import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HomeBannerComponent } from '../components/home-banner/home-banner.component';
import { RecentCardsComponent, ProjectCard } from '../components/recent-cards/recent-cards.component';
import { MostViewedComponent, MostViewedItem } from '../components/most-viewed/most-viewed.component';
import { HomeService } from '../services/home.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, HomeBannerComponent, RecentCardsComponent, MostViewedComponent],
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
    private homeService = inject(HomeService);

    recentProjects$!: Observable<ProjectCard[]>;
    mostViewed$!: Observable<MostViewedItem[]>;

    ngOnInit() {
        this.recentProjects$ = this.homeService.getRecentProjects();
        this.mostViewed$ = this.homeService.getMostViewedItems();
    }
}
