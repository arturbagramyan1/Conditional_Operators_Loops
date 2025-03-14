function patternA() {
    let result = '';
    for (let i = 2; i <= 10; i++) {
        for (let j = 0; j < i; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log('Pattern A:');
    console.log(result);
}

function patternB() {
    let result = '';
    for (let i = 10; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log('Pattern B:');
    console.log(result);
}

function patternC() {
    let result = '';
    for (let i = 10; i >= 1; i--) {
        for (let j = 0; j < 10 - i; j++) {
            result += ' ';
        }
        for (let j = 0; j < i; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log('Pattern C:');
    console.log(result);
}

function patternD() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        for (let j = 0; j < 10 - i; j++) {
            result += ' ';
        }
        for (let j = 0; j < i; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log('Pattern D:');
    console.log(result);
}

patternA();
patternB();
patternC();
patternD();
