import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector       : 'core-features',
    templateUrl    : './core-features.component.html',
    styleUrls      : ['./core-features.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreFeaturesComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: FuseNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService
    )
    {
        this.menuData = [
            {
                id      : 'core-features.libraries',
                title   : 'Libraries',
                type    : 'group',
                children: [
                    {
                        id   : 'core-features.libraries.mock-api',
                        title: 'MockAPI',
                        type : 'basic',
                        link : '/docs/core-features/libraries/mock-api'
                    }
                ]
            },
            {
                id      : 'core-features.components',
                title   : 'Components',
                type    : 'group',
                children: [
                    {
                        id   : 'core-features.components.alert',
                        title: 'Alert',
                        type : 'basic',
                        link : '/docs/core-features/components/alert'
                    },
                    {
                        id   : 'core-features.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/docs/core-features/components/card'
                    },
                    {
                        id   : 'core-features.components.date-range',
                        title: 'DateRange',
                        type : 'basic',
                        link : '/docs/core-features/components/date-range'
                    },
                    {
                        id   : 'core-features.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/docs/core-features/components/drawer'
                    },
                    {
                        id   : 'core-features.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/docs/core-features/components/highlight'
                    },
                    {
                        id   : 'core-features.components.masonry',
                        title: 'Masonry',
                        type : 'basic',
                        link : '/docs/core-features/components/masonry'
                    },
                    {
                        id   : 'core-features.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/docs/core-features/components/navigation'
                    }
                ]
            },
            {
                id      : 'core-features.directives',
                title   : 'Directives',
                type    : 'group',
                children: [
                    {
                        id   : 'core-features.directives.autogrow',
                        title: 'Autogrow',
                        type : 'basic',
                        link : '/docs/core-features/directives/autogrow'
                    },
                    {
                        id   : 'core-features.directives.scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/docs/core-features/directives/scrollbar'
                    },
                    {
                        id   : 'core-features.directives.scroll-reset',
                        title: 'ScrollReset',
                        type : 'basic',
                        link : '/docs/core-features/directives/scroll-reset'
                    }
                ]
            },
            {
                id      : 'core-features.services',
                title   : 'Services',
                type    : 'group',
                children: [
                    {
                        id   : 'core-features.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/docs/core-features/services/config'
                    },
                    {
                        id   : 'core-features.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/docs/core-features/services/splash-screen'
                    },
                    {
                        id   : 'core-features.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/docs/core-features/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'core-features.pipes',
                title   : 'Pipes',
                type    : 'group',
                children: [
                    {
                        id   : 'core-features.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/docs/core-features/pipes/find-by-key'
                    }
                ]
            },
            {
                id      : 'core-features.validators',
                title   : 'Validators',
                type    : 'group',
                children: [
                    {
                        id   : 'core-features.validators.must-match',
                        title: 'MustMatch',
                        type : 'basic',
                        link : '/docs/core-features/validators/must-match'
                    }
                ]
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media query change
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('md') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
