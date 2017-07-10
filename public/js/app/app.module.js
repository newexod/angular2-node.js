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
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var autorization_component_1 = require('./autorization/autorization.component');
var main_page_component_1 = require('./main-page/main-page.component');
var about_author_component_1 = require('./about-author/about-author.component');
var app_routing_module_1 = require('./app-routing/app-routing.module');
var map_component_1 = require('./map/map.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                autorization_component_1.AutorizationComponent,
                main_page_component_1.MainPageComponent,
                about_author_component_1.AboutAuthorComponent,
                map_component_1.MapComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUU3Qyw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1Q0FBc0MsdUNBQXVDLENBQUMsQ0FBQTtBQUM5RSxvQ0FBa0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNwRSx1Q0FBcUMsdUNBQXVDLENBQUMsQ0FBQTtBQUU3RSxtQ0FBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSw4QkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQW1CbkQ7SUFBQTtJQUF5QixDQUFDO0lBakIxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4Q0FBcUI7Z0JBQ3JCLHVDQUFpQjtnQkFDakIsNkNBQW9CO2dCQUNwQiw0QkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLHFDQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUUxQixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dG9yaXphdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0b3JpemF0aW9uL2F1dG9yaXphdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0QXV0aG9yQ29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC1hdXRob3IvYWJvdXQtYXV0aG9yLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC9tYXAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEF1dG9yaXphdGlvbkNvbXBvbmVudCxcbiAgICBNYWluUGFnZUNvbXBvbmVudCxcbiAgICBBYm91dEF1dGhvckNvbXBvbmVudCxcbiAgICBNYXBDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcblxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
