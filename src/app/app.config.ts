import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, Search, Bell, Menu, X, ChevronDown, Check, LogOut, Settings, Trash2, Save, AlertCircle, Info, CheckCircle, AlertTriangle, Loader2 } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({
      Search, Bell, Menu, X, ChevronDown, Check, LogOut, Settings, Trash2, Save,
      AlertCircle, Info, CheckCircle, AlertTriangle, Loader2
    }))
  ]
};
