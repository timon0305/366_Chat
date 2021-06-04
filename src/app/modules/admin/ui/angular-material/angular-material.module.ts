import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { AngularMaterialComponent } from 'app/modules/admin/ui/angular-material/angular-material.component';

export const routes: Route[] = [
    {
        path     : '',
        component: AngularMaterialComponent
    }
];

@NgModule({
    declarations: [
        AngularMaterialComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class AngularMaterialModule
{
}
