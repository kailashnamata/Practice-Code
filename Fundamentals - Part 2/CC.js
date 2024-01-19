/** Coding Challenge 1 */

/** let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(3, 34, 27);
function calcAverage(score1, score2, score3) {
    return ((score1 + score2 + score3) / 3).toFixed();
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins wins (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas wins (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No team wins. As minimum criteria is not fulfilled..!`;
    }
}

console.log(checkWinner(avgDolphins, avgKoalas)); */




/** Coding Challenge 2 and 4 */

/** let bills = [125, 555, 44], totalBills = [];
let tips = calcTip(bills);
function calcTip(bills) {
    let calculatedTip = [];
    for (let i = 0; i < 3; i++) {
        calculatedTip[i] = (bills[i] >= 50 && bills[i] <= 300) ? bills[i] * 0.15 : bills[i] * 0.2;
        totalBills[i] = bills[i] + calculatedTip[i];
    }
    return calculatedTip;
}

for (let i = 0; i < 3; i++) {
    console.log(`Bill: ${i + 1}
Bill Amount: ${bills[i]}
Tip Amount: ${tips[i]}
Total Amount: ${totalBills[i]}`);
} */







/** Coding Challenge 3 */

let Mark = {
    "Name": "Mark Miller",
    "Weight": 78,
    "Height": 1.69,
    "BMI": calcBMI(78, 1.69)
}, John = {
    "Name": "John Smith",
    "Weight": 92,
    "Height": 1.95,
    "BMI": calcBMI(92, 1.95)
};


function calcBMI(weight, height) {
    return weight / (height * height);
}

if (John.BMI > Mark.BMI) {
    console.log(`John's BMI ${(John.BMI).toFixed(2)} is higher than Mark's ${(Mark.BMI).toFixed(2)}!`)
} else {
    console.log(`Mark's BMI ${(Mark.BMI).toFixed(2)} is higher than John's ${(John.BMI).toFixed(2)}!`)
}