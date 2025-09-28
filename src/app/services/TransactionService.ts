import { Transaction } from '../domain/transactions';

export const JULY_TRANSACTIONS: Transaction[] = [
  { id: 1, date: '2025-07-01', type: 'Einnahme', amount: 950.00, category: 'Job', source: 'Werkstudentenjob' },
  { id: 2, date: '2025-07-02', type: 'Einnahme', amount: 255.00, category: 'Kindergeld' },
  { id: 3, date: '2025-07-05', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },
  { id: 4, date: '2025-07-03', type: 'Ausgabe', amount: 750.00, category: 'Miete', description: 'WG-Zimmer' },
  { id: 5, date: '2025-07-04', type: 'Ausgabe', amount: 125.00, category: 'Krankenkasse' },
  { id: 6, date: '2025-07-06', type: 'Ausgabe', amount: 49.00, category: 'ÖPNV', source: 'Deutschlandticket' },
  { id: 7, date: '2025-07-07', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 8, date: '2025-07-08', type: 'Ausgabe', amount: 11.50, category: 'Freizeit', description: 'Kinoabend' },
  { id: 9, date: '2025-07-10', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 10, date: '2025-07-12', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },
  { id: 11, date: '2025-07-12', type: 'Ausgabe', amount: 42.00, category: 'Supermarkt' },
  { id: 12, date: '2025-07-14', type: 'Ausgabe', amount: 9.00, category: 'Freizeit', description: 'Biergarten' },
  { id: 13, date: '2025-07-15', type: 'Ausgabe', amount: 22.00, category: 'Uni', description: 'Bücher & Druck' },
  { id: 14, date: '2025-07-16', type: 'Ausgabe', amount: 6.50, category: 'Freizeit', description: 'Eis & Isar' },
  { id: 15, date: '2025-07-17', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 16, date: '2025-07-19', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },
  { id: 17, date: '2025-07-19', type: 'Ausgabe', amount: 40.00, category: 'Supermarkt' },
  { id: 18, date: '2025-07-20', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 19, date: '2025-07-20', type: 'Ausgabe', amount: 19.99, category: 'Streaming' },
  { id: 20, date: '2025-07-21', type: 'Ausgabe', amount: 18.00, category: 'Freizeit', description: 'Escape Room' },
  { id: 21, date: '2025-07-22', type: 'Ausgabe', amount: 30.00, category: 'Kleidung' },
  { id: 22, date: '2025-07-24', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 23, date: '2025-07-26', type: 'Ausgabe', amount: 41.00, category: 'Supermarkt' },
  { id: 24, date: '2025-07-27', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 25, date: '2025-07-28', type: 'Ausgabe', amount: 12.00, category: 'Freizeit', description: 'Open-Air Konzert' },
  { id: 26, date: '2025-07-31', type: 'Ausgabe', amount: 5.00, category: 'Mensa' }
];

