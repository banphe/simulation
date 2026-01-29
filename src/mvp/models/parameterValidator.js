export class ParameterValidator {
    validate(params, changedId, newValue) {
        const v = {...params};
        v[changedId] = newValue;
        
        const capacity = v.hoursOpen * v.cabins;
        const workHours = v.therapists * v.massageHours;
        
        if (workHours > capacity) return false;
        if (v.massageHours > v.hoursOpen) return false;
        if (v.massageHours > v.availability) return false;
        if (v.availability > v.hoursOpen) return false;
        
        return true;
    }
}
