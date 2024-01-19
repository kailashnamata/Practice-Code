const game = {
    team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ], [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let iteration = 0;
let array = [];

function getTeam1Players1() {
    let data = game.players[0];
    document.getElementById("playerList1").innerText = "TEAM 1: " + game.team1;

    let ul = document.getElementById("playerList1");
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }

}

function getTeam1Players2() {
    let data = game.players[1];
    document.getElementById("playerList2").innerText = "TEAM 2: " + game.team2;

    let ul = document.getElementById("playerList2");
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }

}

function changeColor() {
    let index = Math.round(Math.random() * 10);
    let colorArray = ['div1', 'div2', 'div21', 'div22', 'div23', 'div24', 'div25', 'div26', 'div27', 'div28', 'div29']
    document.getElementById("divHai").setAttribute('class', colorArray[index]);

    document.getElementById("colorid").innerText = "Color ID: " + index;

}

function randomNumber() {
    let lab = document.getElementById("setNumber");
    lab.textContent = Math.round(Math.random() * 10);
}

function count() {
    document.getElementById("count").setAttribute('value', ++iteration);
}

function resetCount() {
    document.getElementById("count").setAttribute('value', iteration = 0);
    document.getElementById("count").innerHTML = "";
}

function onAddArray() {
    let arrayValue = document.getElementById("array").value;
    array.push(arrayValue)
    document.getElementById("arrayValue").innerText = array;
    document.getElementById("array").value = "";
}

function onSort() {
    document.getElementById("sortedArray").innerText = array.sort(function (a, b) { return a - b });
}

function onFilter() {
    document.getElementById("filteredArray").innerText = array.filter(function (array) { return array > 5 });
}