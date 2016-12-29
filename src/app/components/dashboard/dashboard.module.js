import angular from 'angular';
import {dashboardComponent} from './dashboard.component';
export const dashboardModule = angular
    .module('dashboard', [])
    .component('dashboard', dashboardComponent)
    .name;
