function bmi(weight, height) {
    let index = weight/Math.pow(height, 2);
    return index <= 18.5 ? 'Underweight' : index <= 25 ? 'Normal' : index <= 30 ? 'Overweight' : 'Obese';
}