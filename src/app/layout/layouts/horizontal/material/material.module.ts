import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseFullscreenModule } from '@fuse/components/fullscreen';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { LanguageModule } from 'app/layout/common/language/language.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserMenuModule } from 'app/layout/common/user-menu/user-menu.module';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialLayoutComponent } from 'app/layout/layouts/horizontal/material/material.component';

@NgModule({
    declarations: [
        MaterialLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseFullscreenModule,
        FuseNavigationModule,
        LanguageModule,
        MessagesModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        UserMenuModule,
        SharedModule
    ],
    exports     : [
        MaterialLayoutComponent
    ]
})
export class MaterialLayoutModule
{
}
