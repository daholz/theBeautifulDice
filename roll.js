function rollD4() {
    var d4NumberOfSides = 4;
    var randomD4Number = Math.random();
    var randomD4Side = Math.round( (d4NumberOfSides - 1) * randomD4Number) + 1;

    var displayD4 = new Array();
    displayD4[1] = "./Imgs/d4-1-red.png";
    displayD4[2] = "./Imgs/d4-2-red.png";
    displayD4[3] = "./Imgs/d4-3-red.png";
    displayD4[4] = "./Imgs/d4-4-red.png";

    var d4Image = displayD4[randomD4Side];
    document.d4Result.src = d4Image;
}

function rollD6() {
    var d6NumberOfSides = 6;
    var randomD6Number = Math.random();
    var randomD6Side = Math.round( (d6NumberOfSides - 1) * randomD6Number) + 1;

    var displayD6 = new Array();
    displayD6[1] = "./Imgs/d6-1-red.png";
    displayD6[2] = "./Imgs/d6-2-red.png";
    displayD6[3] = "./Imgs/d6-3-red.png";
    displayD6[4] = "./Imgs/d6-4-red.png";
    displayD6[5] = "./Imgs/d6-5-red.png";
    displayD6[6] = "./Imgs/d6-6-red.png";

    var d6Image = displayD6[randomD6Side];
    document.d6Result.src = d6Image;
}

function rollD8() {
    var d8NumberOfSides = 8;
    var randomD8Number = Math.random();
    var randomD8Side = Math.round( (d8NumberOfSides - 1) * randomD8Number) + 1;

    var displayD8 = new Array();
    displayD8[1] = "./Imgs/d8-1-red.png";
    displayD8[2] = "./Imgs/d8-2-red.png";
    displayD8[3] = "./Imgs/d8-3-red.png";
    displayD8[4] = "./Imgs/d8-4-red.png";
    displayD8[5] = "./Imgs/d8-5-red.png";
    displayD8[6] = "./Imgs/d8-6-red.png";
    displayD8[7] = "./Imgs/d8-7-red.png";
    displayD8[8] = "./Imgs/d8-8-red.png";

    var d8Image = displayD8[randomD8Side];
    document.d8Result.src = d8Image;
}

function rollD10() {
    var d10NumberOfSides = 10;
    var randomD10Number = Math.random();
    var randomD10Side = Math.round( (d10NumberOfSides - 1) * randomD10Number) + 1;

    var displayD10 = new Array();
    displayD10[1] = "./Imgs/d10-1-red.png";
    displayD10[2] = "./Imgs/d10-2-red.png";
    displayD10[3] = "./Imgs/d10-3-red.png";
    displayD10[4] = "./Imgs/d10-4-red.png";
    displayD10[5] = "./Imgs/d10-5-red.png";
    displayD10[6] = "./Imgs/d10-6-red.png";
    displayD10[7] = "./Imgs/d10-7-red.png";
    displayD10[8] = "./Imgs/d10-8-red.png";
    displayD10[9] = "./Imgs/d10-9-red.png";
    displayD10[10] = "./Imgs/d10-10-red.png";

    var d10Image = displayD10[randomD10Side];
    document.d10Result.src = d10Image;
}

function rollD12() {
    var d12NumberOfSides = 12;
    var randomD12Number = Math.random();
    var randomD12Side = Math.round( (d12NumberOfSides - 1) * randomD12Number) + 1;

    var displayD12 = new Array();
    displayD12[1] = "./Imgs/d12-1-red.png";
    displayD12[2] = "./Imgs/d12-2-red.png";
    displayD12[3] = "./Imgs/d12-3-red.png";
    displayD12[4] = "./Imgs/d12-4-red.png";
    displayD12[5] = "./Imgs/d12-5-red.png";
    displayD12[6] = "./Imgs/d12-6-red.png";
    displayD12[7] = "./Imgs/d12-7-red.png";
    displayD12[8] = "./Imgs/d12-8-red.png";
    displayD12[9] = "./Imgs/d12-9-red.png";
    displayD12[10] = "./Imgs/d12-10-red.png";
    displayD12[11] = "./Imgs/d12-11-red.png";
    displayD12[12] = "./Imgs/d12-12-red.png";

    var d12Image = displayD12[randomD12Side];
    document.d12Result.src = d12Image;
}

function rollD20() {
    var d20NumberOfSides = 20;
    var randomD20Number = Math.random();
    var randomD20Side = Math.round( (d20NumberOfSides - 1) * randomD20Number) + 1;

    var displayD20 = new Array();
    displayD20[1] = "./Imgs/d20-1-red.png";
    displayD20[2] = "./Imgs/d20-2-red.png";
    displayD20[3] = "./Imgs/d20-3-red.png";
    displayD20[4] = "./Imgs/d20-4-red.png";
    displayD20[5] = "./Imgs/d20-5-red.png";
    displayD20[6] = "./Imgs/d20-6-red.png";
    displayD20[7] = "./Imgs/d20-7-red.png";
    displayD20[8] = "./Imgs/d20-8-red.png";
    displayD20[9] = "./Imgs/d20-9-red.png";
    displayD20[10] = "./Imgs/d20-10-red.png";
    displayD20[11] = "./Imgs/d20-11-red.png";
    displayD20[12] = "./Imgs/d20-12-red.png";
    displayD20[13] = "./Imgs/d20-13-red.png";
    displayD20[14] = "./Imgs/d20-14-red.png";
    displayD20[15] = "./Imgs/d20-15-red.png";
    displayD20[16] = "./Imgs/d20-16-red.png";
    displayD20[17] = "./Imgs/d20-17-red.png";
    displayD20[18] = "./Imgs/d20-18-red.png";
    displayD20[19] = "./Imgs/d20-19-red.png";
    displayD20[20] = "./Imgs/d20-20-red.png";

    var d20Image = displayD20[randomD20Side];
    document.d20Result.src = d20Image;
}

function castDie() {
    var audio = new Audio("./Audio/rollingDieSoundEffect.wav");
    audio.play();
    audio.loop = false;
}