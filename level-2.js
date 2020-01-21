// question 1 

for (i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

// question 2


function firstFunc () {
    console.log("I am a function")
}

var innerFunction = firstFunc();

function outerFunction(x) {
    return x;
}

outerFunction(innerFunction);