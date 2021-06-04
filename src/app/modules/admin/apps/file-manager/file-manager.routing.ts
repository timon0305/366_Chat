import { Route } from '@angular/router';
import { CanDeactivateFileManagerDetails } from 'app/modules/admin/apps/file-manager/file-manager.guards';
import { FileManagerComponent } from 'app/modules/admin/apps/file-manager/file-manager.component';
import { FileManagerListComponent } from 'app/modules/admin/apps/file-manager/list/list.component';
import { FileManagerDetailsComponent } from 'app/modules/admin/apps/file-manager/details/details.component';
import { FileManagerItemResolver, FileManagerItemsResolver } from 'app/modules/admin/apps/file-manager/file-manager.resolvers';

export const fileManagerRoutes: Route[] = [
    {
        path     : '',
        component: FileManagerComponent,
        children : [
            {
                path     : '',
                component: FileManagerListComponent,
                resolve  : {
                    items: FileManagerItemsResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : FileManagerDetailsComponent,
                        resolve      : {
                            item: FileManagerItemResolver
                        },
                        canDeactivate: [CanDeactivateFileManagerDetails]
                    }
                ]
            }
        ]
    }
];
