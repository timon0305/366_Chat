import { Component } from '@angular/core';
import { CoreFeaturesComponent } from 'app/modules/admin/docs/core-features/core-features.component';

@Component({
    selector   : 'scrollbar',
    templateUrl: './scrollbar.component.html',
    styles     : ['']
})
export class ScrollbarComponent
{
    /**
     * Constructor
     */
    constructor(private _coreFeaturesComponent: CoreFeaturesComponent)
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
        this._coreFeaturesComponent.matDrawer.toggle();
    }
}
