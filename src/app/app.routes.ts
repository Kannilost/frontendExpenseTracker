import { Routes } from '@angular/router';
import { Dashboard } from './models/dashboard/dashboard';
import { Homepage } from './models/homepage/homepage';
import { Transactions } from './models/transactions/transactions';
import { AnalysisAndReports } from './models/analysis-and-reports/analysis-and-reports';
import { Budgetplaner } from './models/budgetplaner/budgetplaner';
import { CsvImport } from './models/csv-import/csv-import';
import { Settings } from './models/settings/settings';

export const routes: Routes = [
    {path: 'analysis-and-reports', component: AnalysisAndReports },
    {path: 'bugdetplaner', component: Budgetplaner },
    {path: 'csv-import', component: CsvImport },
    {path: 'settings', component: Settings },
    {path: 'transactions', component: Transactions },
    {path: 'dashboard', component: Dashboard },
    {path: '**', component: Homepage },
    {path: '', component: Homepage },
];
