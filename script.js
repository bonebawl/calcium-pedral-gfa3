function randomizer(){
    var num1, num2, num3;
    num1 = Math.ceil(Math.random() *20);
    num2 = Math.ceil(Math.random()*20);
    num3 = Math.ceil(Math.random() *20);
    return{
        number1: num1,
        number2: num2,
        number3: num3
    }
}

function main(){

    var num1, num2, num3,mins;
    const kingdomNames= [
        "Asterin",
        "Bannaventa",
        "Cartennae",
        "Dracorex",
        "Enwor",
        "Fhorion",
        "Gantrick",
        "Hiraeth",
        "Iblistine",
        "Jongvale",
        "Kish",
        "Lagash",
        "Minoan",
        "Neverland",
        "Oxgang",
        "Pilldia",
        "Quanstopia",
        "Ridmond",
        "Survdill",
        "Thydame",
        "Ulyriv"
    ];
    num1 = randomizer().number1;
    num2 = randomizer().number2;
    num3 = randomizer().number3;
    mins = num2*num3;
    edit(num1, num2, num3, mins, kingdomNames[num1-1], highestNum(num1,num2,num3)); 
}


function edit(archerID, tankID, swordID, multiply, kingdom, largestNum){
    document.getElementById("archerDS").innerHTML+=archerID;
    document.getElementById("tankDS").innerHTML+=tankID;
    document.getElementById("swordDS").innerHTML+=swordID;
    document.getElementById("minutes").innerHTML+=+multiply+" minutes to beat or "+Math.floor(multiply / 60)+"hrs and "+multiply%60+"mins";
    document.getElementById("kingdomName").innerHTML+=kingdom +" by the letter "+kingdom.charAt(0);
    document.getElementById("highDPS").innerHTML+= largestNum;
}

function highestNum(num1, num2, num3){
    var largestNum = Math.max(num1, num2, num3);
    var stringShow;
    if(num1==num2&& largestNum == num1){
        stringShow = "A tie! Archer("+num1+") and Tank("+num2+")";
    }else if(num1 == num3 &&largestNum == num1){
        stringShow = "A tie! Archer("+num1+") and Swordsman("+num3+")";
    }else if(num2 == num3 && largestNum == num2){
        stringShow = "A tie! Tank("+num2+") and Swordsman("+num3+")";
    }else if(largestNum == num2){
        stringShow = "Tank("+largestNum+")";
    }else if(largestNum == num3){
        stringShow = "Swordsman("+largestNum+")";
    }else if(largestNum == num1){
        stringShow = "Archer("+largestNum+")";
    }
    return stringShow;
}