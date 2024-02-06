console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");



function printOdds(count) {
    
    if (count < 0) {
            console.log("Parameter is negative");
        }
   
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive.`;
    let belowSixteen = `Sorry ${userName}, you're not 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else if (userName == null || age == null) {
        console.log("Parameter/s missing.");
    } else {
        console.log(`Congrats, ${userName}, you can drive.`);
    }
}

checkAge("Bob", 32);
checkAge();
checkAge("Tom");
checkAge("Ben", 15);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in quadrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in quadrant 4`);
    } else if (x == 0 && y != 0) {
        console.log(`(${x}, ${y}) is on the x axis`);
    } else if (x != 0 && y == 0) {
        console.log(`(${x}, ${y}) is on the y axis`);
    } else {
        console.log(`(${x}, ${y}) Origin`)
    }

}

checkQuadrant(-6, 6);
checkQuadrant(6, 6);
checkQuadrant(5, -2);
checkQuadrant(-5, -4);
checkQuadrant(0, -5);
checkQuadrant(5, 0);
checkQuadrant(0, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isTriangle (x, y, z) {
    
    let t;

    if (x == y && y == z) {
        t = "an equilateral";
    } else if (x == y || y == z || x == z) {
        t = "an isosceles";
    } else {
        t = "a scalene";
    }
    
    let it = `Sides ${x}, ${y}, ${z} make ${t} triangle`;
    let nt = `Sides ${x}, ${y}, ${z} do not make a triangle`;

    if (x + y > z && x + z > y && y + z > x) {
        console.log(it);
    } else {
        console.log(nt);
    }
}

isTriangle(1, 2, 2);
isTriangle(1, 1, 2);
isTriangle(0, 5, 3);
isTriangle(2, 4, 5);
isTriangle(3, 3, 3);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage (planLimit, day, usage) {
    let period = 30;
    let avgGoal = planLimit / period;
    let avgCurr = usage / day;
    let dataRemaining = planLimit - usage;
    let daysRemaining = period - day;
    let avgRemaining = dataRemaining / daysRemaining;
    let goOver = (avgCurr * period) - planLimit;
    let tracking;

    console.log(`${day} days used. ${period - day} remaining.`);
    console.log(`You have used ${usage} GBs of your monthly plan limit of ${planLimit} GBs.`)
    console.log(`Maximum average daily usage goal to avoid going over: ${avgGoal} GB/day.`);
        if (avgCurr > avgGoal) {
        tracking = "EXCEEDING";
    } else if (avgCurr == avgGoal) {
        tracking = "meeting";
    } else {
        tracking = "less than";
    }
    console.log(`Your current usage of ${avgCurr} GB/day is ${tracking} your daily goal.`);
    if (avgCurr > avgGoal) {
        console.log (`At this rate, you will exceed your plan limit by ${goOver} GB.`);
        console.log(`To stay below your data limit, you need to use no more than ${avgRemaining} GB per day.`);
    } else console.log(`Good job! You can use as much as ${avgRemaining} GBs per day for the next ${daysRemaining} days without exceeding your limit.`);
    
}

dataUsage(80, 15, 56);
console.log("-------------------");
dataUsage(100, 23, 41);
console.log("-------------------");
dataUsage(75, 25 , 69);
