export class CapacityCalculator {
    calculate(params, period = 'day') {
        const mult = period === 'month' ? 30 : 1;
        
        const cabinHours = params.hoursOpen * params.cabins * mult;
        const workHours = params.therapists * params.massageHours * mult;
        const booksyHours = params.therapists * params.availability * mult;
        
        const salonUsage = cabinHours > 0 ? (workHours / cabinHours) * 100 : 0;
        const therapistUsage = params.availability > 0 ? (params.massageHours / params.availability) * 100 : 0;
        
        return {
            cabinHours,
            workHours,
            booksyHours,
            salonUsage,
            therapistUsage
        };
    }
}
