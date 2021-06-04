import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { FuseCardModule } from '@fuse/components/card';
import { FuseDateRangeModule } from '@fuse/components/date-range';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseMasonryModule } from '@fuse/components/masonry/masonry.module';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { CoreFeaturesComponent } from 'app/modules/admin/docs/core-features/core-features.component';
import { MockApiComponent } from 'app/modules/admin/docs/core-features/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/docs/core-features/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/docs/core-features/components/card/card.component';
import { DateRangeComponent } from 'app/modules/admin/docs/core-features/components/date-range/date-range.component';
import { DrawerComponent } from 'app/modules/admin/docs/core-features/components/drawer/drawer.component';
import { HighlightComponent } from 'app/modules/admin/docs/core-features/components/highlight/highlight.component';
import { NavigationComponent } from 'app/modules/admin/docs/core-features/components/navigation/navigation.component';
import { MasonryComponent } from 'app/modules/admin/docs/core-features/components/masonry/masonry.component';
import { AutogrowComponent } from 'app/modules/admin/docs/core-features/directives/autogrow/autogrow.component';
import { ScrollbarComponent } from 'app/modules/admin/docs/core-features/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/docs/core-features/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/docs/core-features/services/config/config.component';
import { MediaWatcherComponent } from 'app/modules/admin/docs/core-features/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/docs/core-features/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/docs/core-features/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/docs/core-features/validators/must-match/must-match.component';
import { coreFeaturesRoutes } from 'app/modules/admin/docs/core-features/core-features.routing';

@NgModule({
    declarations: [
        CoreFeaturesComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DateRangeComponent,
        DrawerComponent,
        HighlightComponent,
        MasonryComponent,
        NavigationComponent,
        AutogrowComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent
    ],
    imports     : [
        RouterModule.forChild(coreFeaturesRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        FuseAlertModule,
        FuseCardModule,
        FuseDateRangeModule,
        FuseDrawerModule,
        FuseHighlightModule,
        FuseMasonryModule,
        FuseNavigationModule,
        FuseScrollResetModule,
        SharedModule
    ]
})
export class CoreFeaturesModule
{
}
