export type TransactionType = 'Einnahme' | 'Ausgabe';

export interface Transaction {
  id: number;                  // Eindeutige ID
  date: string;                // ISO-Datum, z. B. '2025-07-01'
  type: TransactionType;       // 'Einnahme' oder 'Ausgabe'
  amount: number;              // Betrag in Euro
  category: string;            // z. B. 'Miete', 'Freizeit', 'Supermarkt'
  description?: string;        // Optionaler Freitext
  source?: string;             // z. B. 'Werkstudent', 'Kindergeld', 'Mensa'
}