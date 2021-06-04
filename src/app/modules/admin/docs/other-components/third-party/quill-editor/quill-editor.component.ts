import { Component } from '@angular/core';
import { OtherComponentsComponent } from 'app/modules/admin/docs/other-components/other-components.component';

@Component({
    selector   : 'quill-editor',
    templateUrl: './quill-editor.component.html',
    styles     : ['']
})
export class QuillEditorComponent
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
