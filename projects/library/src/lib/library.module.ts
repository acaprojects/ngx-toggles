import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ACustomEventsModule } from '@acaprojects/ngx-custom-events';

import { version } from './settings';

import * as dayjs_api from 'dayjs';
const dayjs = dayjs_api;

import { AToggleComponent } from './components/toggle/toggle.component';


@NgModule({
    declarations: [
        AToggleComponent
    ],
    imports: [CommonModule, ACustomEventsModule, ReactiveFormsModule],
    exports: [
        AToggleComponent
    ]
})
export class LibraryModule {
    public static version = 'local-dev';
    private static init = false;
    readonly build = dayjs();

    constructor() {
        if (!LibraryModule.init) {
            const now = dayjs();
            LibraryModule.init = true;
            const build = now.isSame(this.build, 'd') ? `Today at ${this.build.format('h:mmA')}` : this.build.format('D MMM YYYY, h:mmA');
            version(LibraryModule.version, build);
        }
    }
}

export { LibraryModule as ACA_TOGGLES_MODULE };
export { LibraryModule as ATogglesModule };
