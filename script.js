//problem 1
function footToMile(foot) {
    var mile = foot / 0.000189393939;
    return mile;
}
var inputNum = footToMile(20);
console.log(Math.round(inputNum));





//problem 2
function woodCalculator(chair, table, bed){
    var total = 0;
    var forChair = chair * 1;
    var forTable = table * 3;
    var forBed = bed * 5;
    total = forChair + forTable + forBed;

    return total;
}
var makeFurniture = woodCalculator(12, 3, 12);
console.log(makeFurniture + ' ' + 'foot');





//problem 3
function brickCalculator(buildingFloat) {
    var bricks = 0;
    if (buildingFloat <= 10) {
        bricks = buildingFloat * 15000;
    }
    else if (buildingFloat <= 20) {
        var firstTenFloat = 10 * 15000;
        var remaining = buildingFloat - 10;
        var secondTenFloat = remaining * 12000;
        bricks = firstTenFloat + secondTenFloat;
    }
    else {
        var firstTenFloat = 10 * 15000;
        var secondTenFloat = 10 * 12000;
        var remaining = buildingFloat - 20;
        var thirdfloat = remaining * 10000;
        bricks = firstTenFloat + secondTenFloat + thirdfloat;
    }
    return bricks;
}
var floatNum = brickCalculator(33);
console.log(floatNum);





//problem 4
function tinyFriend(friendsName) {
    var sortestWord = [];
    for(var i = 0; i < friendsName.length; i++){
       if(friendsName[i].length > sortestWord){
           sortestWord = friendsName[i].length;
       }
    }
    return sortestWord;
}
var friendsName = ['Hasnat', 'Mehedi', 'Noman', 'Mahir', 'Shakib', 'Emon'];
var isTyni = tinyFriend(friendsName);
console.log(isTyni);