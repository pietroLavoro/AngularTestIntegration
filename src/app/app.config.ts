import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [
     provideRouter(routes),
     provideAnimations(),
    provideClientHydration(),
    importProvidersFrom(PanelMenuModule, ChartModule, ButtonModule, MenuModule, BrowserAnimationsModule)]
};