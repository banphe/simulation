export class Calculator {
    calculate(pr, period) {
        const mult = period === 'm' ? 30 : 1;
        
        const cabinHours = pr.hoursOpen * pr.cabins * mult;
        const workHours = pr.employees * pr.serviceHours * mult;
        const salonUsage = cabinHours > 0 ? (workHours / cabinHours) * 100 : 0;
        
        const revenue = workHours * pr.hourlyRevenue;
        const employeeCost = workHours * pr.employeeRate;
        const margin = revenue - employeeCost;
        const costs = period === 'm' ? pr.monthlyCosts : pr.monthlyCosts / 30;
        const income = margin - costs;
        
        const marginPerHour = pr.hourlyRevenue - pr.employeeRate;
        const breakEvenHours = marginPerHour > 0 ? pr.monthlyCosts / marginPerHour : 0;
        const breakEven = period === 'm' ? breakEvenHours : breakEvenHours / 30;
        
        return { salonUsage, revenue, income, breakEven };
    }
}
