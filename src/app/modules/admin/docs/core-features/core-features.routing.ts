import { Route } from '@angular/router';
import { CoreFeaturesComponent } from 'app/modules/admin/docs/core-features/core-features.component';
import { MockApiComponent } from 'app/modules/admin/docs/core-features/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/docs/core-features/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/docs/core-features/components/card/card.component';
import { DateRangeComponent } from 'app/modules/admin/docs/core-features/components/date-range/date-range.component';
import { DrawerComponent } from 'app/modules/admin/docs/core-features/components/drawer/drawer.component';
import { HighlightComponent } from 'app/modules/admin/docs/core-features/components/highlight/highlight.component';
import { MasonryComponent } from 'app/modules/admin/docs/core-features/components/masonry/masonry.component';
import { NavigationComponent } from 'app/modules/admin/docs/core-features/components/navigation/navigation.component';
import { AutogrowComponent } from 'app/modules/admin/docs/core-features/directives/autogrow/autogrow.component';
import { ScrollbarComponent } from 'app/modules/admin/docs/core-features/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/docs/core-features/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/docs/core-features/services/config/config.component';
import { MediaWatcherComponent } from 'app/modules/admin/docs/core-features/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/docs/core-features/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/docs/core-features/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/docs/core-features/validators/must-match/must-match.component';

export const coreFeaturesRoutes: Route[] = [
    {
        path     : '',
        component: CoreFeaturesComponent,
        children : [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'libraries/mock-api'
            },
            {
                path    : 'libraries',
                children: [
                    {
                        path     : 'mock-api',
                        component: MockApiComponent
                    }
                ]
            },
            {
                path    : 'components',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'alert'
                    },
                    {
                        path     : 'alert',
                        component: AlertComponent
                    },
                    {
                        path     : 'card',
                        component: CardComponent
                    },
                    {
                        path     : 'date-range',
                        component: DateRangeComponent
                    },
                    {
                        path     : 'drawer',
                        component: DrawerComponent
                    },
                    {
                        path     : 'highlight',
                        component: HighlightComponent
                    },
                    {
                        path     : 'masonry',
                        component: MasonryComponent
                    },
                    {
                        path     : 'navigation',
                        component: NavigationComponent
                    }
                ]
            },
            {
                path    : 'directives',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'autogrow'
                    },
                    {
                        path     : 'autogrow',
                        component: AutogrowComponent
                    },
                    {
                        path     : 'scrollbar',
                        component: ScrollbarComponent
                    },
                    {
                        path     : 'scroll-reset',
                        component: ScrollResetComponent
                    }
                ]
            },
            {
                path    : 'services',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'config'
                    },
                    {
                        path     : 'config',
                        component: ConfigComponent
                    },
                    {
                        path     : 'splash-screen',
                        component: SplashScreenComponent
                    },
                    {
                        path     : 'media-watcher',
                        component: MediaWatcherComponent
                    }
                ]
            },
            {
                path    : 'pipes',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'find-by-key'
                    },
                    {
                        path     : 'find-by-key',
                        component: FindByKeyComponent
                    }
                ]
            },
            {
                path    : 'validators',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'must-match'
                    },
                    {
                        path     : 'must-match',
                        component: MustMatchComponent
                    }
                ]
            }
        ]
    }
];
