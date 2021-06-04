import { Component } from '@angular/core';
import { OtherComponentsComponent } from 'app/modules/admin/docs/other-components/other-components.component';

@Component({
    selector   : 'user-menu',
    templateUrl: './user-menu.component.html',
    styles     : ['']
})
export class UserMenuComponent
{
    /**
     * Constructor
     */
    constructor(private _otherComponentsComponent: OtherComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
