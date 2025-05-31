// logic.test.js
const assert = require('assert');
const {
  validateLogin,
  validateHealthForm,
  calculateBMI,
  getBMICategory,
  calculateBMR,
  calculateTDEE,
  calculateWaterIntake,
  calculateProteinIntake,
  calculateBodyFat,
  formatNumberWithCommas
} = require('./logic');

function test(title, fn) {
  try {
    fn();
    console.log(`\x1b[32m✔\x1b[0m ${title}`);
  } catch (err) {
    console.error(`\x1b[31m✖\x1b[0m ${title}`);
    console.error(err.message);
    process.exitCode = 1;
  }
}

// validateLogin

test('validateLogin: should pass with correct credentials', () => {
  assert.deepStrictEqual(validateLogin('demo', 'dome'), {});
});
test('validateLogin: should fail with missing username', () => {
  assert.strictEqual(validateLogin('', 'dome').username, 'Required field');
});
test('validateLogin: should fail with missing password', () => {
  assert.strictEqual(validateLogin('demo', '').password, 'Required field');
});
test('validateLogin: should fail with wrong credentials', () => {
  assert.strictEqual(validateLogin('wrong', 'wrong').general, 'Username or password is incorrect');
});

// validateHealthForm

test('validateHealthForm: should pass with all valid fields', () => {
  assert.deepStrictEqual(validateHealthForm({height:170, weight:60, age:25, gender:'male'}), {});
});
test('validateHealthForm: should fail with missing height', () => {
  assert.strictEqual(validateHealthForm({height:0, weight:60, age:25, gender:'male'}).height, 'Height required');
});
test('validateHealthForm: should fail with missing weight', () => {
  assert.strictEqual(validateHealthForm({height:170, weight:0, age:25, gender:'male'}).weight, 'Weight required');
});
test('validateHealthForm: should fail with missing age', () => {
  assert.strictEqual(validateHealthForm({height:170, weight:60, age:0, gender:'male'}).age, 'Age required');
});
test('validateHealthForm: should fail with missing gender', () => {
  assert.strictEqual(validateHealthForm({height:170, weight:60, age:25, gender:''}).gender, 'Gender required');
});

// calculateBMI

test('calculateBMI: should calculate BMI correctly', () => {
  assert.strictEqual(calculateBMI(60, 170).toFixed(2), '20.76');
});

// getBMICategory

test('getBMICategory: should return Underweight', () => {
  assert.strictEqual(getBMICategory(17), 'Underweight');
});
test('getBMICategory: should return Normal weight', () => {
  assert.strictEqual(getBMICategory(21), 'Normal weight');
});
test('getBMICategory: should return Overweight', () => {
  assert.strictEqual(getBMICategory(24), 'Overweight');
});
test('getBMICategory: should return Obese Class I', () => {
  assert.strictEqual(getBMICategory(27), 'Obese Class I');
});
test('getBMICategory: should return Obese Class II', () => {
  assert.strictEqual(getBMICategory(32), 'Obese Class II');
});

// calculateBMR

test('calculateBMR: should calculate BMR for male', () => {
  assert.strictEqual(Math.round(calculateBMR(60, 170, 25, 'male')), 1543);
});
test('calculateBMR: should calculate BMR for female', () => {
  assert.strictEqual(Math.round(calculateBMR(60, 170, 25, 'female')), 1377);
});

// calculateTDEE

test('calculateTDEE: should calculate TDEE with default activity', () => {
  assert.strictEqual(Math.round(calculateTDEE(1600)), 1920);
});
test('calculateTDEE: should calculate TDEE with custom activity', () => {
  assert.strictEqual(Math.round(calculateTDEE(1600, 1.5)), 2400);
});

// calculateWaterIntake

test('calculateWaterIntake: should calculate water intake', () => {
  assert.strictEqual(calculateWaterIntake(60).toFixed(2), '1.80');
});

// calculateProteinIntake

test('calculateProteinIntake: should calculate protein intake', () => {
  assert.strictEqual(calculateProteinIntake(60), 90);
});

// calculateBodyFat

test('calculateBodyFat: should calculate body fat for male', () => {
  const bmi = calculateBMI(60, 170);
  assert.strictEqual(calculateBodyFat(bmi, 25, 'male').toFixed(1), '14.5');
});
test('calculateBodyFat: should calculate body fat for female', () => {
  const bmi = calculateBMI(60, 170);
  assert.strictEqual(calculateBodyFat(bmi, 25, 'female').toFixed(1), '25.3');
});

// formatNumberWithCommas

test('formatNumberWithCommas: should format numbers with commas', () => {
  assert.strictEqual(formatNumberWithCommas('1970'), '1,970');
});
test('formatNumberWithCommas: should format larger numbers with commas', () => {
  assert.strictEqual(formatNumberWithCommas('12345'), '12,345');
});
test('formatNumberWithCommas: should handle numbers less than 1000', () => {
  assert.strictEqual(formatNumberWithCommas('999'), '999');
});
test('formatNumberWithCommas: should handle very large numbers', () => {
  assert.strictEqual(formatNumberWithCommas('1234567'), '1,234,567');
});
