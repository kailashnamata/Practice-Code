/** Coding challenge 1 and 2 */

/** let markWeight, markHeight, johnWeight, johnHeight, markHeigherBMI;
markWeight = 78, markHeight = 1.69;
johnWeight = 92, johnHeight = 1.95;

markHeigherBMI = ((markWeight / markHeight ** 2) > (johnWeight / johnHeight ** 2));
if (markHeigherBMI) {
   console.log("Mark(" + (markWeight / markHeight ** 2) + ") has higher BMI than John(" + (johnWeight / johnHeight ** 2) + ")");
} else {
   console.log("John(" + (johnWeight / johnHeight ** 2) + ") has higher BMI than Mark(" + (markWeight / markHeight ** 2) + ")");
} */






/** Coding challenge 3 */

/** let dolphinsAvgScore = ((107 + 101 + 101) / 3).toFixed(2);
let koalasAvgScore = ((107 + 101 + 101) / 3).toFixed(2);

if (dolphinsAvgScore < 100) {
    console.log("The score of Dolphins team is less than 100 points.");
}

if (koalasAvgScore < 100) {
    console.log("The score of Koalas team is less than 100 points.");
}

if (dolphinsAvgScore && koalasAvgScore >= 100) {

    if (dolphinsAvgScore > koalasAvgScore) {
        console.log(`Winner is Dolphin team with score of ${dolphinsAvgScore} and the score of Koalas is ${koalasAvgScore}`);
    } else if (dolphinsAvgScore < koalasAvgScore) {
        console.log(`Winner is Koalas team with score of ${koalasAvgScore} and the score of Dolphins is ${dolphinsAvgScore}`);
    } else {
        console.log("Match Draw..! Both the teams have secured same score");
    }
} else {
    console.log("Out of minimum creteria for winner as both the teams have secured less than 100 points.")
} */




/** Coding challenge 4 */

let bill = 275, tip, totalBill;
tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
totalBill = bill + tip;
console.log(`Bill: ${bill}
Tip: ${tip}
Total Bill: ${bill + tip}`);