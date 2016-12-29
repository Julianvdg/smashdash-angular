import { dashboardModule } from './dashboard/dashboard.module';
import { chartModule } from './chart/chart.module';
import { optionsModule } from './options/options.module'

export const componentsModule = angular
    .module('components',[
            dashboardModule,
            chartModule,
            optionsModule,
    ])
    .name;
