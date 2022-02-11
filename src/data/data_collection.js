export function createJSONcolletions() {
    let res = [];

    for (let i = 0; i < 100; i++) {
        res.push({
            number: getRandomNumber()
        })
    }

    return res;
}


function getRandomNumber() {
    return Math.floor(Math.random() * (1000000000 - 1 + 1) + 1)
}