export const AUGUST_TRANSACTIONS: Transaction[] = [
  // Einnahmen
  { id: 101, date: '2025-08-01', type: 'Einnahme', amount: 950.00, category: 'Job', source: 'Werkstudentenjob' },
  { id: 102, date: '2025-08-02', type: 'Einnahme', amount: 255.00, category: 'Kindergeld' },
  { id: 103, date: '2025-08-06', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },
  { id: 104, date: '2025-08-13', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },
  { id: 105, date: '2025-08-20', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },

  // Fixkosten
  { id: 106, date: '2025-08-03', type: 'Ausgabe', amount: 750.00, category: 'Miete', description: 'WG-Zimmer' },
  { id: 107, date: '2025-08-04', type: 'Ausgabe', amount: 125.00, category: 'Krankenkasse' },
  { id: 108, date: '2025-08-05', type: 'Ausgabe', amount: 49.00, category: 'ÖPNV', source: 'Deutschlandticket' },
  { id: 109, date: '2025-08-20', type: 'Ausgabe', amount: 19.99, category: 'Streaming', description: 'Netflix + Spotify' },

  // Mensa (3× pro Woche)
  { id: 110, date: '2025-08-07', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 111, date: '2025-08-10', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 112, date: '2025-08-13', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 113, date: '2025-08-17', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 114, date: '2025-08-20', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 115, date: '2025-08-24', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 116, date: '2025-08-27', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 117, date: '2025-08-31', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },

  // Supermarkt
  { id: 118, date: '2025-08-06', type: 'Ausgabe', amount: 39.00, category: 'Supermarkt' },
  { id: 119, date: '2025-08-13', type: 'Ausgabe', amount: 43.00, category: 'Supermarkt' },
  { id: 120, date: '2025-08-20', type: 'Ausgabe', amount: 41.00, category: 'Supermarkt' },
  { id: 121, date: '2025-08-27', type: 'Ausgabe', amount: 42.00, category: 'Supermarkt' },

  // Freizeit & Sonstiges
  { id: 122, date: '2025-08-08', type: 'Ausgabe', amount: 10.00, category: 'Freizeit', description: 'Kinoabend' },
  { id: 123, date: '2025-08-14', type: 'Ausgabe', amount: 8.50, category: 'Freizeit', description: 'Biergarten' },
  { id: 124, date: '2025-08-18', type: 'Ausgabe', amount: 6.00, category: 'Freizeit', description: 'Eis & Spaziergang' },
  { id: 125, date: '2025-08-21', type: 'Ausgabe', amount: 20.00, category: 'Freizeit', description: 'Boulderhalle' },
  { id: 126, date: '2025-08-28', type: 'Ausgabe', amount: 15.00, category: 'Freizeit', description: 'Open-Air Theater' },
  { id: 127, date: '2025-08-25', type: 'Ausgabe', amount: 25.00, category: 'Sonstiges', description: 'Handyrechnung' }
];

export const SEPTEMBER_TRANSACTIONS: Transaction[] = [
  // Einnahmen
  { id: 201, date: '2025-09-01', type: 'Einnahme', amount: 950.00, category: 'Job', source: 'Werkstudentenjob' },
  { id: 202, date: '2025-09-02', type: 'Einnahme', amount: 255.00, category: 'Kindergeld' },
  { id: 203, date: '2025-09-05', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },
  { id: 204, date: '2025-09-12', type: 'Einnahme', amount: 90.00, category: 'Nebenjob', source: 'Messe-Nachtschicht' },

  // Fixkosten
  { id: 205, date: '2025-09-03', type: 'Ausgabe', amount: 750.00, category: 'Miete', description: 'WG-Zimmer' },
  { id: 206, date: '2025-09-04', type: 'Ausgabe', amount: 125.00, category: 'Krankenkasse' },
  { id: 207, date: '2025-09-06', type: 'Ausgabe', amount: 49.00, category: 'ÖPNV', source: 'Deutschlandticket' },
  { id: 208, date: '2025-09-15', type: 'Ausgabe', amount: 19.99, category: 'Streaming', description: 'Netflix + Spotify' },

  // Mensa (3× pro Woche)
  { id: 209, date: '2025-09-02', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 210, date: '2025-09-05', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 211, date: '2025-09-09', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 212, date: '2025-09-12', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },
  { id: 213, date: '2025-09-16', type: 'Ausgabe', amount: 5.00, category: 'Mensa' },

  // Supermarkt
  { id: 214, date: '2025-09-06', type: 'Ausgabe', amount: 40.00, category: 'Supermarkt' },
  { id: 215, date: '2025-09-13', type: 'Ausgabe', amount: 42.00, category: 'Supermarkt' },

  // Freizeit & Sonstiges
  { id: 216, date: '2025-09-08', type: 'Ausgabe', amount: 10.00, category: 'Freizeit', description: 'Kinoabend' },
  { id: 217, date: '2025-09-10', type: 'Ausgabe', amount: 8.00, category: 'Freizeit', description: 'Biergarten' },
  { id: 218, date: '2025-09-14', type: 'Ausgabe', amount: 6.50, category: 'Freizeit', description: 'Eis & Spaziergang' }
];