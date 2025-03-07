(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs')) :
  typeof define === 'function' && define.amd ? define('agnostic-angular', ['exports', '@angular/core', '@angular/common', 'rxjs'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["agnostic-angular"] = {}, global.ng.core, global.ng.common, global.rxjs));
})(this, (function (exports, i0, i1, rxjs) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

  var AlertComponent = /** @class */ (function () {
      function AlertComponent() {
          this.isRounded = false;
          this.isBorderAll = false;
          this.isBorderLeft = false;
          this.isBorderRight = false;
          this.isBorderTop = false;
          this.isBorderBottom = false;
          this.isBlockEnd = false;
          this.type = '';
      }
      Object.defineProperty(AlertComponent.prototype, "alertClasses", {
          get: function () {
              var classes = [
                  'alert',
                  this.type ? "alert-" + this.type : '',
                  this.isBorderAll ? 'alert-border-all' : '',
                  this.isBorderLeft ? 'alert-border-left' : '',
                  this.isBorderRight ? 'alert-border-right' : '',
                  this.isBorderTop ? 'alert-border-top' : '',
                  this.isBorderBottom ? 'alert-border-bottom' : '',
                  this.isBlockEnd ? 'alert-end' : '',
                  this.isRounded ? 'alert-rounded' : '',
              ].filter(function (c) { return c.length; }).join(' ');
              return classes;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(AlertComponent.prototype, "svgModifierClass", {
          get: function () {
              return this.type ? "alert-" + this.type + "-icon" : '';
          },
          enumerable: false,
          configurable: true
      });
      return AlertComponent;
  }());
  AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AlertComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: AlertComponent, selector: "ag-alert", inputs: { isRounded: "isRounded", isBorderAll: "isBorderAll", isBorderLeft: "isBorderLeft", isBorderRight: "isBorderRight", isBorderTop: "isBorderTop", isBorderBottom: "isBorderBottom", isBlockEnd: "isBlockEnd", type: "type" }, ngImport: i0__namespace, template: "<div [ngClass]=\"alertClasses\" role=\"alert\">\n    <svg\n      class=\"alert-icon\"\n      [ngClass]=\"svgModifierClass\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      height=\"24\"\n      viewBox=\"0 0 24 24\"\n      width=\"24\"\n    >\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      <path\n        fill=\"currentColor\"\n        d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"\n      ></path>\n    </svg>\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".alert-base,.alert{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.alert-end{justify-content:flex-end}.alert-skin,.alert{padding:var(--agnostic-side-padding);background:var(--agnostic-gray-light)}.alert-icon{color:var(--agnostic-gray-mid-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-border-top{border-top:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-left{border-left:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-bottom{border-bottom:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-right{border-right:var(--fluid-8) solid var(--agnostic-gray-mid-dark)}.alert-border-all{border:var(--fluid-2) solid var(--agnostic-gray-mid-dark)}.alert-rounded{border-radius:var(--agnostic-alert-radius, var(--agnostic-radius, .25rem))}.alert-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.alert-warning-icon{color:var(--agnostic-warning-border-accent);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-warning.alert-border-top{border-top-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-left{border-left-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-bottom{border-bottom-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-right{border-right-color:var(--agnostic-warning-border-accent)}.alert-warning.alert-border-all{border:var(--fluid-2) solid var(--agnostic-warning-border)}.alert-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.alert-info-icon{color:var(--agnostic-primary-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-info.alert-border-top{border-top-color:var(--agnostic-primary-dark)}.alert-info.alert-border-left{border-left-color:var(--agnostic-primary-dark)}.alert-info.alert-border-bottom{border-bottom-color:var(--agnostic-primary-dark)}.alert-info.alert-border-right{border-right-color:var(--agnostic-primary-dark)}.alert-info.alert-border-all{border:var(--fluid-2) solid var(--agnostic-primary-border)}.alert-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.alert-error-icon{color:var(--agnostic-error-dark);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-error.alert-border-top{border-top-color:var(--agnostic-error-dark)}.alert-error.alert-border-left{border-left-color:var(--agnostic-error-dark)}.alert-error.alert-border-bottom{border-bottom-color:var(--agnostic-error-dark)}.alert-error.alert-border-right{border-right-color:var(--agnostic-error-dark)}.alert-error.alert-border-all{border:var(--fluid-2) solid var(--agnostic-error-border)}.alert-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.alert-success-icon{color:var(--agnostic-action-from);margin-inline-end:var(--fluid-8);flex:0 0 var(--fluid-24)}.alert-success.alert-border-top{border-top-color:var(--agnostic-action-from)}.alert-success.alert-border-left{border-left-color:var(--agnostic-action-from)}.alert-success.alert-border-bottom{border-bottom-color:var(--agnostic-action-from)}.alert-success.alert-border-right{border-right-color:var(--agnostic-action-from)}.alert-success.alert-border-all{border:var(--fluid-2) solid var(--agnostic-action-border)}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AlertComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-alert',
                      template: "<div [ngClass]=\"alertClasses\" role=\"alert\">\n    <svg\n      class=\"alert-icon\"\n      [ngClass]=\"svgModifierClass\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      height=\"24\"\n      viewBox=\"0 0 24 24\"\n      width=\"24\"\n    >\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      <path\n        fill=\"currentColor\"\n        d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"\n      ></path>\n    </svg>\n    <ng-content></ng-content>\n  </div>",
                      styleUrls: ['./alert.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { isRounded: [{
                  type: i0.Input
              }], isBorderAll: [{
                  type: i0.Input
              }], isBorderLeft: [{
                  type: i0.Input
              }], isBorderRight: [{
                  type: i0.Input
              }], isBorderTop: [{
                  type: i0.Input
              }], isBorderBottom: [{
                  type: i0.Input
              }], isBlockEnd: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }] } });

  var AvatarGroupComponent = /** @class */ (function () {
      function AvatarGroupComponent() {
      }
      return AvatarGroupComponent;
  }());
  AvatarGroupComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AvatarGroupComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  AvatarGroupComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: AvatarGroupComponent, selector: "ag-avatar-group", ngImport: i0__namespace, template: "<div class=\"avatar-group\"><ng-content></ng-content></div>", isInline: true, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AvatarGroupComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-avatar-group',
                      template: "<div class=\"avatar-group\"><ng-content></ng-content></div>",
                      styleUrls: ['./avatar.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                      encapsulation: i0.ViewEncapsulation.None,
                  }]
          }] });
  var AvatarComponent = /** @class */ (function () {
      function AvatarComponent() {
          this.isRounded = false;
          this.isSquare = false;
          this.isTransparent = false;
          this.type = '';
          this.size = '';
          this.text = '';
      }
      Object.defineProperty(AvatarComponent.prototype, "avatarClasses", {
          get: function () {
              return [
                  'avatar',
                  this.size ? "avatar-" + this.size : '',
                  this.type ? "avatar-" + this.type : '',
                  this.isRounded ? 'avatar-rounded' : '',
                  this.isTransparent ? 'avatar-transparent' : '',
                  this.isSquare ? 'avatar-square' : '',
              ]
                  .filter(function (c) { return c.length; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return AvatarComponent;
  }());
  AvatarComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AvatarComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  AvatarComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: AvatarComponent, selector: "ag-avatar", inputs: { isRounded: "isRounded", isSquare: "isSquare", isTransparent: "isTransparent", type: "type", size: "size", text: "text" }, ngImport: i0__namespace, template: "<span [ngClass]=\"avatarClasses\" [attr.data-text]=\"text\"\n    ><ng-content></ng-content\n  ></span>", isInline: true, styles: [".avatar,.avatar-base{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden}.avatar,.avatar-skin{width:var(--fluid-40);height:var(--fluid-40);max-width:100%;background:var(--agnostic-gray-extra-light);border-radius:50%}.avatar-square{border-radius:0}.avatar-rounded{border-radius:var(--agnostic-radius)}.avatar-small{font-size:var(--fluid-12);width:var(--fluid-32);height:var(--fluid-32)}.avatar-large{width:var(--fluid-48);height:var(--fluid-48)}.avatar-xlarge{font-size:var(--fluid-20);width:var(--fluid-64);height:var(--fluid-64)}.avatar:before{content:attr(data-text)}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.avatar-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.avatar-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.avatar-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.avatar-transparent{background:transparent}.avatar-group{display:flex;flex-direction:row}.avatar-group>span,.avatar-group .avatar{border:2px solid white}.avatar-group>span:not(:first-child),.avatar-group .avatar:not(:first-child){margin-inline-start:calc(-1 * var(--fluid-10))}\n", ":host:not(.first){margin-inline-start:calc(-1 * var(--fluid-10))}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AvatarComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-avatar',
                      template: "<span [ngClass]=\"avatarClasses\" [attr.data-text]=\"text\"\n    ><ng-content></ng-content\n  ></span>",
                      styleUrls: ['./avatar.css', './avatar.shame.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { isRounded: [{
                  type: i0.Input
              }], isSquare: [{
                  type: i0.Input
              }], isTransparent: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], text: [{
                  type: i0.Input
              }] } });

  var BreadcrumbItemComponent = /** @class */ (function () {
      function BreadcrumbItemComponent() {
          this.isLast = false;
      }
      return BreadcrumbItemComponent;
  }());
  BreadcrumbItemComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: BreadcrumbItemComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  BreadcrumbItemComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: BreadcrumbItemComponent, selector: "ag-breadcrumb-item", inputs: { route: "route", isLast: "isLast" }, ngImport: i0__namespace, template: "<li class=\"breadcrumb-item\" [class.active]=\"isLast\" [attr.aria-current]=\"isLast ? 'page' : null\">\n    <a *ngIf=\"!isLast && route.url; else linklessLabel\" [href]=\"route.url\">{{route.label}}</a>\n    <ng-template #linklessLabel>\n      {{route.label}}\n    </ng-template>\n  </li>", isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: BreadcrumbItemComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-breadcrumb-item',
                      template: "<li class=\"breadcrumb-item\" [class.active]=\"isLast\" [attr.aria-current]=\"isLast ? 'page' : null\">\n    <a *ngIf=\"!isLast && route.url; else linklessLabel\" [href]=\"route.url\">{{route.label}}</a>\n    <ng-template #linklessLabel>\n      {{route.label}}\n    </ng-template>\n  </li>",
                      styleUrls: ['./breadcrumb.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { route: [{
                  type: i0.Input
              }], isLast: [{
                  type: i0.Input
              }] } });
  var BreadcrumbComponent = /** @class */ (function () {
      function BreadcrumbComponent() {
          this.type = 'slash';
      }
      Object.defineProperty(BreadcrumbComponent.prototype, "breadcrumbClasses", {
          get: function () {
              return [
                  'breadcrumb',
                  this.type ? "breadcrumb-" + this.type : '',
              ]
                  .filter(function (c) { return c.length; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return BreadcrumbComponent;
  }());
  BreadcrumbComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: BreadcrumbComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  BreadcrumbComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: BreadcrumbComponent, selector: "ag-breadcrumb", inputs: { type: "type", routes: "routes" }, ngImport: i0__namespace, template: "<nav aria-label=\"breadcrumbs\">\n  <ol [class]=\"breadcrumbClasses\">\n    <li *ngFor=\"let route of routes; last as isLast\" class=\"breadcrumb-item\" [class.active]=\"isLast\" [attr.aria-current]=\"isLast ? 'page' : null\">\n      <a *ngIf=\"!isLast && route.url; else linklessLabel\" [href]=\"route.url\">{{route.label}}</a>\n      <ng-template #linklessLabel>{{route.label}}</ng-template>\n    </li>\n  </ol>\n</nav>", isInline: true, styles: [".breadcrumb{display:flex;flex-wrap:wrap;padding:0;white-space:nowrap;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-inline-start:var(--fluid-6)}.breadcrumb-item+.breadcrumb-item:before{padding-inline-end:var(--fluid-6);color:var(--agnostic-gray-mid-dark);content:\"\\203a\"}.breadcrumb-item.active{color:var(--agnostic-dark)}.breadcrumb-slash .breadcrumb-item+.breadcrumb-item:before{content:\"/\"}.breadcrumb-arrow .breadcrumb-item+.breadcrumb-item:before{content:\"\\2192\"}.breadcrumb-bullet .breadcrumb-item+.breadcrumb-item:before{content:\"\\2022\"}\n"], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: BreadcrumbComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-breadcrumb',
                      template: "<nav aria-label=\"breadcrumbs\">\n  <ol [class]=\"breadcrumbClasses\">\n    <li *ngFor=\"let route of routes; last as isLast\" class=\"breadcrumb-item\" [class.active]=\"isLast\" [attr.aria-current]=\"isLast ? 'page' : null\">\n      <a *ngIf=\"!isLast && route.url; else linklessLabel\" [href]=\"route.url\">{{route.label}}</a>\n      <ng-template #linklessLabel>{{route.label}}</ng-template>\n    </li>\n  </ol>\n</nav>",
                      styleUrls: ['./breadcrumb.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { type: [{
                  type: i0.Input
              }], routes: [{
                  type: i0.Input
              }] } });

  var ButtonComponent = /** @class */ (function () {
      function ButtonComponent() {
          this.mode = undefined;
          this.type = 'button';
          this.size = 'medium';
          this.isDisabled = false;
          this.handleClick = new i0.EventEmitter();
      }
      Object.defineProperty(ButtonComponent.prototype, "classes", {
          get: function () {
              var baseClass = this.isSkinned !== false ? "btn" : "btn-base";
              var modeClass = this.mode ? "btn-" + this.mode : '';
              var isBlankClass = this.isBlank === true ? 'btn-blank' : '';
              var isLinkClass = this.isLink === true ? 'btn-link' : '';
              var isBorderedClass = this.isBordered === true ? 'btn-bordered' : '';
              var isRaisedClass = this.isRaised === true ? 'btn-raised' : '';
              var isCircleClass = this.isCircle === true ? 'btn-circle' : '';
              var isBlockClass = this.isBlock === true ? 'btn-block' : '';
              var isRoundedClass = this.isRounded === true ? 'btn-rounded' : '';
              var overrides = this.css ? "" + this.css : '';
              var sizeClass = this.size ? "btn-" + this.size : 'btn-medium';
              return [
                  baseClass,
                  modeClass,
                  sizeClass,
                  isBorderedClass,
                  isCircleClass,
                  isRoundedClass,
                  isRaisedClass,
                  isBlockClass,
                  isBlankClass,
                  isLinkClass,
                  overrides,
              ].join(' ');
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ButtonComponent.prototype, "getDisabled", {
          get: function () {
              return this.isDisabled || false;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ButtonComponent.prototype, "getType", {
          get: function () {
              return this.type ? this.type : 'button';
          },
          enumerable: false,
          configurable: true
      });
      return ButtonComponent;
  }());
  ButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ButtonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ButtonComponent, selector: "ag-button", inputs: { mode: "mode", type: "type", size: "size", css: "css", isDisabled: "isDisabled", isSkinned: "isSkinned", isBlank: "isBlank", isLink: "isLink", isRaised: "isRaised", isCircle: "isCircle", isBlock: "isBlock", isBordered: "isBordered", isRounded: "isRounded" }, outputs: { handleClick: "handleClick" }, ngImport: i0__namespace, template: " <button\n      div\n      *ngIf=\"getType !== 'faux'; else useFauxDiv\"\n      [type]=\"getType\"\n      (click)=\"handleClick.emit($event)\"\n      [disabled]=\"getDisabled\"\n      [class]=\"classes\"\n    >\n      <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n    </button>\n    <ng-template #useFauxDiv>\n      <div [class]=\"classes\">\n        <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- We have to grab projected ng-content and put in this template.\n      Then, we can reference it from the template outlets above -->\n    <ng-template #contentTpl>\n      <ng-content></ng-content>\n    </ng-template>", isInline: true, styles: [".btn-base,.btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin,.btn{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);text-decoration:none;text-align:center;outline:none}.btn:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn:hover{opacity:85%;text-decoration:none}.btn:active{text-shadow:0 1px 0 rgb(255 255 255 / 30%);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px #0003}.btn:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.btn.disabled,.btn:disabled{top:0!important;background:var(--agnostic-btn-disabled-bg, var(--agnostic-gray-mid-dark))!important;text-shadow:0 1px 1px rgb(255 255 255 / 100%)!important;border-color:transparent;color:var(--agnostic-btn-disabled-color, var(--agnostic-gray-dark))!important;cursor:default!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;opacity:80%!important}.btn-primary{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered:hover,.btn-primary.btn-bordered:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered:hover,.btn-secondary.btn-bordered:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-raised{border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;background:linear-gradient(var(--agnostic-btn-raised-from, var(--agnostic-gray-mid)),var(--agnostic-btn-raised-to, var(--agnostic-gray-extra-light)));box-shadow:inset 0 1px #ffffff4d,0 1px 2px #00000026}.btn-raised:hover,.btn-raised:focus{background:linear-gradient(to bottom,white,gainsboro)}.btn-raised.active{background:#eee;box-shadow:inset 0 1px 3px #0003,0 1px #fff}.btn-raised.btn-primary{border-color:var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from));background:linear-gradient(var(--agnostic-btn-primary-raised-from, var(--agnostic-primary-from)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-to)))}.btn-raised.btn-primary:hover,.btn-raised.btn-primary:focus{background:linear-gradient(to bottom,var(--agnostic-btn-primary-raised-hover-from, var(--agnostic-primary-hover)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)));background:linear-gradient(var(--agnostic-btn-primary-raised-hover-from, var(--agnostic-primary-hover)),var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)))}.btn-raised.btn-primary:active,.btn-raised.btn-primary.active{opacity:90%;box-shadow:0 0 0 1px #0000004d}.btn-raised.btn-secondary{border-color:var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to));background:linear-gradient(var(--agnostic-btn-secondary-raised-from, var(--agnostic-secondary-from)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))}.btn-raised.btn-secondary:hover,.btn-raised.btn-secondary:focus{background:linear-gradient(to bottom,var(--agnostic-btn-secondary-raised-hover-from, var(--agnostic-secondary-hover)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)));background:linear-gradient(var(--agnostic-btn-secondary-raised-hover-from, var(--agnostic-secondary-hover)),var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))}.btn-raised.btn-secondary:active,.btn-raised.btn-secondary.active{opacity:90%;box-shadow:0 0 0 1px #0000004d}.btn-bordered{border-width:1px;background:transparent}.btn-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, .25rem))}.btn-pill{border-radius:200px}.btn-circle{border-radius:100%;width:2.5rem;height:2.5rem;padding:0!important}.btn-circle-large{font-size:calc(var(--agnostic-btn-font-size, 1rem) + .25rem);width:3rem;height:3rem}.btn-circle-small{font-size:calc(var(--agnostic-btn-font-size, 1rem) - .25rem);width:2rem;height:2rem}.btn-block{width:100%}.btn-block-following{margin-block-start:-1px}.btn-link,.btn-blank{font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-size:var(--agnostic-btn-font-size, 1rem);background-color:transparent;border:0;border-radius:0;box-shadow:none;transition:none}.btn-link{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-link:hover{cursor:pointer}@media (prefers-reduced-motion),(update: slow){.btn,.btn-blank,.btn:focus{transition-duration:.001ms!important}}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ButtonComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-button',
                      template: " <button\n      div\n      *ngIf=\"getType !== 'faux'; else useFauxDiv\"\n      [type]=\"getType\"\n      (click)=\"handleClick.emit($event)\"\n      [disabled]=\"getDisabled\"\n      [class]=\"classes\"\n    >\n      <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n    </button>\n    <ng-template #useFauxDiv>\n      <div [class]=\"classes\">\n        <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- We have to grab projected ng-content and put in this template.\n      Then, we can reference it from the template outlets above -->\n    <ng-template #contentTpl>\n      <ng-content></ng-content>\n    </ng-template>",
                      styleUrls: ['./button.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { mode: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], css: [{
                  type: i0.Input
              }], isDisabled: [{
                  type: i0.Input
              }], isSkinned: [{
                  type: i0.Input
              }], isBlank: [{
                  type: i0.Input
              }], isLink: [{
                  type: i0.Input
              }], isRaised: [{
                  type: i0.Input
              }], isCircle: [{
                  type: i0.Input
              }], isBlock: [{
                  type: i0.Input
              }], isBordered: [{
                  type: i0.Input
              }], isRounded: [{
                  type: i0.Input
              }], handleClick: [{
                  type: i0.Output
              }] } });

  var ButtonGroupComponent = /** @class */ (function () {
      function ButtonGroupComponent() {
      }
      Object.defineProperty(ButtonGroupComponent.prototype, "getAriaLabel", {
          get: function () {
              var label = this.ariaLabel ? this.ariaLabel : 'button group element';
              return label;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(ButtonGroupComponent.prototype, "classes", {
          get: function () {
              var cssClass = this.css ? this.css : '';
              return ['btn-group', cssClass].join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return ButtonGroupComponent;
  }());
  ButtonGroupComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ButtonGroupComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ButtonGroupComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ButtonGroupComponent, selector: "ag-button-group", inputs: { css: "css", ariaLabel: "ariaLabel" }, queries: [{ propertyName: "buttons", predicate: ButtonComponent }], ngImport: i0__namespace, template: "<div [ngClass]=\"classes\">\n    <span class=\"screenreader-only\">{{ getAriaLabel }}</span>\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".btn-group{display:inline-flex;flex-direction:row}.btn-group .btn{border-radius:0;margin-inline-start:-1px}.btn-first-wrap .btn{margin-inline-start:0;border-top-left-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-left-radius:var(--agnostic-btn-radius, var(--fluid-4))}.btn-last-wrap .btn{border-top-right-radius:var(--agnostic-btn-radius, var(--fluid-4));border-bottom-right-radius:var(--agnostic-btn-radius, var(--fluid-4))}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ButtonGroupComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-button-group',
                      template: "<div [ngClass]=\"classes\">\n    <span class=\"screenreader-only\">{{ getAriaLabel }}</span>\n    <ng-content></ng-content>\n  </div>",
                      styleUrls: ['./button-group.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                      encapsulation: i0.ViewEncapsulation.None,
                  }]
          }], propDecorators: { buttons: [{
                  type: i0.ContentChildren,
                  args: [ButtonComponent]
              }], css: [{
                  type: i0.Input
              }], ariaLabel: [{
                  type: i0.Input
              }] } });

  var CardComponent = /** @class */ (function () {
      function CardComponent() {
          this.isSkinned = true;
      }
      Object.defineProperty(CardComponent.prototype, "classes", {
          get: function () {
              var baseClass = this.isSkinned ? 'card' : 'card-base';
              var isAnimatedClass = this.isAnimated ? 'card-animated' : '';
              var isStackedClass = this.isStacked ? 'card-stacked' : '';
              var isShadowClass = this.isShadow ? 'card-shadow' : '';
              var isRoundedClass = this.isRounded ? 'card-rounded' : '';
              var isBorderClass = this.isBorder ? 'card-border' : '';
              var typeClass = this.type ? "card-" + this.type : '';
              var overrides = this.css ? "" + this.css : '';
              return [
                  baseClass,
                  typeClass,
                  isAnimatedClass,
                  isStackedClass,
                  isShadowClass,
                  isRoundedClass,
                  isBorderClass,
                  overrides,
              ].join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return CardComponent;
  }());
  CardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: CardComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  CardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: CardComponent, selector: "ag-card", inputs: { css: "css", type: "type", isAnimated: "isAnimated", isSkinned: "isSkinned", isStacked: "isStacked", isShadow: "isShadow", isRounded: "isRounded", isBorder: "isBorder" }, ngImport: i0__namespace, template: "<div [ngClass]=\"classes\">\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".card,.card-base{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card-border{border:1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light))}.card-rounded{border-radius:var(--agnostic-radius, .25rem)}.card-shadow{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .5625rem) var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 1px) var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));border-radius:var(--agnostic-card-border-radius, var(--agnostic-radius, .25rem));overflow:hidden}.card-shadow:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0) var(--agnostic-card-boxshadow1-offset-y, .375rem) var(--agnostic-card-boxshadow1-blur, .875rem) var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0) var(--agnostic-card-boxshadow2-blur, 2px) var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%))}.card-animated{transition:box-shadow ease-out 5s,transform var(--agnostic-timing-fast) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}.card-animated:hover{transform:translateY(var(--agnostic-card-translateY-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),transform var(--agnostic-timing-slow) cubic-bezier(var(--agnostic-card-cubic-1, .39),var(--agnostic-card-cubic-2, .575),var(--agnostic-card-cubic-3, .565),var(--agnostic-card-cubic-4, 1))}@media (prefers-reduced-motion),(update: slow){.card-animated,.card-animated:hover{transition-duration:.001ms!important}}.card-stacked{flex-direction:column}.card-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.card-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.card-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.card-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: CardComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-card',
                      template: "<div [ngClass]=\"classes\">\n    <ng-content></ng-content>\n  </div>",
                      styleUrls: ['./card.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { css: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], isAnimated: [{
                  type: i0.Input
              }], isSkinned: [{
                  type: i0.Input
              }], isStacked: [{
                  type: i0.Input
              }], isShadow: [{
                  type: i0.Input
              }], isRounded: [{
                  type: i0.Input
              }], isBorder: [{
                  type: i0.Input
              }] } });

  var CloseComponent = /** @class */ (function () {
      function CloseComponent() {
          this.size = '';
      }
      return CloseComponent;
  }());
  CloseComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: CloseComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  CloseComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: CloseComponent, selector: "ag-close", inputs: { size: "size" }, ngImport: i0__namespace, template: "<button\n    class=\"close-button\"\n    aria-label=\"Close\"\n    [class.close-button-small]=\"size === 'small'\"\n    [class.close-button-large]=\"size === 'large'\"\n  >\n    <svg class=\"close\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n      <path\n        fill=\"currentColor\"\n        d=\"M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z\"\n      />\n    </svg>\n  </button>", isInline: true, styles: [".close-button{background-color:transparent;border:0;border-radius:0;box-shadow:none;width:var(--fluid-24);height:var(--fluid-24)}.close-button:hover,.close-button:active,.close-button:focus{background:none;outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.close-button:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.close{width:var(--fluid-12);height:var(--fluid-12);display:inline-block;vertical-align:middle;line-height:1em;flex-shrink:0;color:currentColor}.close-button .close{opacity:80%;transition:opacity var(--agnostic-timing-medium)}@media (prefers-reduced-motion),(update: slow){.close-button:focus,.close-button .close{transition-duration:.001ms!important}}.close-button-small{width:var(--fluid-18);height:var(--fluid-18)}.close-button-large{width:var(--fluid-32);height:var(--fluid-32)}.close-button-xlarge{width:var(--fluid-40);height:var(--fluid-40)}.close-button-small>.close{width:.5625rem;height:.5625rem}.close-button-large>.close{width:var(--fluid-16);height:var(--fluid-16)}.close-button-xlarge>.close{width:var(--fluid-20);height:var(--fluid-20)}.close-button:hover .close{opacity:100%}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: CloseComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-close',
                      template: "<button\n    class=\"close-button\"\n    aria-label=\"Close\"\n    [class.close-button-small]=\"size === 'small'\"\n    [class.close-button-large]=\"size === 'large'\"\n  >\n    <svg class=\"close\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n      <path\n        fill=\"currentColor\"\n        d=\"M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z\"\n      />\n    </svg>\n  </button>",
                      styleUrls: ['./close.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { size: [{
                  type: i0.Input
              }] } });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p))
                  d[p] = b[p]; };
      return extendStatics(d, b);
  };
  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function () {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
      var t = {};
      for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }
  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
      else
          for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                  r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
      return function (target, key) { decorator(target, key, paramIndex); };
  }
  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try {
              step(generator.next(value));
          }
          catch (e) {
              reject(e);
          } }
          function rejected(value) { try {
              step(generator["throw"](value));
          }
          catch (e) {
              reject(e);
          } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }
  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function () { if (t[0] & 1)
              throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f)
              throw new TypeError("Generator is already executing.");
          while (_)
              try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                      return t;
                  if (y = 0, t)
                      op = [op[0] & 2, t.value];
                  switch (op[0]) {
                      case 0:
                      case 1:
                          t = op;
                          break;
                      case 4:
                          _.label++;
                          return { value: op[1], done: false };
                      case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                      case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                      default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                              _ = 0;
                              continue;
                          }
                          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                              _.label = op[1];
                              break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                              _.label = t[1];
                              t = op;
                              break;
                          }
                          if (t && _.label < t[2]) {
                              _.label = t[2];
                              _.ops.push(op);
                              break;
                          }
                          if (t[2])
                              _.ops.pop();
                          _.trys.pop();
                          continue;
                  }
                  op = body.call(thisArg, _);
              }
              catch (e) {
                  op = [6, e];
                  y = 0;
              }
              finally {
                  f = t = 0;
              }
          if (op[0] & 5)
              throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
      }
  }
  var __createBinding = Object.create ? (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
  }) : (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      o[k2] = m[k];
  });
  function __exportStar(m, o) {
      for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
  }
  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
          return m.call(o);
      if (o && typeof o.length === "number")
          return {
              next: function () {
                  if (o && i >= o.length)
                      o = void 0;
                  return { value: o && o[i++], done: !o };
              }
          };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
          return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
      }
      catch (error) {
          e = { error: error };
      }
      finally {
          try {
              if (r && !r.done && (m = i["return"]))
                  m.call(i);
          }
          finally {
              if (e)
                  throw e.error;
          }
      }
      return ar;
  }
  /** @deprecated */
  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }
  /** @deprecated */
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }
  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                  if (!ar)
                      ar = Array.prototype.slice.call(from, 0, i);
                  ar[i] = from[i];
              }
          }
      return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
      function verb(n) { if (g[n])
          i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
      function resume(n, v) { try {
          step(g[n](v));
      }
      catch (e) {
          settle(q[0][3], e);
      } }
      function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
      function fulfill(value) { resume("next", value); }
      function reject(value) { resume("throw", value); }
      function settle(f, v) { if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]); }
  }
  function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
      function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
  }
  function __asyncValues(o) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
      function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
      function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
  }
  function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
      }
      else {
          cooked.raw = raw;
      }
      return cooked;
  }
  ;
  var __setModuleDefault = Object.create ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function (o, v) {
      o["default"] = v;
  };
  function __importStar(mod) {
      if (mod && mod.__esModule)
          return mod;
      var result = {};
      if (mod != null)
          for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                  __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
  }
  function __importDefault(mod) {
      return (mod && mod.__esModule) ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m")
          throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  }

  var ChoiceInputComponent = /** @class */ (function () {
      function ChoiceInputComponent() {
          this.isInline = false;
          this.isFieldset = true;
          this.isSkinned = true;
          this.isDisabled = false;
          this.options = [];
          this._checkedOptions = [];
          this.legendLabel = '';
          this.type = 'checkbox';
          this.size = '';
          this.selected = new i0.EventEmitter();
      }
      Object.defineProperty(ChoiceInputComponent.prototype, "checkedOptions", {
          get: function () {
              return this._checkedOptions;
          },
          set: function (val) {
              this._checkedOptions = val;
          },
          enumerable: false,
          configurable: true
      });
      ChoiceInputComponent.prototype.labelSpanClasses = function () {
          var klasses = [
              this.type ? this.type + "-label" : '',
              this.size ? this.type + "-label-" + this.size : '',
          ];
          klasses = klasses.filter(function (klass) { return klass.length; });
          return klasses.join(' ');
      };
      ChoiceInputComponent.prototype.handleChange = function (ev) {
          var _a, _b, _c;
          var el = ev.target;
          var value = el.value;
          if (this.type === 'checkbox') {
              var checkedItemsUpdated = void 0;
              if ((_a = this.checkedOptions) === null || _a === void 0 ? void 0 : _a.includes(value)) {
                  checkedItemsUpdated = (_b = this.checkedOptions) === null || _b === void 0 ? void 0 : _b.filter(function (item) { return item !== value; });
                  this.checkedOptions = checkedItemsUpdated;
              }
              else {
                  checkedItemsUpdated = __spreadArray(__spreadArray([], __read(this.checkedOptions)), [value]);
                  this.checkedOptions = checkedItemsUpdated;
              }
              this.selected.emit(checkedItemsUpdated);
          }
          else {
              if ((_c = this.checkedOptions) === null || _c === void 0 ? void 0 : _c.includes(value)) {
                  this.checkedOptions = [value];
                  this.selected.emit(this.checkedOptions);
              }
          }
      };
      ChoiceInputComponent.prototype.inputClasses = function () {
          var inputKlasses = [
              "" + this.type,
              this.size ? "" + this.size : '',
              this.isDisabled ? 'disabled' : '',
          ];
          inputKlasses = inputKlasses.filter(function (klass) { return klass.length; });
          return inputKlasses.join(' ');
      };
      ChoiceInputComponent.prototype.fieldsetClass = function () {
          var skin = this.isSkinned ? this.type + "-group" : '';
          var sizeSkin = this.isSkinned && this.size === 'large'
              ? this.type + "-group-" + this.size
              : '';
          var overrides = this.css ? "" + this.css : '';
          var klasses = [
              overrides ? overrides : '',
              skin,
              sizeSkin,
              this.isFieldset === false ? this.type + "-group-hidden" : '',
          ];
          return klasses.filter(function (klass) { return klass.length; });
      };
      ChoiceInputComponent.prototype.legendClasses = function () {
          var skin = this.isSkinned ? this.type + "-legend" : '';
          var klasses = [
              skin,
              this.isFieldset === false ? 'screenreader-only' : null,
          ];
          return klasses.join(' ');
      };
      ChoiceInputComponent.prototype.labelClasses = function () {
          var klasses = [
              this.type ? this.type + "-label-wrap" : '',
              this.isInline ? this.type + "-label-wrap-inline" : '',
          ];
          klasses = klasses.filter(function (klass) { return klass.length; });
          return klasses.join(' ');
      };
      return ChoiceInputComponent;
  }());
  ChoiceInputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ChoiceInputComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ChoiceInputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ChoiceInputComponent, selector: "ag-choice-input", inputs: { isInline: "isInline", isFieldset: "isFieldset", isSkinned: "isSkinned", isDisabled: "isDisabled", options: "options", disabledOptions: "disabledOptions", checkedOptions: "checkedOptions", css: "css", legendLabel: "legendLabel", type: "type", size: "size" }, outputs: { selected: "selected" }, ngImport: i0__namespace, template: "<fieldset [ngClass]=\"fieldsetClass()\">\n    <legend [ngClass]=\"legendClasses()\">{{ legendLabel }}</legend>\n    <ng-container *ngFor=\"let option of options\">\n      <label\n        [attr.disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n        [ngClass]=\"labelClasses()\"\n      >\n        <input\n          [ngClass]=\"inputClasses()\"\n          [type]=\"type\"\n          [name]=\"option.name\"\n          [value]=\"option.value\"\n          [disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n          [checked]=\"checkedOptions?.includes(option.value) || false\"\n          (change)=\"this.handleChange($event)\"\n        />\n        <span [ngClass]=\"labelSpanClasses()\">{{ option.label }}</span>\n      </label>\n    </ng-container>\n  </fieldset>", isInline: true, styles: [".checkbox-group,.radio-group{--width-28: calc(7 * var(--fluid-4));border:1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large,.radio-group-large{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend,.radio-legend{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox,.radio{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0%}.checkbox-small,.radio-small{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large,.radio-large{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap,.radio-label-wrap{display:block;cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline,.radio-label-wrap-inline{display:inline-flex}.checkbox-label-wrap-inline:not(:last-child),.radio-label-wrap-inline:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label,.radio-label{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border,background-color,transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label:before,.radio-label:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, .75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label:before{border:2px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.checkbox-label:after,.checkbox-label:before,.radio-label:before{transition-duration:.001ms!important}}.checkbox-label-small:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large:before{width:var(--fluid-16);height:var(--fluid-16)}.radio:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2) var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),0 0 0 calc(1.5 * var(--fluid-2)) #fff,0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox:focus+.checkbox-label:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color)}.checkbox:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden,.radio-group-hidden{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled]+.checkbox-label,.radio[disabled]+.radio-label,.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled,.radio-label-wrap.disabled,.checkbox-label-wrap-inline.disabled,.radio-label-wrap-inline.disabled{outline:2px solid transparent;outline-offset:-2px}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ChoiceInputComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-choice-input',
                      template: "<fieldset [ngClass]=\"fieldsetClass()\">\n    <legend [ngClass]=\"legendClasses()\">{{ legendLabel }}</legend>\n    <ng-container *ngFor=\"let option of options\">\n      <label\n        [attr.disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n        [ngClass]=\"labelClasses()\"\n      >\n        <input\n          [ngClass]=\"inputClasses()\"\n          [type]=\"type\"\n          [name]=\"option.name\"\n          [value]=\"option.value\"\n          [disabled]=\"isDisabled || disabledOptions?.includes(option.value)\"\n          [checked]=\"checkedOptions?.includes(option.value) || false\"\n          (change)=\"this.handleChange($event)\"\n        />\n        <span [ngClass]=\"labelSpanClasses()\">{{ option.label }}</span>\n      </label>\n    </ng-container>\n  </fieldset>",
                      styleUrls: ['./choice-input.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { isInline: [{
                  type: i0.Input
              }], isFieldset: [{
                  type: i0.Input
              }], isSkinned: [{
                  type: i0.Input
              }], isDisabled: [{
                  type: i0.Input
              }], options: [{
                  type: i0.Input
              }], disabledOptions: [{
                  type: i0.Input
              }], checkedOptions: [{
                  type: i0.Input
              }], css: [{
                  type: i0.Input
              }], legendLabel: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], selected: [{
                  type: i0.Output
              }] } });

  var DiscloseComponent = /** @class */ (function () {
      function DiscloseComponent() {
          this.title = "";
          this.isOpen = false;
          this.isBackground = false;
      }
      return DiscloseComponent;
  }());
  DiscloseComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: DiscloseComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  DiscloseComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: DiscloseComponent, selector: "ag-disclose", inputs: { title: "title", isOpen: "isOpen", isBackground: "isBackground" }, ngImport: i0__namespace, template: "<details class=\"disclose\" [class.disclose-bg]=\"isBackground\" [attr.open]=\"isOpen || null\">\n    <summary class=\"disclose-title\">{{title}}</summary>\n    <div class=\"disclose-panel\">\n      <ng-content></ng-content>\n    </div>\n  </details>", isInline: true, styles: [".disclose{margin-block-end:var(--fluid-4)}.disclose-title{display:block;cursor:pointer;font-weight:600;padding:var(--fluid-8) var(--fluid-12);position:relative;color:inherit;transition:color var(--agnostic-timing-slow)}.disclose-panel{font-weight:400;padding:var(--fluid-16)}.disclose-title,.disclose-panel{margin:0}.disclose-title::webkit-details-marker{display:none}.disclose-bg .disclose-title{background-color:var(--agnostic-gray-light)}.disclose-title:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.disclose-title:after{color:var(--agnostic-gray-dark);content:\"\\203a\";position:absolute;right:var(--fluid-12);top:0;bottom:0;font-size:var(--fluid-32);line-height:1;font-weight:100;transition:transform var(--agnostic-timing-slow);transform:rotate(0)}@media (prefers-reduced-motion),(update: slow){.disclose-title,.disclose-title:focus,.disclose-title:after{transition:none}}.disclose[open]>.disclose-title:after{transform:rotate(90deg)}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: DiscloseComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-disclose',
                      template: "<details class=\"disclose\" [class.disclose-bg]=\"isBackground\" [attr.open]=\"isOpen || null\">\n    <summary class=\"disclose-title\">{{title}}</summary>\n    <div class=\"disclose-panel\">\n      <ng-content></ng-content>\n    </div>\n  </details>",
                      styleUrls: ['./disclose.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { title: [{
                  type: i0.Input
              }], isOpen: [{
                  type: i0.Input
              }], isBackground: [{
                  type: i0.Input
              }] } });

  var DividerComponent = /** @class */ (function () {
      function DividerComponent() {
          this.hasContent = false;
          this.isVertical = false;
      }
      Object.defineProperty(DividerComponent.prototype, "dividerClasses", {
          get: function () {
              return [
                  'divider',
                  this.isVertical ? 'divider-vertical' : '',
                  this.type ? "divider-" + this.type : '',
                  this.size ? "divider-" + this.size : '',
                  this.justify ? "divider-justify-" + this.justify : '',
              ]
                  .filter(function (c) { return c; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return DividerComponent;
  }());
  DividerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: DividerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  DividerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: DividerComponent, selector: "ag-divider", inputs: { hasContent: "hasContent", isVertical: "isVertical", justify: "justify", type: "type", size: "size" }, host: { properties: { "class.flex": "this.isVertical" } }, ngImport: i0__namespace, template: "<div [class]=\"dividerClasses\">\n    <div *ngIf=\"hasContent\" class=\"divider-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>", isInline: true, styles: [".divider{display:flex;justify-content:center;align-items:center;white-space:nowrap;width:100%}.divider:before,.divider:after{content:\"\";background-color:var(--agnostic-gray-mid);height:var(--fluid-2);flex-grow:1}.divider-small:before,.divider-small:after{height:1px}.divider-large:before,.divider-large:after{height:var(--fluid-4)}.divider-xlarge:before,.divider-xlarge:after{height:var(--fluid-6)}.divider-justify-end:after,.divider-justify-start:before{flex-grow:0;flex-basis:3%}.divider-content{padding-inline-start:var(--fluid-16);padding-inline-end:var(--fluid-16)}.divider-vertical{height:auto;margin:0 var(--fluid-16);width:var(--fluid-16);flex-direction:column;align-self:stretch}.divider-vertical:before,.divider-vertical:after{width:var(--fluid-2)}.divider-vertical.divider-small:before,.divider-vertical.divider-small:after{width:1px}.divider-vertical.divider-large:before,.divider-vertical.divider-large:after{width:var(--fluid-4)}.divider-vertical.divider-xlarge:before,.divider-vertical.divider-xlarge:after{width:var(--fluid-6)}.divider-vertical .divider-content{padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6)}.divider-warning:before,.divider-warning:after{background-color:var(--agnostic-warning-dark)}.divider-warning .divider-content{color:var(--agnostic-warning-dark)}.divider-error:before,.divider-error:after{background-color:var(--agnostic-error)}.divider-error .divider-content{color:var(--agnostic-error)}.divider-success:before,.divider-success:after{background-color:var(--agnostic-action-from)}.divider-success .divider-content{color:var(--agnostic-action-from)}.divider-info:before,.divider-info:after{background-color:var(--agnostic-primary)}.divider-info .divider-content{color:var(--agnostic-primary)}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: DividerComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-divider',
                      template: "<div [class]=\"dividerClasses\">\n    <div *ngIf=\"hasContent\" class=\"divider-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>",
                      styleUrls: ['./divider.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { hasContent: [{
                  type: i0.Input
              }], isVertical: [{
                  type: i0.HostBinding,
                  args: ['class.flex']
              }, {
                  type: i0.Input
              }], justify: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }] } });

  var EmptyStateHeaderComponent = /** @class */ (function () {
      function EmptyStateHeaderComponent() {
      }
      return EmptyStateHeaderComponent;
  }());
  EmptyStateHeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateHeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  EmptyStateHeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateHeaderComponent, selector: "ag-empty-state-header", ngImport: i0__namespace, template: "<ng-content></ng-content>", isInline: true, changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateHeaderComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-empty-state-header',
                      template: "<ng-content></ng-content>",
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }] });
  var EmptyStateBodyComponent = /** @class */ (function () {
      function EmptyStateBodyComponent() {
      }
      return EmptyStateBodyComponent;
  }());
  EmptyStateBodyComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateBodyComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  EmptyStateBodyComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateBodyComponent, selector: "ag-empty-state-body", ngImport: i0__namespace, template: "<ng-content></ng-content>", isInline: true, changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateBodyComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-empty-state-body',
                      template: "<ng-content></ng-content>",
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }] });
  var EmptyStateFooterComponent = /** @class */ (function () {
      function EmptyStateFooterComponent() {
      }
      return EmptyStateFooterComponent;
  }());
  EmptyStateFooterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateFooterComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  EmptyStateFooterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateFooterComponent, selector: "ag-empty-state-footer", ngImport: i0__namespace, template: "<div class=\"empty-action\">\n    <ng-content></ng-content>\n  </div>", isInline: true, changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateFooterComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-empty-state-footer',
                      template: "<div class=\"empty-action\">\n    <ng-content></ng-content>\n  </div>",
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }] });
  var EmptyStateComponent = /** @class */ (function () {
      function EmptyStateComponent() {
      }
      Object.defineProperty(EmptyStateComponent.prototype, "emptyClasses", {
          get: function () {
              return [
                  'empty',
                  this.isRounded ? 'empty-rounded' : '',
                  this.isBordered ? 'empty-bordered' : '',
              ]
                  .filter(function (c) { return c; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return EmptyStateComponent;
  }());
  EmptyStateComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  EmptyStateComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: EmptyStateComponent, selector: "ag-empty-state", inputs: { isBordered: "isBordered", isRounded: "isRounded" }, ngImport: i0__namespace, template: "<div [class]=\"emptyClasses\">\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".empty-base,.empty{display:flex;flex-flow:column wrap;align-items:center;text-align:center;width:100%}.empty{padding:calc(2 * var(--agnostic-side-padding));background:var(--agnostic-gray-extra-light)}.empty-bordered{background:transparent;border:1px solid var(--agnostic-gray-light)}.empty-rounded{border-radius:var(--agnostic-radius)}.empty-actions{margin-block-start:var(--spacing-24)}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: EmptyStateComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-empty-state',
                      template: "<div [class]=\"emptyClasses\">\n    <ng-content></ng-content>\n  </div>",
                      styleUrls: ['./empty-state.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { isBordered: [{
                  type: i0.Input
              }], isRounded: [{
                  type: i0.Input
              }] } });

  var HeaderNavComponent = /** @class */ (function () {
      function HeaderNavComponent() {
      }
      Object.defineProperty(HeaderNavComponent.prototype, "classes", {
          get: function () {
              return ['header-nav', this.css ? "" + this.css : '']
                  .filter(function (cl) { return cl.length; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return HeaderNavComponent;
  }());
  HeaderNavComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: HeaderNavComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  HeaderNavComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: HeaderNavComponent, selector: "ag-header-nav", inputs: { css: "css" }, ngImport: i0__namespace, template: "<nav>\n    <div [ngClass]=\"classes\">\n      <ng-content></ng-content>\n    </div>\n  </nav>", isInline: true, styles: [".header-nav{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media (min-width: 960px){.header-nav{flex-direction:row}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: HeaderNavComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-header-nav',
                      template: "<nav>\n    <div [ngClass]=\"classes\">\n      <ng-content></ng-content>\n    </div>\n  </nav>",
                      styleUrls: ['./headernav.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { css: [{
                  type: i0.Input
              }] } });
  var HeaderNavItemComponent = /** @class */ (function () {
      function HeaderNavItemComponent() {
      }
      Object.defineProperty(HeaderNavItemComponent.prototype, "classes", {
          get: function () {
              var klasses = ['header-nav-item', this.css ? "" + this.css : ''];
              klasses = klasses.filter(function (klass) { return klass.length; });
              return klasses.join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return HeaderNavItemComponent;
  }());
  HeaderNavItemComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: HeaderNavItemComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  HeaderNavItemComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: HeaderNavItemComponent, selector: "ag-header-nav-item", inputs: { css: "css" }, ngImport: i0__namespace, template: "<div [ngClass]=\"classes\"><ng-content></ng-content></div>", isInline: true, styles: [".header-nav-item{display:inline-block}.header-nav-item:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item a{color:var(--agnostic-header-color, var(--agnostic-font-color))}@media (min-width: 960px){.header-nav-item:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: HeaderNavItemComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-header-nav-item',
                      template: "<div [ngClass]=\"classes\"><ng-content></ng-content></div>",
                      styleUrls: ['./headernavitem.css'],
                  }]
          }], propDecorators: { css: [{
                  type: i0.Input
              }] } });
  var HeaderComponent = /** @class */ (function () {
      function HeaderComponent() {
          this.isSkinned = true;
          this.isHeaderContentStart = false;
          this.isHeaderContentEnd = false;
      }
      Object.defineProperty(HeaderComponent.prototype, "classes", {
          get: function () {
              var baseClass = this.isSkinned ? 'header' : 'header-base';
              var isStickyClass = this.isSticky ? 'header-sticky' : '';
              var overrides = this.css ? "" + this.css : '';
              return [baseClass, isStickyClass, overrides]
                  .filter(function (c) { return c.length; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(HeaderComponent.prototype, "headerContentClasses", {
          get: function () {
              var baseClass = 'header-content';
              var headerContentStart = this.isHeaderContentStart
                  ? 'header-content-start'
                  : '';
              var headerContentEnd = this.isHeaderContentEnd
                  ? 'header-content-end'
                  : '';
              return [baseClass, headerContentStart, headerContentEnd]
                  .filter(function (c) { return c.length; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return HeaderComponent;
  }());
  HeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: HeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  HeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: HeaderComponent, selector: "ag-header", inputs: { css: "css", isSkinned: "isSkinned", isHeaderContentStart: "isHeaderContentStart", isHeaderContentEnd: "isHeaderContentEnd", isSticky: "isSticky" }, ngImport: i0__namespace, template: "<header [ngClass]=\"classes\">\n    <div [ngClass]=\"headerContentClasses\"><ng-content></ng-content></div>\n  </header> ", isInline: true, styles: [".header,.header-base{display:block}.header-base img,.header img{max-width:100%;height:auto}.header,.header-skin{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px) var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px) var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family-body));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky{position:relative;top:0;z-index:10}@media (min-width: 960px){.header-sticky{position:sticky}.header-content{flex-direction:row;justify-content:space-between}.header-content-start{justify-content:flex-start}.header-content-end{justify-content:flex-end}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: HeaderComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-header',
                      template: "<header [ngClass]=\"classes\">\n    <div [ngClass]=\"headerContentClasses\"><ng-content></ng-content></div>\n  </header> ",
                      styleUrls: ['./header.css'],
                  }]
          }], propDecorators: { css: [{
                  type: i0.Input
              }], isSkinned: [{
                  type: i0.Input
              }], isHeaderContentStart: [{
                  type: i0.Input
              }], isHeaderContentEnd: [{
                  type: i0.Input
              }], isSticky: [{
                  type: i0.Input
              }] } });

  var IconComponent = /** @class */ (function () {
      function IconComponent() {
          this.size = 18;
          this.type = '';
          this.isSkinned = true;
      }
      Object.defineProperty(IconComponent.prototype, "iconClasses", {
          get: function () {
              return [
                  'icon',
                  this.isSkinned ? 'icon' : 'icon-base',
                  this.size ? "icon-" + this.size : '',
                  this.type ? "icon-" + this.type : '',
              ]
                  .filter(function (c) { return c; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return IconComponent;
  }());
  IconComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: IconComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  IconComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: IconComponent, selector: "ag-icon", inputs: { size: "size", type: "type", isSkinned: "isSkinned" }, ngImport: i0__namespace, template: "<span [class]=\"iconClasses\"><ng-content></ng-content></span>", isInline: true, styles: [".icon-base>svg,.icon>svg{display:inline-flex;text-align:center;max-width:100%;pointer-events:none;-webkit-user-select:none;user-select:none}.icon-skin,.icon,.icon>svg{width:var(--fluid-16);height:var(--fluid-16)}.icon>svg{fill:currentColor}.icon-14,.icon-14>svg{width:var(--fluid-14);height:var(--fluid-14)}.icon-16,.icon-16>svg{width:var(--fluid-16);height:var(--fluid-16)}.icon-18,.icon-18>svg{width:var(--fluid-18);height:var(--fluid-18)}.icon-20,.icon-20>svg{width:var(--fluid-20);height:var(--fluid-20)}.icon-24,.icon-24>svg{width:var(--fluid-24);height:var(--fluid-24)}.icon-32,.icon-32>svg{width:var(--fluid-32);height:var(--fluid-32)}.icon-36,.icon-36>svg{width:var(--fluid-36);height:var(--fluid-36)}.icon-40,.icon-40>svg{width:var(--fluid-40);height:var(--fluid-40)}.icon-48,.icon-48>svg{width:var(--fluid-48);height:var(--fluid-48)}.icon-56,.icon-56>svg{width:var(--fluid-56);height:var(--fluid-56)}.icon-64,.icon-64>svg{width:var(--fluid-64);height:var(--fluid-64)}.icon-info>svg{color:var(--agnostic-primary)}.icon-success>svg{color:var(--agnostic-action)}.icon-warning>svg{color:var(--agnostic-warning-border-accent)}.icon-error>svg{color:var(--agnostic-error)}\n", "ag-icon{display:inline-flex}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: IconComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-icon',
                      template: "<span [class]=\"iconClasses\"><ng-content></ng-content></span>",
                      styleUrls: ['./icon.css', './icon.host.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                      encapsulation: i0.ViewEncapsulation.None,
                  }]
          }], propDecorators: { size: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], isSkinned: [{
                  type: i0.Input
              }] } });

  var InputComponent = /** @class */ (function () {
      function InputComponent() {
          this.externalId = '';
          this._ID = '';
          this.helpText = '';
          this.invalidText = '';
          this.isInvalid = false;
          this.isSkinned = true;
          this.isRounded = false;
          this.isUnderlined = false;
          this.isInline = false;
          this.isDisabled = false;
          this.hasLeftAddon = false;
          this.hasRightAddon = false;
          this.isUnderlinedWithBackground = false;
          this.size = '';
      }
      Object.defineProperty(InputComponent.prototype, "id", {
          get: function () {
              return this._ID;
          },
          set: function (value) {
              this._ID = value;
              this.externalId = null;
          },
          enumerable: false,
          configurable: true
      });
      InputComponent.prototype.helpClasses = function () {
          var klasses = [
              !this.size ? 'field-help' : '',
              this.size ? "field-help-" + this.size : '',
          ];
          return klasses.filter(function (klass) { return klass.length; }).join(' ');
      };
      InputComponent.prototype.invalidClasses = function () {
          var klasses = [
              !this.size ? 'field-error' : '',
              this.size ? "field-error-" + this.size : '',
          ];
          return klasses.filter(function (klass) { return klass.length; }).join(' ');
      };
      InputComponent.prototype.labelClasses = function () {
          var labelKlasses = [
              'label',
              this.isInvalid ? 'label-error' : '',
              this.isInline ? 'label-inline' : '',
              this.size ? "label-" + this.size : '',
              this.labelCss ? this.labelCss : '',
          ];
          return labelKlasses.filter(function (klass) { return klass.length; }).join(' ');
      };
      InputComponent.prototype.inputClasses = function () {
          var klasses = [
              this.isSkinned ? 'input' : 'input-base',
              this.isRounded ? 'input-rounded' : '',
              this.isUnderlined ? 'input-underlined' : '',
              this.isDisabled ? 'disabled' : '',
              this.isInline ? 'input-inline' : '',
              this.hasLeftAddon ? 'input-has-left-addon' : '',
              this.hasRightAddon ? 'input-has-right-addon' : '',
              this.isInvalid ? 'input-error' : '',
              this.isUnderlinedWithBackground ? 'input-underlined-bg' : '',
              this.css ? "" + this.css : '',
              this.size ? "input-" + this.size : '',
          ];
          klasses = klasses.filter(function (klass) { return klass.length; });
          return klasses.join(' ');
      };
      InputComponent.prototype.handleChange = function (ev) {
          console.log('handleChange not yet implemented...');
      };
      InputComponent.prototype.handleFocus = function (ev) {
          console.log('handleFocus not yet implemented...');
      };
      InputComponent.prototype.handleBlur = function (ev) {
          console.log('handleBlur not yet implemented...');
      };
      return InputComponent;
  }());
  InputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: InputComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  InputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: InputComponent, selector: "ag-input", inputs: { id: "id", helpText: "helpText", invalidText: "invalidText", isInvalid: "isInvalid", isSkinned: "isSkinned", isRounded: "isRounded", isUnderlined: "isUnderlined", isInline: "isInline", isDisabled: "isDisabled", hasLeftAddon: "hasLeftAddon", hasRightAddon: "hasRightAddon", isUnderlinedWithBackground: "isUnderlinedWithBackground", name: "name", label: "label", labelCss: "labelCss", css: "css", placeholder: "placeholder", defaultValue: "defaultValue", size: "size", type: "type", rows: "rows", cols: "cols" }, host: { properties: { "attr.id": "this.externalId" } }, ngImport: i0__namespace, template: "<div className=\"w-100\">\n    <label [class]=\"labelClasses()\" [for]=\"id\">\n      {{ label }}\n    </label>\n    <ng-container *ngIf=\"type === 'textarea'; else noTextarea\">\n      <textarea\n        *ngIf=\"type === 'textarea'\"\n        [id]=\"id\"\n        [attr.name]=\"name ? name : null\"\n        [value]=\"defaultValue || ''\"\n        [disabled]=\"isDisabled\"\n        [class]=\"inputClasses()\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [attr.rows]=\"rows\"\n        [attr.cols]=\"cols\"\n        (change)=\"(handleChange)\"\n        (focus)=\"(handleFocus)\"\n        (blur)=\"(handleBlur)\"\n      ></textarea>\n    </ng-container>\n    <ng-template #noTextarea>\n      <div\n        class=\"input-addon-container\"\n        *ngIf=\"hasLeftAddon || hasRightAddon; else inputOnly\"\n      >\n        <ng-content select=\"[addOnLeft]\"></ng-content>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n        <ng-content select=\"[addOnRight]\"></ng-content>\n      </div>\n      <ng-template #inputOnly>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n      </ng-template>\n    </ng-template>\n    <span\n      *ngIf=\"isInvalid; else helpHint\"\n      [class]=\"invalidClasses()\"\n      role=\"status\"\n      aria-live=\"polite\"\n    >\n      {{ invalidText }}\n    </span>\n    <ng-template #helpHint>\n      <span [class]=\"helpClasses()\" role=\"status\" aria-live=\"polite\">\n        {{ helpText }}\n      </span>\n    </ng-template>\n  </div>", isInline: true, styles: [".input-base,.input{-webkit-user-select:initial;user-select:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;caret-color:currentColor}.label,.label-base{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help,.field-help-large,.field-help-small,.field-error,.field-error-large,.field-error-small,.label-skin,.label,.input-addon-container,.input-small,.input-large,.input-skin,.input-underlined,.input-underlined-bg,.input{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family-body);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin,.input{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, .5rem);padding-block-end:var(--agnostic-input-vertical-pad, .5rem);padding-inline-start:var(--agnostic-input-side-padding, .75rem);padding-inline-end:var(--agnostic-input-side-padding, .75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, .375rem);vertical-align:initial}.field-help,.field-error,.label,.label-skin{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline,.input-inline{width:auto}.label-inline{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, .75rem)}.input::-webkit-input-placeholder{color:currentColor;opacity:50%;-webkit-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input::-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input:-ms-placeholder{color:currentColor;opacity:50%;-ms-transition:opacity var(--agnostic-timing-fast) ease-out;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded{border-radius:var(--agnostic-radius, .25rem)}.label-error{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error,.field-error,.field-error-small,.field-error-large{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help,.field-help-small,.field-help-large{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help,.field-help-small,.field-help-large,.field-error,.field-error-small,.field-error-large{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, .5rem) / 2)}.input-large{font-size:calc(var(--agnostic-font-size, 1rem) + .25rem);line-height:1.6rem}.field-help-large,.field-error-large,.label-large{font-size:var(--agnostic-font-size, 1rem)}.input-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem);line-height:1rem}.field-help-small,.field-error-small,.label-small{font-size:calc(var(--agnostic-font-size, 1rem) - .25rem)}.input:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error:focus{box-shadow:0 0 0 3px transparent}.input.disabled,.input:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg))!important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.input:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container{display:flex;position:relative;width:100%;--addon-padding: calc(var(--agnostic-input-side-padding, .75rem) * 1.5)}.input-has-left-addon,.input-has-right-addon{flex:1}.input-has-left-addon{padding-inline-start:calc(var(--addon-padding) * 2.25)}.input-has-right-addon{padding-inline-end:calc(var(--addon-padding) * 2.25)}@media (prefers-reduced-motion),(update: slow){.input-skin,.input,.input::placeholder,.input::-webkit-input-placeholder,.input::-ms-placeholder,.input:-ms-placeholder,.input:focus{transition-duration:.001ms!important}}.input-addon-right,.input-addon-left{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}.input-addon-left{left:var(--addon-padding)}.input-addon-right{right:var(--addon-padding)}\n", ":host ::ng-deep .addOnLeft,:host ::ng-deep .addOnRight{display:flex;align-items:center;justify-content:center;position:absolute;top:0;height:2.375rem}:host ::ng-deep .addOnLeft{left:var(--addon-padding)}:host ::ng-deep .addOnRight{right:var(--addon-padding)}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: InputComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-input',
                      template: "<div className=\"w-100\">\n    <label [class]=\"labelClasses()\" [for]=\"id\">\n      {{ label }}\n    </label>\n    <ng-container *ngIf=\"type === 'textarea'; else noTextarea\">\n      <textarea\n        *ngIf=\"type === 'textarea'\"\n        [id]=\"id\"\n        [attr.name]=\"name ? name : null\"\n        [value]=\"defaultValue || ''\"\n        [disabled]=\"isDisabled\"\n        [class]=\"inputClasses()\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [attr.rows]=\"rows\"\n        [attr.cols]=\"cols\"\n        (change)=\"(handleChange)\"\n        (focus)=\"(handleFocus)\"\n        (blur)=\"(handleBlur)\"\n      ></textarea>\n    </ng-container>\n    <ng-template #noTextarea>\n      <div\n        class=\"input-addon-container\"\n        *ngIf=\"hasLeftAddon || hasRightAddon; else inputOnly\"\n      >\n        <ng-content select=\"[addOnLeft]\"></ng-content>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n        <ng-content select=\"[addOnRight]\"></ng-content>\n      </div>\n      <ng-template #inputOnly>\n        <input\n          [id]=\"id\"\n          [attr.name]=\"name ? name : null\"\n          [value]=\"defaultValue || ''\"\n          [type]=\"type\"\n          [disabled]=\"isDisabled\"\n          [class]=\"inputClasses()\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          (change)=\"(handleChange)\"\n          (focus)=\"(handleFocus)\"\n          (blur)=\"(handleBlur)\"\n        />\n      </ng-template>\n    </ng-template>\n    <span\n      *ngIf=\"isInvalid; else helpHint\"\n      [class]=\"invalidClasses()\"\n      role=\"status\"\n      aria-live=\"polite\"\n    >\n      {{ invalidText }}\n    </span>\n    <ng-template #helpHint>\n      <span [class]=\"helpClasses()\" role=\"status\" aria-live=\"polite\">\n        {{ helpText }}\n      </span>\n    </ng-template>\n  </div>",
                      styleUrls: ['./input.css', './inputaddon-hack.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { externalId: [{
                  type: i0.HostBinding,
                  args: ['attr.id']
              }], id: [{
                  type: i0.Input
              }], helpText: [{
                  type: i0.Input
              }], invalidText: [{
                  type: i0.Input
              }], isInvalid: [{
                  type: i0.Input
              }], isSkinned: [{
                  type: i0.Input
              }], isRounded: [{
                  type: i0.Input
              }], isUnderlined: [{
                  type: i0.Input
              }], isInline: [{
                  type: i0.Input
              }], isDisabled: [{
                  type: i0.Input
              }], hasLeftAddon: [{
                  type: i0.Input
              }], hasRightAddon: [{
                  type: i0.Input
              }], isUnderlinedWithBackground: [{
                  type: i0.Input
              }], name: [{
                  type: i0.Input
              }], label: [{
                  type: i0.Input
              }], labelCss: [{
                  type: i0.Input
              }], css: [{
                  type: i0.Input
              }], placeholder: [{
                  type: i0.Input
              }], defaultValue: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], rows: [{
                  type: i0.Input
              }], cols: [{
                  type: i0.Input
              }] } });

  var LoaderComponent = /** @class */ (function () {
      function LoaderComponent() {
          this.size = '';
          this.ariaLabel = 'Loading…';
      }
      Object.defineProperty(LoaderComponent.prototype, "loaderClasses", {
          get: function () {
              return [
                  'loader',
                  "loader-" + this.size,
              ].filter(function (cl) { return cl; }).join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return LoaderComponent;
  }());
  LoaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: LoaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  LoaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: LoaderComponent, selector: "ag-loader", inputs: { size: "size", ariaLabel: "ariaLabel" }, ngImport: i0__namespace, template: "<div [class]=\"loaderClasses\" role=\"status\" attr.aria-live=\"polite\" [attr.aria-busy]=\"true\">\n    <span class=\"screenreader-only\">{{ariaLabel}}</span>\n  </div>", isInline: true, styles: [".loader{--loading-color: var(--agnostic-loading-color, var(--agnostic-dark));--loading-size: var(--fluid-16);--loading-size-small: var(--fluid-12);--loading-size-large: var(--fluid-18);position:relative;box-sizing:border-box;animation:blink 1s infinite;animation-delay:.25s;margin-left:var(--loading-size);opacity:0%}.loader,.loader:before,.loader:after{width:calc(var(--loading-size) / 2);height:calc(var(--loading-size) / 2);border-radius:var(--fluid-6);background-color:var(--loading-color)}.loader-small,.loader-small:before,.loader-small:after{width:calc(var(--loading-size-small) / 2);height:calc(var(--loading-size-small) / 2)}.loader-large,.loader-large:before,.loader-large:after{width:calc(var(--loading-size-large) / 2);height:calc(var(--loading-size-large) / 2);border-radius:var(--fluid-8)}.loader:before,.loader:after{content:\"\";display:inline-block;position:absolute;top:0;animation:blink 1s infinite}.loader:before{left:calc(-1 * var(--loading-size));animation-delay:0s}.loader:after{left:var(--loading-size);animation-delay:.5s}.loader-small:before{left:calc(-1 * var(--loading-size-small))}.loader-small:after{left:var(--loading-size-small)}.loader-large:before{left:calc(-1 * var(--loading-size-large));animation-delay:0s}.loader-large:after{left:var(--loading-size-large)}.loader[aria-busy=true]{opacity:100%}@keyframes blink{50%{background-color:transparent}}@media (prefers-reduced-motion),(update: slow){.loader,.loader:before,.loader:after{transition-duration:.001ms!important}}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: LoaderComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-loader',
                      template: "<div [class]=\"loaderClasses\" role=\"status\" attr.aria-live=\"polite\" [attr.aria-busy]=\"true\">\n    <span class=\"screenreader-only\">{{ariaLabel}}</span>\n  </div>",
                      styleUrls: ['./loader.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { size: [{
                  type: i0.Input
              }], ariaLabel: [{
                  type: i0.Input
              }] } });

  var PaginationComponent = /** @class */ (function () {
      function PaginationComponent() {
          this.justify = '';
          this.ariaLabel = 'Pagination';
          this.current = 1;
          this.pages = [];
          this.isBordered = false;
          this.isFirstLast = true;
          this.navigationLabels = {
              first: 'First',
              last: 'Last',
              previous: 'Previous',
              next: 'Next',
          };
          this.onPageChange = new i0.EventEmitter();
      }
      PaginationComponent.prototype.onFirst = function () {
          this.onPageChange.emit(1);
      };
      PaginationComponent.prototype.onPrevious = function () {
          this.onPageChange.emit(this.current - 1);
      };
      PaginationComponent.prototype.onNext = function () {
          this.onPageChange.emit(this.current + 1);
      };
      PaginationComponent.prototype.onLast = function () {
          this.onPageChange.emit(this.getLastPageNumber());
      };
      PaginationComponent.prototype.handleClick = function (page) {
          this.onPageChange.emit(page);
      };
      PaginationComponent.prototype.isOnFirst = function () {
          return this.current === 1;
      };
      PaginationComponent.prototype.getLastPageNumber = function () {
          return this.pages[this.pages.length - 1];
      };
      PaginationComponent.prototype.isOnLast = function () {
          return this.current === this.getLastPageNumber();
      };
      Object.defineProperty(PaginationComponent.prototype, "paginationContainerClasses", {
          get: function () {
              return [
                  'pagination-container',
                  !!this.justify ? "pagination-" + this.justify : '',
              ]
                  .filter(function (cl) { return cl; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(PaginationComponent.prototype, "paginationClasses", {
          get: function () {
              return ['pagination', !!this.isBordered ? 'pagination-bordered' : '']
                  .filter(function (cl) { return cl; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(PaginationComponent.prototype, "paginationItemFirstClasses", {
          get: function () {
              return [
                  'pagination-item',
                  this.isOnFirst() ? 'pagination-item-disabled' : '',
              ]
                  .filter(function (cl) { return cl; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(PaginationComponent.prototype, "paginationItemLastClasses", {
          get: function () {
              return [
                  'pagination-item',
                  this.isOnLast() ? 'pagination-item-disabled' : '',
              ]
                  .filter(function (cl) { return cl; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(PaginationComponent.prototype, "paginationButtonClass", {
          get: function () {
              return 'pagination-button';
          },
          enumerable: false,
          configurable: true
      });
      PaginationComponent.prototype.paginationItemClassesForPage = function (page) {
          return [
              'pagination-item',
              page === this.current ? 'pagination-item-active' : '',
              page === '...' ? 'pagination-item-gap' : '',
          ]
              .filter(function (cl) { return cl; })
              .join(' ');
      };
      PaginationComponent.prototype.ariaForCurrentPage = function (page) {
          return "Page " + page + ",  current page";
      };
      PaginationComponent.prototype.firstLabel = function () {
          var _a;
          return String.fromCharCode(171) + " " + ((_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.first);
      };
      PaginationComponent.prototype.previousLabel = function () {
          var _a;
          return String.fromCharCode(8249) + " " + ((_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.previous);
      };
      PaginationComponent.prototype.nextLabel = function () {
          var _a;
          return ((_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.next) + " " + String.fromCharCode(8250);
      };
      PaginationComponent.prototype.lastLabel = function () {
          var _a;
          return ((_a = this.navigationLabels) === null || _a === void 0 ? void 0 : _a.last) + " " + String.fromCharCode(187);
      };
      return PaginationComponent;
  }());
  PaginationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: PaginationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  PaginationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: PaginationComponent, selector: "ag-pagination", inputs: { justify: "justify", ariaLabel: "ariaLabel", current: "current", pages: "pages", isBordered: "isBordered", isFirstLast: "isFirstLast", navigationLabels: "navigationLabels" }, outputs: { onPageChange: "onPageChange" }, ngImport: i0__namespace, template: "<nav\n    [class]=\"paginationContainerClasses\"\n    [attr.aria-label]=\"ariaLabel\"\n  >\n    <ul [class]=\"paginationClasses\">\n      <li *ngIf=\"isFirstLast\" [class]=\"paginationItemFirstClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"onFirst()\"\n          [disabled]=\"isOnFirst()\"\n          [attr.aria-disabled]=\"isOnFirst()\"\n          aria-label=\"Goto page 1\"\n        >\n          {{ firstLabel() }}\n        </button>\n      </li>\n      <li [class]=\"paginationItemFirstClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"onPrevious()\"\n          aria-label=\"Goto previous page\"\n          [attr.aria-disabled]=\"isOnFirst()\"\n          [disabled]=\"isOnFirst()\"\n        >\n          {{ previousLabel() }}\n        </button>\n      </li>\n      <li\n        *ngFor=\"let page of pages; index as i\"\n        [class]=\"paginationItemClassesForPage(page)\"\n      >\n        <button\n          *ngIf=\"page === current\"\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"handleClick(page)\"\n          aria-current=\"page\"\n          [attr.aria-label]=\"ariaForCurrentPage(page)\"\n        >\n          {{ page }}\n        </button>\n        <span *ngIf=\"page === '...'; else notGap\">{{ page }}</span>\n        <ng-template #notGap>\n          <button\n            *ngIf=\"page !== current\"\n            type=\"button\"\n            [class]=\"paginationButtonClass\"\n            (click)=\"handleClick(page)\"\n            [attr.aria-label]=\"'Goto page ' + page\"\n          >\n            {{ page }}\n          </button>\n        </ng-template>\n      </li>\n      <li [class]=\"paginationItemLastClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          aria-label=\"Goto next page\"\n          [disabled]=\"isOnLast()\"\n          [attr.aria-disabled]=\"isOnLast()\"\n          (click)=\"onNext()\"\n        >\n          {{ nextLabel() }}\n        </button>\n      </li>\n      <li [class]=\"paginationItemLastClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"onLast()\"\n          [disabled]=\"isOnLast()\"\n          [attr.aria-disabled]=\"isOnLast()\"\n          aria-label=\"Goto last page\"\n        >\n          {{ lastLabel() }}\n        </button>\n      </li>\n    </ul>\n  </nav> ", isInline: true, styles: [".pagination-container{display:flex}.pagination{display:flex;list-style:none}.pagination-item{padding-inline-start:var(--fluid-2);padding-inline-end:var(--fluid-2)}.pagination-button{--agnostic-pagination-button-color: var(--agnostic-primary);color:var(--agnostic-pagination-button-color);display:inline-block;line-height:var(--fluid-20);padding-inline-start:var(--fluid-12);padding-inline-end:var(--fluid-12);padding-block-start:var(--fluid-6);padding-block-end:var(--fluid-6);border-radius:var(--agnostic-radius);border:1px solid transparent;background-color:transparent}.pagination-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.pagination-button:focus{transition-duration:.001ms!important}}.pagination-item-disabled{cursor:not-allowed}.pagination-button:disabled,.pagination-item-disabled .pagination-button{color:var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));opacity:80%;pointer-events:none}.pagination-item-active .pagination-button{background-color:var(--agnostic-primary);color:var(--agnostic-light)}.pagination-bordered .pagination-item-active .pagination-button{background-color:unset;border:1px solid var(--agnostic-primary);color:var(--agnostic-primary)}.pagination-item:hover .pagination-button{text-decoration:none}.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button{background-color:var(--agnostic-gray-extra-light)}.pagination-item-gap{transform:translateY(var(--fluid-6))}.pagination-center{justify-content:center}.pagination-start{justify-content:flex-start}.pagination-end{justify-content:flex-end}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: PaginationComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-pagination',
                      template: "<nav\n    [class]=\"paginationContainerClasses\"\n    [attr.aria-label]=\"ariaLabel\"\n  >\n    <ul [class]=\"paginationClasses\">\n      <li *ngIf=\"isFirstLast\" [class]=\"paginationItemFirstClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"onFirst()\"\n          [disabled]=\"isOnFirst()\"\n          [attr.aria-disabled]=\"isOnFirst()\"\n          aria-label=\"Goto page 1\"\n        >\n          {{ firstLabel() }}\n        </button>\n      </li>\n      <li [class]=\"paginationItemFirstClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"onPrevious()\"\n          aria-label=\"Goto previous page\"\n          [attr.aria-disabled]=\"isOnFirst()\"\n          [disabled]=\"isOnFirst()\"\n        >\n          {{ previousLabel() }}\n        </button>\n      </li>\n      <li\n        *ngFor=\"let page of pages; index as i\"\n        [class]=\"paginationItemClassesForPage(page)\"\n      >\n        <button\n          *ngIf=\"page === current\"\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"handleClick(page)\"\n          aria-current=\"page\"\n          [attr.aria-label]=\"ariaForCurrentPage(page)\"\n        >\n          {{ page }}\n        </button>\n        <span *ngIf=\"page === '...'; else notGap\">{{ page }}</span>\n        <ng-template #notGap>\n          <button\n            *ngIf=\"page !== current\"\n            type=\"button\"\n            [class]=\"paginationButtonClass\"\n            (click)=\"handleClick(page)\"\n            [attr.aria-label]=\"'Goto page ' + page\"\n          >\n            {{ page }}\n          </button>\n        </ng-template>\n      </li>\n      <li [class]=\"paginationItemLastClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          aria-label=\"Goto next page\"\n          [disabled]=\"isOnLast()\"\n          [attr.aria-disabled]=\"isOnLast()\"\n          (click)=\"onNext()\"\n        >\n          {{ nextLabel() }}\n        </button>\n      </li>\n      <li [class]=\"paginationItemLastClasses\">\n        <button\n          type=\"button\"\n          [class]=\"paginationButtonClass\"\n          (click)=\"onLast()\"\n          [disabled]=\"isOnLast()\"\n          [attr.aria-disabled]=\"isOnLast()\"\n          aria-label=\"Goto last page\"\n        >\n          {{ lastLabel() }}\n        </button>\n      </li>\n    </ul>\n  </nav> ",
                      styleUrls: ['./pagination.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { justify: [{
                  type: i0.Input
              }], ariaLabel: [{
                  type: i0.Input
              }], current: [{
                  type: i0.Input
              }], pages: [{
                  type: i0.Input
              }], isBordered: [{
                  type: i0.Input
              }], isFirstLast: [{
                  type: i0.Input
              }], navigationLabels: [{
                  type: i0.Input
              }], onPageChange: [{
                  type: i0.Output
              }] } });

  var ProgressComponent = /** @class */ (function () {
      function ProgressComponent() {
          this.value = 0;
          this.max = 100;
      }
      Object.defineProperty(ProgressComponent.prototype, "classes", {
          get: function () {
              var _a;
              console.log(this);
              var klasses = ['progress', ((_a = this.css) === null || _a === void 0 ? void 0 : _a.length) ? "" + this.css : ''];
              klasses = klasses.filter(function (klass) { return klass.length; });
              return klasses.join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return ProgressComponent;
  }());
  ProgressComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ProgressComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ProgressComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ProgressComponent, selector: "ag-progress", inputs: { value: "value", max: "max", css: "css" }, ngImport: i0__namespace, template: "<progress [ngClass]=\"classes\" [attr.value]=\"value\" [attr.max]=\"max\"></progress>", isInline: true, styles: [".progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:var(--agnostic-progress-height, var(--fluid-10, .625rem));width:100%;border:none;background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-bar{background-color:var(--agnostic-progress-background, var(--agnostic-gray-light, #ededed));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-webkit-progress-value{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-moz-progress-bar{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}.progress[value]::-ms-fill{background-color:var(--agnostic-progress-fill-color, var(--agnostic-primary, #077acb));border-radius:var(--agnostic-progress-radius, var(--fluid-10, .625rem))}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: ProgressComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-progress',
                      template: "<progress [ngClass]=\"classes\" [attr.value]=\"value\" [attr.max]=\"max\"></progress>",
                      styleUrls: ['./progress.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { value: [{
                  type: i0.Input
              }], max: [{
                  type: i0.Input
              }], css: [{
                  type: i0.Input
              }] } });

  var SelectComponent = /** @class */ (function () {
      function SelectComponent() {
          this.selected = '';
          this.defaultOptionLabel = "Please select an option";
          this.isDisabled = false;
          this.isMultiple = false;
          this.multipleSize = 1;
          this.size = '';
          this.changed = new i0.EventEmitter();
      }
      SelectComponent.prototype.showDefaultOption = function () {
          return !this.isMultiple;
      };
      SelectComponent.prototype.changeSelection = function (ev) {
          var option = ev.target;
          this.selected = option.value;
          this.changed.emit(this.selected);
      };
      SelectComponent.prototype.selectClasses = function () {
          return [
              'select',
              this.size ? "select-" + this.size : ''
          ].filter(function (c) { return c; }).join(' ');
      };
      return SelectComponent;
  }());
  SelectComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: SelectComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  SelectComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SelectComponent, selector: "ag-select", inputs: { uniqueId: "uniqueId", labelCopy: "labelCopy", defaultOptionLabel: "defaultOptionLabel", name: "name", options: "options", isDisabled: "isDisabled", isMultiple: "isMultiple", multipleSize: "multipleSize", size: "size" }, outputs: { changed: "changed" }, ngImport: i0__namespace, template: "<label class=\"screenreader-only\" [attr.for]=\"uniqueId\">{{labelCopy}}</label>\n  <select\n    [id]=\"uniqueId\"\n    [name]=\"name\"\n    [ngClass]=\"selectClasses()\"\n    [disabled]=\"isDisabled\"\n    [multiple]=\"isMultiple\"\n    [size]=\"isMultiple && multipleSize\"\n    (change)=\"changeSelection($event)\"\n  >\n    <option *ngIf=\"showDefaultOption()\" [value]=\"null\" disabled selected> {{ defaultOptionLabel }}</option>\n    <option *ngFor=\"let option of options\" [value]=\"option.value\">\n      {{ option.label }}\n    </option>\n  </select>", isInline: true, styles: [".select,.select-base{display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select,.select-skin{padding:var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);-moz-padding-start:calc(var(--fluid-12) - 3px);font-size:var(--fluid-16);font-weight:400;line-height:1.5;color:var(--agnostic-dark);background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right var(--fluid-12) center;background-size:var(--fluid-16) var(--fluid-12);border:1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));border-radius:var(--agnostic-radius);transition:border-color var(--agnostic-timing-fast) ease-in-out,box-shadow var(--agnostic-timing-fast) ease-in-out}.select:focus{border-color:var(--agnostic-focus-ring-color);box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.select-base,.select:disabled{background-color:var(--agnostic-disabled-bg)}.select-base,.select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--agnostic-dark)}@media (prefers-reduced-motion),(update: slow){.select,.select-base,.select:focus{transition:none}}.select-small{padding-top:var(--fluid-4);padding-bottom:var(--fluid-4);padding-left:var(--fluid-8);font-size:var(--fluid-14)}.select-large{padding-top:var(--fluid-8);padding-bottom:var(--fluid-8);padding-left:var(--fluid-16);font-size:var(--fluid-18)}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: SelectComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-select',
                      template: "<label class=\"screenreader-only\" [attr.for]=\"uniqueId\">{{labelCopy}}</label>\n  <select\n    [id]=\"uniqueId\"\n    [name]=\"name\"\n    [ngClass]=\"selectClasses()\"\n    [disabled]=\"isDisabled\"\n    [multiple]=\"isMultiple\"\n    [size]=\"isMultiple && multipleSize\"\n    (change)=\"changeSelection($event)\"\n  >\n    <option *ngIf=\"showDefaultOption()\" [value]=\"null\" disabled selected> {{ defaultOptionLabel }}</option>\n    <option *ngFor=\"let option of options\" [value]=\"option.value\">\n      {{ option.label }}\n    </option>\n  </select>",
                      styleUrls: ['./select.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { uniqueId: [{
                  type: i0.Input
              }], labelCopy: [{
                  type: i0.Input
              }], defaultOptionLabel: [{
                  type: i0.Input
              }], name: [{
                  type: i0.Input
              }], options: [{
                  type: i0.Input
              }], isDisabled: [{
                  type: i0.Input
              }], isMultiple: [{
                  type: i0.Input
              }], multipleSize: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], changed: [{
                  type: i0.Output
              }] } });

  var SpinnerComponent = /** @class */ (function () {
      function SpinnerComponent() {
          this.size = '';
          this.ariaLabel = 'Loading…';
      }
      Object.defineProperty(SpinnerComponent.prototype, "spinnerClasses", {
          get: function () {
              return [
                  'spinner',
                  "spinner-" + this.size,
              ].filter(function (cl) { return cl; }).join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return SpinnerComponent;
  }());
  SpinnerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: SpinnerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  SpinnerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SpinnerComponent, selector: "ag-spinner", inputs: { size: "size", ariaLabel: "ariaLabel" }, ngImport: i0__namespace, template: "<div [class]=\"spinnerClasses\" role=\"status\" attr.aria-live=\"polite\" [attr.aria-busy]=\"true\">\n    <span class=\"screenreader-only\">{{ariaLabel}}</span>\n  </div>", isInline: true, styles: [".spinner{--spinner-color: var(--agnostic-spinner-color, var(--agnostic-dark));display:grid;grid-template:\"content\" 100% / auto;place-items:center;box-sizing:border-box}.spinner:before,.spinner:after{grid-area:content;width:var(--fluid-32);height:var(--fluid-32);content:\"\";display:block;border-radius:50%;border-width:3px;border-style:solid}.spinner-small:before,.spinner-small:after{width:var(--fluid-24);height:var(--fluid-24);border-width:var(--fluid-2)}.spinner-large:before,.spinner-large:after{width:var(--fluid-40);height:var(--fluid-40);border-width:var(--fluid-4)}.spinner-xlarge:before,.spinner-xlarge:after{width:var(--fluid-56);height:var(--fluid-56);border-width:var(--fluid-6)}.spinner:before{opacity:0%;border-color:var(--spinner-color)}.spinner:after{opacity:0%;border-color:transparent var(--spinner-color) transparent transparent;transition:opacity .1s;pointer-events:none;animation:loading-circle 1s ease-in-out infinite}.spinner[aria-busy=true]:before{opacity:12%}.spinner[aria-busy=true]:after{opacity:100%}@keyframes loading-circle{to{transform:rotate(360deg)}}@media (prefers-reduced-motion),(update: slow){.spinner:after{transition-duration:.001ms!important}}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: SpinnerComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-spinner',
                      template: "<div [class]=\"spinnerClasses\" role=\"status\" attr.aria-live=\"polite\" [attr.aria-busy]=\"true\">\n    <span class=\"screenreader-only\">{{ariaLabel}}</span>\n  </div>",
                      styleUrls: ['./spinner.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { size: [{
                  type: i0.Input
              }], ariaLabel: [{
                  type: i0.Input
              }] } });

  var SwitchComponent = /** @class */ (function () {
      function SwitchComponent() {
          this.labelPosition = 'left';
          this.isDisabled = false;
          this.isAction = false;
          this.isBordered = false;
          this.size = '';
          this.selected = new i0.EventEmitter();
      }
      Object.defineProperty(SwitchComponent.prototype, "isChecked", {
          get: function () {
              return this.switchChecked;
          },
          set: function (val) {
              this.switchChecked = val;
          },
          enumerable: false,
          configurable: true
      });
      SwitchComponent.prototype.toggleChecked = function (ev) {
          var el = ev.target;
          if (el.getAttribute('aria-checked') == 'true') {
              el.setAttribute('aria-checked', 'false');
              this.switchChecked = false;
          }
          else {
              el.setAttribute('aria-checked', 'true');
              this.switchChecked = true;
          }
          this.selected.emit(this.switchChecked);
      };
      SwitchComponent.prototype.switchContainer = function () {
          var klasses = [
              'switch-container',
              this.css ? this.css : '',
              this.labelPosition === 'right' ? 'switch-right' : '',
              this.isDisabled ? 'disabled' : '',
          ];
          klasses = klasses.filter(function (klass) { return klass.length; });
          return klasses.join(' ');
      };
      SwitchComponent.prototype.switchSpan = function () {
          var klasses = [
              'switch',
              this.isBordered ? 'switch-border' : '',
              this.isAction ? 'switch-action' : '',
              this.size ? "switch-" + this.size : '',
          ];
          klasses = klasses.filter(function (klass) { return klass.length; });
          return klasses.join(' ');
      };
      return SwitchComponent;
  }());
  SwitchComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: SwitchComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  SwitchComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: SwitchComponent, selector: "ag-switch", inputs: { label: "label", css: "css", labelPosition: "labelPosition", isDisabled: "isDisabled", isAction: "isAction", isBordered: "isBordered", size: "size", isChecked: "isChecked" }, outputs: { selected: "selected" }, ngImport: i0__namespace, template: "<label [ngClass]=\"switchContainer()\">\n    <span *ngIf=\"labelPosition === 'left'\" class=\"switch-label\">{{\n      label\n    }}</span>\n    <input\n      type=\"checkbox\"\n      [checked]=\"isChecked\"\n      class=\"switch-input\"\n      [disabled]=\"isDisabled\"\n      role=\"switch\"\n      (change)=\"toggleChecked($event)\"\n    />\n    <span [ngClass]=\"switchSpan()\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"labelPosition === 'right'\" class=\"switch-label\">{{\n      label\n    }}</span>\n  </label>", isInline: true, styles: [".switch-container{display:block;min-height:2.25rem;width:100%;padding:.5rem;position:relative}.switch-container:hover{cursor:pointer}.switch:before,.switch:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small:before{width:2.25rem;height:1.5rem}.switch-large:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large:before{width:3.25rem;height:2rem}.switch-border:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border:before{border:1px solid var(--agnostic-action)}.switch-right .switch:before{right:initial;left:.25rem}.switch-right .switch:after{right:initial;left:1.4rem}.switch-right .switch-small:after{left:1.125rem}.switch-right .switch-large:after{left:1.65rem}.switch-input:checked+.switch-small:after{right:.425rem}.switch-input:checked+.switch:after{right:.5em}.switch-right .switch-label{position:absolute;right:0;transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right .switch-input:checked+.switch:after{right:initial;left:.5em}.switch-right .switch-input:checked+.switch-small:after{right:initial;left:.425rem}.switch-input{margin:0;opacity:.01%;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input:focus+.switch:before{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color)}.switch-input:checked+.switch:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input:checked+.switch-action:not(.switch-border):before{background:var(--agnostic-action)}.switch-input:checked+.switch-border:after{background:var(--agnostic-primary)}.switch-input:checked+.switch-action.switch-border:after{background:var(--agnostic-action)}.switch-input[disabled]+.switch,.switch-input[disabled]+.switch-label,.switch-container.disabled{color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color))!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;box-shadow:none!important;cursor:not-allowed!important;opacity:80%!important}@media screen and (-ms-high-contrast: active){.switch:after{background-color:windowText}.switch-input[disabled]+.switch-label,.switch-container.disabled{outline:2px solid transparent;outline-offset:-2px}}@media (prefers-reduced-motion),(update: slow){.switch:after,.switch:before{transition-duration:.001ms!important}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: SwitchComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-switch',
                      template: "<label [ngClass]=\"switchContainer()\">\n    <span *ngIf=\"labelPosition === 'left'\" class=\"switch-label\">{{\n      label\n    }}</span>\n    <input\n      type=\"checkbox\"\n      [checked]=\"isChecked\"\n      class=\"switch-input\"\n      [disabled]=\"isDisabled\"\n      role=\"switch\"\n      (change)=\"toggleChecked($event)\"\n    />\n    <span [ngClass]=\"switchSpan()\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"labelPosition === 'right'\" class=\"switch-label\">{{\n      label\n    }}</span>\n  </label>",
                      styleUrls: ['./switch.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { label: [{
                  type: i0.Input
              }], css: [{
                  type: i0.Input
              }], labelPosition: [{
                  type: i0.Input
              }], isDisabled: [{
                  type: i0.Input
              }], isAction: [{
                  type: i0.Input
              }], isBordered: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], isChecked: [{
                  type: i0.Input
              }], selected: [{
                  type: i0.Output
              }] } });

  var TagComponent = /** @class */ (function () {
      function TagComponent() {
          this.type = '';
          this.shape = '';
          this.isUppercase = false;
      }
      Object.defineProperty(TagComponent.prototype, "tagClasses", {
          get: function () {
              return [
                  'tag',
                  this.type ? "tag-" + this.type : '',
                  this.shape ? "tag-" + this.shape : '',
                  this.isUppercase ? 'tag-upper' : '',
              ]
                  .filter(function (c) { return c; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return TagComponent;
  }());
  TagComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TagComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TagComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TagComponent, selector: "ag-tag", inputs: { type: "type", shape: "shape", isUppercase: "isUppercase" }, ngImport: i0__namespace, template: "<span [class]=\"tagClasses\"><ng-content></ng-content></span>", isInline: true, styles: [".tag-base,.tag{display:inline-flex;justify-content:center;white-space:nowrap}.tag-skin,.tag{background-color:var(--agnostic-gray-light);color:var(--agnostic-dark);font-size:var(--fluid-12);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2);padding-inline-start:var(--fluid-8);padding-inline-end:var(--fluid-8)}.tag-info{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.tag-warning{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}.tag-error{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.tag-success{background:var(--agnostic-action-light);color:var(--agnostic-action-from)}.tag-upper{font-size:var(--fluid-10);text-transform:uppercase}.tag-circle{border-radius:50%}.tag-round{border-radius:var(--agnostic-radius)}.tag-pill{border-radius:200px}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TagComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-tag',
                      template: "<span [class]=\"tagClasses\"><ng-content></ng-content></span>",
                      styleUrls: ['./tag.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { type: [{
                  type: i0.Input
              }], shape: [{
                  type: i0.Input
              }], isUppercase: [{
                  type: i0.Input
              }] } });

  var TabPanelComponent = /** @class */ (function () {
      function TabPanelComponent() {
          this._tabButtonTitle = '';
          this.isActive = false;
      }
      Object.defineProperty(TabPanelComponent.prototype, "tabButtonTitle", {
          get: function () {
              return this._tabButtonTitle;
          },
          set: function (t) {
              this._tabButtonTitle = t;
          },
          enumerable: false,
          configurable: true
      });
      return TabPanelComponent;
  }());
  TabPanelComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TabPanelComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TabPanelComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TabPanelComponent, selector: "ag-tab-panel", inputs: { tabButtonTitle: "tabButtonTitle", isActive: "isActive", panelId: "panelId" }, ngImport: i0__namespace, template: "<div [id]=\"panelId\" [hidden]=\"!isActive\" role=\"tabpanel\">\n    <ng-content></ng-content>\n  </div>", isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TabPanelComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-tab-panel',
                      styleUrls: ['./tabs.css'],
                      template: "<div [id]=\"panelId\" [hidden]=\"!isActive\" role=\"tabpanel\">\n    <ng-content></ng-content>\n  </div>",
                  }]
          }], propDecorators: { tabButtonTitle: [{
                  type: i0.Input
              }], isActive: [{
                  type: i0.Input
              }], panelId: [{
                  type: i0.Input
              }] } });

  var TabsComponent = /** @class */ (function () {
      function TabsComponent() {
          this.size = '';
          this.isDisabled = false;
          this.isSkinned = true;
          this.isBorderless = false;
          this.isVerticalOrientation = false;
          this.selectionChanged = new i0.EventEmitter();
      }
      TabsComponent.prototype.ngAfterContentInit = function () {
          var activeTabs = this.tabPanels.filter(function (tab) { return tab.isActive; });
          if (activeTabs.length === 0) {
              this.selectPanel(this.tabPanels.first);
          }
      };
      TabsComponent.prototype.selectPanel = function (tabPanel) {
          this.tabPanels.toArray().forEach(function (tab) {
              tab.isActive = false;
          });
          tabPanel.isActive = true;
          this.selectionChanged.emit(tabPanel);
      };
      TabsComponent.prototype.focusTab = function (index, direction) {
          console.log('focusTab called with index: ', index, ' and direction: ', direction);
          var i = index;
          if (direction === "asc") {
              i += 1;
          }
          else if (direction === "desc") {
              i -= 1;
          }
          var tabPanelsArray = this.tabPanels.toArray();
          if (i < 0) {
              i = tabPanelsArray.length - 1;
          }
          else if (i >= tabPanelsArray.length) {
              i = 0;
          }
          var buttons = this.tabButtonRefs.toArray();
          var nextTabRef = buttons[i];
          var nextTab = nextTabRef ? nextTabRef.nativeElement : null;
          if (nextTab) {
              if (nextTab.disabled && direction) {
                  this.focusTab(i, direction);
              }
              else {
                  nextTab.focus();
              }
          }
      };
      TabsComponent.prototype.handleKeyDown = function (ev, index) {
          switch (ev.key) {
              case "Up":
              case "ArrowUp":
                  if (this.isVerticalOrientation) {
                      this.focusTab(index, "desc");
                  }
                  break;
              case "Down":
              case "ArrowDown":
                  if (this.isVerticalOrientation) {
                      this.focusTab(index, "asc");
                  }
                  break;
              case "Left":
              case "ArrowLeft":
                  if (!this.isVerticalOrientation) {
                      this.focusTab(index, "desc");
                  }
                  break;
              case "Right":
              case "ArrowRight":
                  if (!this.isVerticalOrientation) {
                      this.focusTab(index, "asc");
                  }
                  break;
              case "Home":
              case "ArrowHome":
                  this.focusTab(0);
                  break;
              case "End":
              case "ArrowEnd":
                  this.focusTab(this.tabPanels.toArray().length - 1);
                  break;
              case "Enter":
              case "Space":
                  this.focusTab(index);
                  this.selectPanel(this.tabPanels.toArray()[index]);
                  break;
              default:
                  return;
          }
          ev.preventDefault();
      };
      return TabsComponent;
  }());
  TabsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TabsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TabsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TabsComponent, selector: "ag-tabs", inputs: { tabButtonTemplate: "tabButtonTemplate", size: "size", disabledOptions: "disabledOptions", isDisabled: "isDisabled", isSkinned: "isSkinned", isBorderless: "isBorderless", isVerticalOrientation: "isVerticalOrientation" }, outputs: { selectionChanged: "selectionChanged" }, queries: [{ propertyName: "tabPanels", predicate: TabPanelComponent }], viewQueries: [{ propertyName: "tabButtonRefs", predicate: ["tabButton"], descendants: true }], ngImport: i0__namespace, template: "\n    <div class=\"tabs\" [class.tabs-vertical]=\"isVerticalOrientation === true\">\n      <div\n        [class.tab-list]=\"isSkinned === true\"\n        [class.tab-list-base]=\"isSkinned === false\"\n        [class.tab-borderless]=\"isBorderless === true\"\n        role=\"tablist\"\n        aria-label=\"Tabs\"\n      >\n        <div *ngFor=\"let panel of tabPanels; index as i\"\n          (click)=\"selectPanel(panel)\"\n          (keydown)=\"handleKeyDown($event, i)\"\n        >\n          <ng-template #defaultTabButton>\n            <button\n              #tabButton\n              role=\"tab\"\n              class=\"tab-item tab-button\"\n              [class.active]=\"panel.isActive\"\n              [attr.disabled]=\"\n                isDisabled || disabledOptions?.includes(panel.tabButtonTitle)\n                  ? true\n                  : null\n              \"\n              [class.tab-button-large]=\"size === 'large'\"\n              [class.tab-button-xlarge]=\"size === 'xlarge'\"\n              [attr.aria-controls]=\"panel.panelId\"\n              [attr.aria-selected]=\"panel.isActive\"\n              [attr.tab-index]=\"panel.isActive ? 0 : -1\"\n            >\n              {{ panel.tabButtonTitle }}\n            </button>\n          </ng-template>\n          <ng-container\n            [ngTemplateOutlet]=\"tabButtonTemplate ? tabButtonTemplate : defaultTabButton\"\n            [ngTemplateOutletContext]=\"{ $implicit: panel, index: i }\"\n          >\n          </ng-container>\n        </div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  ", isInline: true, styles: [".tabs{display:flex;flex-direction:column}.tabs-vertical{flex-direction:row}.tab-list,.tab-list-base{display:flex;flex-flow:row wrap;flex:0 0 auto}.tab-list,.tab-skinned{padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tabs-vertical .tab-list,.tabs-vertical .tab-base{flex-direction:column;border:none}.tab-button,.tab-button-base{background-color:transparent;border:0;border-radius:0;box-shadow:none;position:relative;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button,.tab-button-skin{display:block;padding-block-start:var(--agnostic-vertical-pad, .5rem);padding-block-end:var(--agnostic-vertical-pad, .5rem);padding-inline-start:var(--agnostic-side-padding, .75rem);padding-inline-end:var(--agnostic-side-padding, .75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family-body));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,background-color var(--agnostic-timing-fast) ease-in-out,border-color var(--agnostic-timing-fast) ease-in-out}.tab-button:not(:first-of-type),.tab-button-base:not(:first-of-type){margin-inline-start:-1px}.tab-borderless{border:none!important}.tab-button-large{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-xlarge{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, .25rem);border-top-right-radius:var(--agnostic-tabs-radius, .25rem)}.tab-item.tab-button.active{color:var(--agnostic-gray-dark);background-color:#fff;border-color:var(--agnostic-gray-light) var(--agnostic-gray-light) #fff}.tab-item:hover,.tab-button:focus{border-color:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-width) var(--agnostic-gray-light);isolation:isolate;cursor:pointer}.tabs-vertical .tab-button{border:none}.tab-button:disabled{color:var(--agnostic-tabs-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:80%}.tab-button-base:focus,.tab-panel:focus,.tab-button:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.tab-button,.tab-button-base:focus,.tab-button:focus,.tab-panel:focus,.tab-list,.tab-skinned{transition-duration:.001ms!important}}\n"], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TabsComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-tabs',
                      template: "\n    <div class=\"tabs\" [class.tabs-vertical]=\"isVerticalOrientation === true\">\n      <div\n        [class.tab-list]=\"isSkinned === true\"\n        [class.tab-list-base]=\"isSkinned === false\"\n        [class.tab-borderless]=\"isBorderless === true\"\n        role=\"tablist\"\n        aria-label=\"Tabs\"\n      >\n        <div *ngFor=\"let panel of tabPanels; index as i\"\n          (click)=\"selectPanel(panel)\"\n          (keydown)=\"handleKeyDown($event, i)\"\n        >\n          <ng-template #defaultTabButton>\n            <button\n              #tabButton\n              role=\"tab\"\n              class=\"tab-item tab-button\"\n              [class.active]=\"panel.isActive\"\n              [attr.disabled]=\"\n                isDisabled || disabledOptions?.includes(panel.tabButtonTitle)\n                  ? true\n                  : null\n              \"\n              [class.tab-button-large]=\"size === 'large'\"\n              [class.tab-button-xlarge]=\"size === 'xlarge'\"\n              [attr.aria-controls]=\"panel.panelId\"\n              [attr.aria-selected]=\"panel.isActive\"\n              [attr.tab-index]=\"panel.isActive ? 0 : -1\"\n            >\n              {{ panel.tabButtonTitle }}\n            </button>\n          </ng-template>\n          <ng-container\n            [ngTemplateOutlet]=\"tabButtonTemplate ? tabButtonTemplate : defaultTabButton\"\n            [ngTemplateOutletContext]=\"{ $implicit: panel, index: i }\"\n          >\n          </ng-container>\n        </div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  ",
                      styleUrls: ['./tabs.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], propDecorators: { tabPanels: [{
                  type: i0.ContentChildren,
                  args: [TabPanelComponent]
              }], tabButtonTemplate: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], disabledOptions: [{
                  type: i0.Input
              }], isDisabled: [{
                  type: i0.Input
              }], isSkinned: [{
                  type: i0.Input
              }], isBorderless: [{
                  type: i0.Input
              }], isVerticalOrientation: [{
                  type: i0.Input
              }], tabButtonRefs: [{
                  type: i0.ViewChildren,
                  args: ['tabButton']
              }], selectionChanged: [{
                  type: i0.Output
              }] } });

  var TableComponent = /** @class */ (function () {
      function TableComponent() {
          this.captionPosition = 'hidden';
          this.isUppercasedHeaders = false;
          this.isBordered = false;
          this.isBorderless = false;
          this.isStriped = false;
          this.isHoverable = false;
          this.isStacked = false;
          this.tableSize = '';
          this.sortingKey$ = new rxjs.BehaviorSubject('');
          this.direction$ = new rxjs.BehaviorSubject('none');
          this.preserveOriginalOrder = function (a, b) {
              return a;
          };
          this.getColByName = function (row, name) {
              return row[name];
          };
          this.rows$ = new rxjs.BehaviorSubject(this.rows);
      }
      TableComponent.prototype.internalSort = function (rowLeft, rowRight) {
          var _this = this;
          var colLeft = rowLeft[this.sortingKey$.value] === null ||
              rowLeft[this.sortingKey$.value] === undefined
              ? -Infinity
              : rowLeft[this.sortingKey$.value];
          var colRight = rowRight[this.sortingKey$.value] === null ||
              rowRight[this.sortingKey$.value] === undefined
              ? -Infinity
              : rowRight[this.sortingKey$.value];
          var headerWithCustomSortFunction = this.headers.find(function (h) { return h.key === _this.sortingKey$.value && !!h.sortFn; });
          if (headerWithCustomSortFunction && headerWithCustomSortFunction.sortFn) {
              return headerWithCustomSortFunction.sortFn(colLeft, colRight);
          }
          colLeft =
              typeof colLeft === 'string'
                  ? colLeft.toLowerCase().replace(/(^\$|,)/g, '')
                  : colLeft;
          colRight =
              typeof colRight === 'string'
                  ? colRight.toLowerCase().replace(/(^\$|,)/g, '')
                  : colRight;
          colLeft = !Number.isNaN(Number(colLeft)) ? Number(colLeft) : colLeft;
          colRight = !Number.isNaN(Number(colRight)) ? Number(colRight) : colRight;
          if (colLeft > colRight) {
              return 1;
          }
          if (colLeft < colRight) {
              return -1;
          }
          return 0;
      };
      TableComponent.prototype.descendingSort = function (row1, row2) {
          return this.internalSort(row1, row2) * -1;
      };
      TableComponent.prototype.ngOnInit = function () {
          var _this = this;
          rxjs.combineLatest([this.sortingKey$, this.direction$]).subscribe(function (value) {
              var rows = __spreadArray([], __read(_this.rows));
              var _a = __read(value, 2), _ = _a[0], direction = _a[1];
              if (direction === 'ascending') {
                  rows.sort(function (a, b) { return _this.internalSort(a, b); });
              }
              else if (direction === 'descending') {
                  rows.sort(function (a, b) { return _this.descendingSort(a, b); });
              }
              else {
                  rows = __spreadArray([], __read(_this.rows));
              }
              _this.rows$.next(rows);
          });
      };
      TableComponent.prototype.handleSortClicked = function (headerKey) {
          if (this.sortingKey$.value !== headerKey) {
              this.direction$.next('none');
              this.sortingKey$.next(headerKey);
          }
          switch (this.direction$.value) {
              case 'ascending':
                  this.direction$.next('descending');
                  break;
              case 'descending':
                  this.direction$.next('none');
                  break;
              case 'none':
                  this.direction$.next('ascending');
                  break;
              default:
                  console.warn('Table sorting only supports directions: ascending | descending | none');
          }
      };
      TableComponent.prototype.getSortingClassesFor = function (headerKey) {
          if (this.sortingKey$.value === headerKey) {
              return [
                  'icon-sort',
                  this.direction$.value !== 'none'
                      ? "icon-sort-" + this.direction$.value
                      : '',
              ]
                  .filter(function (c) { return c.length; })
                  .join(' ');
          }
          return 'icon-sort';
      };
      TableComponent.prototype.getSortDirectionFor = function (headerKey) {
          if (this.sortingKey$.value !== headerKey) {
              return 'none';
          }
          else {
              return this.direction$.value;
          }
      };
      Object.defineProperty(TableComponent.prototype, "captionClasses", {
          get: function () {
              return [
                  this.captionPosition === 'hidden' ? 'screenreader-only' : '',
                  this.captionPosition !== 'hidden'
                      ? "caption-" + this.captionPosition
                      : '',
              ]
                  .filter(function (cl) { return cl; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(TableComponent.prototype, "tableResponsiveClasses", {
          get: function () {
              return this.responsiveSize
                  ? "table-responsive-" + this.responsiveSize
                  : 'table-responsive';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(TableComponent.prototype, "tableClasses", {
          get: function () {
              return [
                  'table',
                  this.tableSize ? "table-" + this.tableSize : '',
                  this.isUppercasedHeaders ? 'table-caps' : '',
                  this.isBordered ? 'table-bordered' : '',
                  this.isBorderless ? 'table-borderless' : '',
                  this.isStriped ? 'table-striped' : '',
                  this.isHoverable ? 'table-hoverable' : '',
                  this.isStacked ? 'table-stacked' : '',
              ]
                  .filter(function (cl) { return cl; })
                  .join(' ');
          },
          enumerable: false,
          configurable: true
      });
      return TableComponent;
  }());
  TableComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TableComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TableComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: TableComponent, selector: "ag-table", inputs: { rowRenderTemplate: "rowRenderTemplate", headers: "headers", rows: "rows", caption: "caption", captionPosition: "captionPosition", isUppercasedHeaders: "isUppercasedHeaders", isBordered: "isBordered", isBorderless: "isBorderless", isStriped: "isStriped", isHoverable: "isHoverable", isStacked: "isStacked", tableSize: "tableSize", responsiveSize: "responsiveSize" }, ngImport: i0__namespace, template: "<div [class]=\"tableResponsiveClasses\">\n    <table [class]=\"tableClasses\">\n      <caption [class]=\"captionClasses\">\n        {{\n          caption\n        }}\n      </caption>\n      <thead>\n        <tr>\n          <th\n            *ngFor=\"let headerCol of headers\"\n            [attr.aria-sort]=\"getSortDirectionFor(headerCol.key)\"\n            scope=\"col\"\n            [style.width]=\"headerCol.width ? headerCol.width : 'auto'\"\n          >\n            <div\n              class=\"table-header-container\"\n              *ngIf=\"headerCol.sortable; else unsortable\"\n            >\n              <span class=\"table-sort-label\">{{ headerCol.label }}</span>\n              <button\n                type=\"button\"\n                class=\"table-sort\"\n                (click)=\"handleSortClicked(headerCol.key)\"\n              >\n                <span class=\"screenreader-only\">{{ headerCol.label }}</span>\n                <span [class]=\"getSortingClassesFor(headerCol.key)\"></span>\n              </button>\n            </div>\n            <ng-template #unsortable>\n              {{ headerCol.label }}\n            </ng-template>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let row of rows$ | async; index as i\">\n          <td\n            *ngFor=\"\n              let col of row | keyvalue: preserveOriginalOrder;\n              index as cIndex\n            \"\n          >\n            <ng-template #defaultRow>\n              {{ getColByName(row, col.key) }}\n            </ng-template>\n            <ng-container\n              [ngTemplateOutlet]=\"\n                rowRenderTemplate ? rowRenderTemplate : defaultRow\n              \"\n              [ngTemplateOutletContext]=\"{\n                $implicit: getColByName(row, col.key),\n                index: cIndex\n              }\"\n            >\n            </ng-container>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>", isInline: true, styles: [".table{--table-bg: transparent;--table-accent-bg: transparent;--table-striped-color: var(--agnostic-dark);--table-striped-bg: rgb(0 0 0 / 2.5%);--table-active-color: var(--agnostic-dark);--table-active-bg: rgb(0 0 0 / 1.5%);--table-hoverable-color: var(--agnostic-dark);--table-hoverable-bg: var(--agnostic-table-hover-bg, #f1faff);width:100%;margin-bottom:var(--fluid-16);color:var(--agnostic-dark);vertical-align:top;border-color:var(--agnostic-table-border-color, var(--agnostic-gray-light))}.table>:not(caption)>*>*{padding:var(--fluid-8) var(--fluid-8);background-color:var(--table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table thead th{font-weight:600}.table-caps thead th{font-size:var(--fluid-12);text-transform:uppercase}.table tbody td,.table tbody th{font-weight:400}.table>:not(thead):not(caption){border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.caption-top{caption-side:top}.caption-bottom{caption-side:bottom}.caption-bottom,.caption-top{padding-block-start:var(--fluid-12);padding-block-end:var(--fluid-12);text-align:start}.caption-end{text-align:end}.table-small>:not(caption)>*>*{padding:var(--fluid-4) var(--fluid-4)}.table-large>:not(caption)>*>*{padding:var(--fluid-12) var(--fluid-12)}.table-xlarge>:not(caption)>*>*{padding:var(--fluid-18) var(--fluid-18)}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--table-accent-bg: var(--table-striped-bg);color:var(--table-striped-color)}.table-active{--table-accent-bg: var(--table-active-bg);color:var(--table-active-color)}.table-hoverable>tbody>tr:hover>*{--table-accent-bg: var(--table-hoverable-bg);color:var(--table-hoverable-color)}.table-stacked thead{display:none}.table-stacked tr,.table-stacked tbody th,.table-stacked tbody td{display:block;width:100%}.table-stacked tbody th,.table-stacked tbody td{border-bottom-width:0}.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-stacked tr{border-bottom:var(--fluid-2) solid var(--agnostic-gray-light);border-top-width:0}.table-stacked th[data-label]:before,.table-stacked td[data-label]:before{content:attr(data-label);display:block;font-weight:600;margin:-.5rem -1rem 0;padding:var(--fluid-12) var(--fluid-16) var(--fluid-6)}.table-stacked tr th:first-child,.table-stacked tr td:first-child{border-top-width:0}.table-stacked tr:nth-child(odd) td,.table-stacked tr:nth-child(odd) th{background-color:inherit}.table-stacked tr:first-child th:first-child,.table-stacked tr:first-child td:first-child{border-top:var(--fluid-2) solid var(--agnostic-gray-light)}.table-stacked th[data-label],.table-stacked td[data-label]{padding-bottom:var(--fluid-12)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width: 576px){.table-responsive-small{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 768px){.table-responsive-medium{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 992px){.table-responsive-large{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1200px){.table-responsive-xlarge{overflow-x:auto;-webkit-overflow-scrolling:touch}}.table-header-container{display:flex;align-items:center}.table-sort-label{flex:1;padding-inline-end:.5rem;text-align:left}.table-sort{flex:0 1 var(--fluid-48);background-color:transparent;border-color:transparent;border-width:0;cursor:pointer;display:flex;justify-content:center;padding-block-start:var(--fluid-2);padding-block-end:var(--fluid-2)}.icon-sort{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m15 13-5 5-5-5M5 7l5-5 5 5' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\");width:1.125rem;height:1.125rem}.icon-sort-ascending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m9.221 6.365-4.963 5.86c-.586.693-.11 1.775.78 1.775h9.926c.2 0 .394-.059.561-.17.168-.111.3-.27.383-.457a1.102 1.102 0 0 0-.165-1.147l-4.963-5.86a1.04 1.04 0 0 0-.351-.27 1.007 1.007 0 0 0-1.208.27v-.001Z' fill='%23000' /%3E%3C/svg%3E\")}.icon-sort-descending{background-image:url(\"data:image/svg+xml,%3Csvg class='icon-sort' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3E%3Cpath d='m10.778 13.635 4.964-5.86c.586-.693.11-1.775-.78-1.775H5.037a1.01 1.01 0 0 0-.561.17c-.168.111-.3.27-.382.457a1.102 1.102 0 0 0 .164 1.147l4.963 5.86a1.006 1.006 0 0 0 1.559 0v.001Z' fill='%23000' /%3E%3C/svg%3E\")}.table-sort:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style) var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}@media (prefers-reduced-motion),(update: slow){.table-sort:focus{transition-duration:.001ms!important}}\n"], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i1__namespace.AsyncPipe, "keyvalue": i1__namespace.KeyValuePipe }, changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: TableComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ag-table',
                      template: "<div [class]=\"tableResponsiveClasses\">\n    <table [class]=\"tableClasses\">\n      <caption [class]=\"captionClasses\">\n        {{\n          caption\n        }}\n      </caption>\n      <thead>\n        <tr>\n          <th\n            *ngFor=\"let headerCol of headers\"\n            [attr.aria-sort]=\"getSortDirectionFor(headerCol.key)\"\n            scope=\"col\"\n            [style.width]=\"headerCol.width ? headerCol.width : 'auto'\"\n          >\n            <div\n              class=\"table-header-container\"\n              *ngIf=\"headerCol.sortable; else unsortable\"\n            >\n              <span class=\"table-sort-label\">{{ headerCol.label }}</span>\n              <button\n                type=\"button\"\n                class=\"table-sort\"\n                (click)=\"handleSortClicked(headerCol.key)\"\n              >\n                <span class=\"screenreader-only\">{{ headerCol.label }}</span>\n                <span [class]=\"getSortingClassesFor(headerCol.key)\"></span>\n              </button>\n            </div>\n            <ng-template #unsortable>\n              {{ headerCol.label }}\n            </ng-template>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let row of rows$ | async; index as i\">\n          <td\n            *ngFor=\"\n              let col of row | keyvalue: preserveOriginalOrder;\n              index as cIndex\n            \"\n          >\n            <ng-template #defaultRow>\n              {{ getColByName(row, col.key) }}\n            </ng-template>\n            <ng-container\n              [ngTemplateOutlet]=\"\n                rowRenderTemplate ? rowRenderTemplate : defaultRow\n              \"\n              [ngTemplateOutletContext]=\"{\n                $implicit: getColByName(row, col.key),\n                index: cIndex\n              }\"\n            >\n            </ng-container>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>",
                      styleUrls: ['./table.css'],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { rowRenderTemplate: [{
                  type: i0.Input
              }], headers: [{
                  type: i0.Input
              }], rows: [{
                  type: i0.Input
              }], caption: [{
                  type: i0.Input
              }], captionPosition: [{
                  type: i0.Input
              }], isUppercasedHeaders: [{
                  type: i0.Input
              }], isBordered: [{
                  type: i0.Input
              }], isBorderless: [{
                  type: i0.Input
              }], isStriped: [{
                  type: i0.Input
              }], isHoverable: [{
                  type: i0.Input
              }], isStacked: [{
                  type: i0.Input
              }], tableSize: [{
                  type: i0.Input
              }], responsiveSize: [{
                  type: i0.Input
              }] } });

  var AgModule = /** @class */ (function () {
      function AgModule() {
      }
      return AgModule;
  }());
  AgModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AgModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  AgModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AgModule, declarations: [AlertComponent,
          AvatarComponent,
          AvatarGroupComponent,
          BreadcrumbComponent,
          BreadcrumbItemComponent,
          ButtonComponent,
          ButtonGroupComponent,
          CardComponent,
          ChoiceInputComponent,
          CloseComponent,
          DiscloseComponent,
          DividerComponent,
          EmptyStateComponent,
          EmptyStateHeaderComponent,
          EmptyStateBodyComponent,
          EmptyStateFooterComponent,
          HeaderComponent,
          HeaderNavComponent,
          HeaderNavItemComponent,
          InputComponent,
          IconComponent,
          LoaderComponent,
          PaginationComponent,
          ProgressComponent,
          SelectComponent,
          SpinnerComponent,
          SwitchComponent,
          TagComponent,
          TableComponent,
          TabsComponent,
          TabPanelComponent], imports: [i1.CommonModule], exports: [AlertComponent,
          AvatarComponent,
          AvatarGroupComponent,
          BreadcrumbComponent,
          BreadcrumbItemComponent,
          ButtonComponent,
          ButtonGroupComponent,
          CardComponent,
          ChoiceInputComponent,
          CloseComponent,
          DiscloseComponent,
          DividerComponent,
          EmptyStateComponent,
          EmptyStateHeaderComponent,
          EmptyStateBodyComponent,
          EmptyStateFooterComponent,
          HeaderComponent,
          HeaderNavComponent,
          HeaderNavItemComponent,
          InputComponent,
          IconComponent,
          LoaderComponent,
          PaginationComponent,
          ProgressComponent,
          SelectComponent,
          SpinnerComponent,
          SwitchComponent,
          TagComponent,
          TableComponent,
          TabsComponent,
          TabPanelComponent] });
  AgModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AgModule, imports: [[i1.CommonModule]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: AgModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      imports: [i1.CommonModule],
                      declarations: [
                          AlertComponent,
                          AvatarComponent,
                          AvatarGroupComponent,
                          BreadcrumbComponent,
                          BreadcrumbItemComponent,
                          ButtonComponent,
                          ButtonGroupComponent,
                          CardComponent,
                          ChoiceInputComponent,
                          CloseComponent,
                          DiscloseComponent,
                          DividerComponent,
                          EmptyStateComponent,
                          EmptyStateHeaderComponent,
                          EmptyStateBodyComponent,
                          EmptyStateFooterComponent,
                          HeaderComponent,
                          HeaderNavComponent,
                          HeaderNavItemComponent,
                          InputComponent,
                          IconComponent,
                          LoaderComponent,
                          PaginationComponent,
                          ProgressComponent,
                          SelectComponent,
                          SpinnerComponent,
                          SwitchComponent,
                          TagComponent,
                          TableComponent,
                          TabsComponent,
                          TabPanelComponent,
                      ],
                      exports: [
                          AlertComponent,
                          AvatarComponent,
                          AvatarGroupComponent,
                          BreadcrumbComponent,
                          BreadcrumbItemComponent,
                          ButtonComponent,
                          ButtonGroupComponent,
                          CardComponent,
                          ChoiceInputComponent,
                          CloseComponent,
                          DiscloseComponent,
                          DividerComponent,
                          EmptyStateComponent,
                          EmptyStateHeaderComponent,
                          EmptyStateBodyComponent,
                          EmptyStateFooterComponent,
                          HeaderComponent,
                          HeaderNavComponent,
                          HeaderNavItemComponent,
                          InputComponent,
                          IconComponent,
                          LoaderComponent,
                          PaginationComponent,
                          ProgressComponent,
                          SelectComponent,
                          SpinnerComponent,
                          SwitchComponent,
                          TagComponent,
                          TableComponent,
                          TabsComponent,
                          TabPanelComponent,
                      ],
                  }]
          }] });

  exports.AgModule = AgModule;
  exports.AlertComponent = AlertComponent;
  exports.AvatarComponent = AvatarComponent;
  exports.AvatarGroupComponent = AvatarGroupComponent;
  exports.BreadcrumbComponent = BreadcrumbComponent;
  exports.BreadcrumbItemComponent = BreadcrumbItemComponent;
  exports.ButtonComponent = ButtonComponent;
  exports.ButtonGroupComponent = ButtonGroupComponent;
  exports.CardComponent = CardComponent;
  exports.ChoiceInputComponent = ChoiceInputComponent;
  exports.CloseComponent = CloseComponent;
  exports.DiscloseComponent = DiscloseComponent;
  exports.DividerComponent = DividerComponent;
  exports.EmptyStateBodyComponent = EmptyStateBodyComponent;
  exports.EmptyStateComponent = EmptyStateComponent;
  exports.EmptyStateFooterComponent = EmptyStateFooterComponent;
  exports.EmptyStateHeaderComponent = EmptyStateHeaderComponent;
  exports.HeaderComponent = HeaderComponent;
  exports.HeaderNavComponent = HeaderNavComponent;
  exports.HeaderNavItemComponent = HeaderNavItemComponent;
  exports.IconComponent = IconComponent;
  exports.InputComponent = InputComponent;
  exports.LoaderComponent = LoaderComponent;
  exports.PaginationComponent = PaginationComponent;
  exports.ProgressComponent = ProgressComponent;
  exports.SelectComponent = SelectComponent;
  exports.SpinnerComponent = SpinnerComponent;
  exports.SwitchComponent = SwitchComponent;
  exports.TabPanelComponent = TabPanelComponent;
  exports.TableComponent = TableComponent;
  exports.TabsComponent = TabsComponent;
  exports.TagComponent = TagComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=agnostic-angular.umd.js.map
