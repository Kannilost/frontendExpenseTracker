import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { JULY_TRANSACTIONS, AUGUST_TRANSACTIONS, SEPTEMBER_TRANSACTIONS } from '../../services/TransactionService';
import { Transaction } from '../../domain/transactions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  // Alle Transaktionen zusammenführen
  private allTransactions: Transaction[] = [
    ...JULY_TRANSACTIONS,
    ...AUGUST_TRANSACTIONS,
    ...SEPTEMBER_TRANSACTIONS
  ];

  // Nur Ausgaben extrahieren und nach Datum sortieren
  private expenses = this.allTransactions
    .filter(t => t.type === 'Ausgabe')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Einnahmen extrahieren und nach Datum sortieren
  private income = this.allTransactions
    .filter(t => t.type === 'Einnahme')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Line Chart: Verlauf der Ausgaben
  /*public chartData: ChartData<'line'> = {
    labels: this.expenses.map(t => t.date),
    datasets: [{
      data: this.expenses.map(t => t.amount),
      label: 'Ausgaben (€)',
      borderColor: '#ff4081',
      backgroundColor: 'rgba(255,64,129,0.2)',
      pointBackgroundColor: '#ff4081',
      pointRadius: 4,
      fill: true,
      tension: 0.3
    }]
  };*/

// Hilfsfunktion: Monat aus Datum extrahieren (z. B. '2025-07')
private getMonthKey(date: string): string {
  return date.slice(0, 7); // 'YYYY-MM'
}

// Ausgaben pro Monat summieren
private monthlyExpenses = this.expenses.reduce((acc, t) => {
  const month = this.getMonthKey(t.date);
  acc[month] = (acc[month] || 0) + t.amount;
  return acc;
}, {} as Record<string, number>);

// Einnahmen pro Monat summieren
private monthlyIncome = this.income.reduce((acc, t) => {
  const month = this.getMonthKey(t.date);
  acc[month] = (acc[month] || 0) + t.amount;
  return acc;
}, {} as Record<string, number>);

// Alle Monate sortiert (für konsistente Achse)
private allMonths = Array.from(new Set([
  ...Object.keys(this.monthlyExpenses),
  ...Object.keys(this.monthlyIncome)
])).sort();

// Line Chart: Einnahmen & Ausgaben nebeneinander
public chartData: ChartData<'line'> = {
  labels: this.allMonths,
  datasets: [
    {
      data: this.allMonths.map(m => this.monthlyExpenses[m] || 0),
      label: 'Ausgaben (€)',
      borderColor: '#ff4081',
      backgroundColor: 'rgba(255,64,129,0.2)',
      pointBackgroundColor: '#ff4081',
      pointRadius: 5,
      fill: true,
      tension: 0.3
    },
    {
      data: this.allMonths.map(m => this.monthlyIncome[m] || 0),
      label: 'Einnahmen (€)',
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76,175,80,0.2)',
      pointBackgroundColor: '#4caf50',
      pointRadius: 5,
      fill: true,
      tension: 0.3
    }
  ]
};

  public chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2.5,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      x: { title: { display: true, text: 'Datum' } },
      y: { title: { display: true, text: 'Betrag in €' }, beginAtZero: true }
    }
  };

  // Pie Chart: Ausgaben nach Kategorie
  private categoryTotals = this.expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {} as Record<string, number>);

  public pieChartData: ChartData<'pie'> = {
    labels: Object.keys(this.categoryTotals),
    datasets: [{
      data: Object.values(this.categoryTotals),
      backgroundColor: [
        '#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#9c27b0',
        '#ff9800', '#795548', '#00bcd4', '#e91e63', '#607d8b'
      ],
      borderWidth: 1
    }]
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { position: 'right' },
      tooltip: { enabled: true }
    }
  };
}