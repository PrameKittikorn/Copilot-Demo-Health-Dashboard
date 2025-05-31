// logic.js

// --- Validation ---
function validateLogin(username, password) {
    const errors = {};
    if (!username) errors.username = 'Required field';
    if (!password) errors.password = 'Required field';
    if (username && password && (username !== 'demo' || password !== 'dome')) {
        errors.general = 'Username or password is incorrect';
    }
    return errors;
}

function validateHealthForm({height, weight, age, gender}) {
    const errors = {};
    if (!(height > 0)) errors.height = 'Height required';
    if (!(weight > 0)) errors.weight = 'Weight required';
    if (!(age > 0)) errors.age = 'Age required';
    if (!(gender === 'male' || gender === 'female')) errors.gender = 'Gender required';
    return errors;
}

// --- Calculations ---
function calculateBMI(weight, height) {
    return weight / ((height / 100) ** 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 23) return 'Normal weight';
    if (bmi < 25) return 'Overweight';
    if (bmi < 30) return 'Obese Class I';
    return 'Obese Class II';
}

function calculateBMR(weight, height, age, gender) {
    // Mifflin-St Jeor Equation (matches test expectation)
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

function calculateTDEE(bmr, activityFactor = 1.2) {
    return bmr * activityFactor;
}

function calculateWaterIntake(weight) {
    return weight * 0.03;
}

function calculateProteinIntake(weight) {
    return weight * 1.5;
}

function calculateBodyFat(bmi, age, gender) {
    // Deurenberg formula (matches test expectation)
    if (gender === 'male') {
        return 1.20 * bmi + 0.23 * age - 16.2;
    } else {
        return 1.20 * bmi + 0.23 * age - 5.4;
    }
}

// --- Exports for testing ---
if (typeof module !== 'undefined') {
    module.exports = {
        validateLogin,
        validateHealthForm,
        calculateBMI,
        getBMICategory,
        calculateBMR,
        calculateTDEE,
        calculateWaterIntake,
        calculateProteinIntake,
        calculateBodyFat
    };
}
