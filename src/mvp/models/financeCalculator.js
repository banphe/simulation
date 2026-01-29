export class FinanceCalculator {
    calculate(params) {
        const workHours = params.therapists * params.massageHours;
        const revenue = workHours * params.hourlyRevenue;
        const therapistCost = workHours * params.therapistRate;
        const margin = revenue - therapistCost;
        const costs = params.monthlyCosts / 30;
        const income = margin - costs;
        const therapistIncome = params.therapistRate * params.massageHours;
        
        const marginPerHour = params.hourlyRevenue - params.therapistRate;
        const breakEven = marginPerHour > 0 ? params.monthlyCosts / (marginPerHour * 30) : 0;
        
        return {
            revenue,
            therapistCost,
            margin,
            income,
            therapistIncome,
            breakEven
        };
    }
}
