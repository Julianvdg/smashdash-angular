import angular from 'angular';
import { appRootComponent } from './root.component';
import { componentsModule } from './components/components.module';
angular.module('smashApp', [
    componentsModule,
])

.component('root', appRootComponent)
