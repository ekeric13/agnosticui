import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TabPanelComponent {
    constructor() {
        this._tabButtonTitle = '';
        this.isActive = false;
    }
    set tabButtonTitle(t) {
        this._tabButtonTitle = t;
    }
    get tabButtonTitle() {
        return this._tabButtonTitle;
    }
}
TabPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TabPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TabPanelComponent, selector: "ag-tab-panel", inputs: { tabButtonTitle: "tabButtonTitle", isActive: "isActive", panelId: "panelId" }, ngImport: i0, template: `<div [id]="panelId" [hidden]="!isActive" role="tabpanel">
    <ng-content></ng-content>
  </div>`, isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: TabPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ag-tab-panel',
                    styleUrls: ['./tabs.css'],
                    template: `<div [id]="panelId" [hidden]="!isActive" role="tabpanel">
    <ng-content></ng-content>
  </div>`,
                }]
        }], propDecorators: { tabButtonTitle: [{
                type: Input
            }], isActive: [{
                type: Input
            }], panelId: [{
                type: Input
            }] } });
//# sourceMappingURL=tab-panel.component.js.map