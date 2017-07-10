"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var autorization_component_1 = require('../autorization/autorization.component');
var main_page_component_1 = require('../main-page/main-page.component');
var about_author_component_1 = require('../about-author/about-author.component');
var routes = [
    {
        path: '',
        redirectTo: '/main-page',
        pathMatch: 'full'
    },
    {
        path: 'main-page',
        component: main_page_component_1.MainPageComponent
    },
    {
        path: 'autorization',
        component: autorization_component_1.AutorizationComponent
    },
    {
        path: 'about-author',
        component: about_author_component_1.AboutAuthorComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes),
                common_1.CommonModule
            ],
            exports: [router_1.RouterModule],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1yb3V0aW5nL2FwcC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DLHVDQUFzQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQy9FLG9DQUFrQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3JFLHVDQUFxQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBRTlFLElBQU0sTUFBTSxHQUFXO0lBQ3RCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0MsSUFBSSxFQUFFLFdBQVc7UUFDakIsU0FBUyxFQUFFLHVDQUFpQjtLQUM1QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDhDQUFxQjtLQUNqQztJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDZDQUFvQjtLQUNoQztDQUNELENBQUM7QUFVRjtJQUFBO0lBQWdDLENBQUM7SUFSakM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1IscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUMzQixxQkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwLXJvdXRpbmcvYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuaW1wb3J0IHsgQXV0b3JpemF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYXV0b3JpemF0aW9uL2F1dG9yaXphdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpblBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dEF1dGhvckNvbXBvbmVudCB9IGZyb20gJy4uL2Fib3V0LWF1dGhvci9hYm91dC1hdXRob3IuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cdHtcblx0ICBwYXRoOiAnJyxcblx0ICByZWRpcmVjdFRvOiAnL21haW4tcGFnZScsXG5cdCAgcGF0aE1hdGNoOiAnZnVsbCdcblx0fSxcblx0e1xuXHRcdHBhdGg6ICdtYWluLXBhZ2UnLFxuXHRcdGNvbXBvbmVudDogTWFpblBhZ2VDb21wb25lbnRcblx0fSxcblx0e1xuXHQgIHBhdGg6ICdhdXRvcml6YXRpb24nLFxuXHQgIGNvbXBvbmVudDogQXV0b3JpemF0aW9uQ29tcG9uZW50XG5cdH0sXG5cdHtcblx0ICBwYXRoOiAnYWJvdXQtYXV0aG9yJyxcblx0ICBjb21wb25lbnQ6IEFib3V0QXV0aG9yQ29tcG9uZW50XG5cdH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19
