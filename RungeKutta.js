const math = require('mathjs');
const fs = require('fs');

const { equation, highBorder, lowBorder, step } = require('./input');

const pathOutput = './output.txt';
fs.unlinkSync('./output.txt');
const parser = math.parser();

function RungeKutta(equation, lowBorder, highBorder, step) {
    parser.evaluate(equation);
    const resultFunction = parser.get('f');
    let deltaY = 0;
    let k1 = 0;
    let k2 = 0;
    let k3 = 0;
    let k4 = 0;
    let resultY = [highBorder];
    let resultX = [];
    for (let i = lowBorder; i <= highBorder; i += step){
        let prefY = resultY[resultY.length - 1];
        k1 = resultFunction(i, prefY);
        k2 = resultFunction(i + step/2, prefY + (step*k1)/2);
        k3 = resultFunction(i + step/2, prefY + (step*k2)/2);
        k4 = resultFunction(i + step, prefY + step*k3);
        deltaY = (step/6)*(k1 + 2*k2 + 2*k3 + k4);
        resultY.push(prefY + deltaY);
        resultX.push(i);
    }
    resultX.map((x, i) => fs.appendFileSync(pathOutput, `${x}, ${resultY[i]}\n`));
}

RungeKutta(equation, lowBorder, highBorder, step);
