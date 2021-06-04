import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageComponent } from 'app/layout/common/language/language.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        LanguageComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        SharedModule
    ],
    exports     : [
        LanguageComponent
    ]
})
export class LanguageModule
{
}
