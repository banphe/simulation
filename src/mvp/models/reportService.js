export class ReportService {
    static getData() {
        return [
            { x: 'Styczeń', y: 44000 },
            { x: 'Luty', y: 55000 },
            { x: 'Marzec', y: 41000 },
            { x: 'Kwiecień', y: 67000 },
            { x: 'Maj', y: 22000 }
        ];
    }
    
    static getPeriods() {
        return [
            { id: 'D', label: 'Dzień' },
            { id: 'M', label: 'Miesiąc' }
        ];
    }
    
    static getMetrics() {
        return [
            { id: 1, label: 'Przychody' },
            { id: 2, label: 'Godziny' }
        ];
    }
}
