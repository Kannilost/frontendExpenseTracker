import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule,MatSidenavModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}

  public toDashboard(){
      this.router.navigate(['/dashboard']);
   }
  
  public toTransactions(){
      this.router.navigate(['/transactions']);
   }

  public toAnalysisAndReports(){
      this.router.navigate(['/analysis-and-reports']);
   }

  public toBudgetplaner(){
      this.router.navigate(['/budgetplaner']);
   }

  public toCsvImport(){
      this.router.navigate(['/csv-import']);
   }

  public toSettings(){
      this.router.navigate(['/settings']);
   }


  protected readonly title = signal('frontend');
    selectedPage: string = 'Dashboard';

  selectPage(lang: string): void {
    this.selectedPage = lang;
  }
}
