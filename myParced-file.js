
const brain = require('brain.js')
let net = new brain.NeuralNetwork();

const ParcedData = require('./eth_History.json')

let DataParced = [];

for (let i = 1; i < ParcedData.length; i++) {


	DataParced.push({
		input: {
			hgh: ParcedData[i].high,
			lw: ParcedData[i].low,
			op: ParcedData[i].open,
			cl: ParcedData[i].close,
			


		},
		output: {
			wA: ParcedData[i].weightedAverage,
			
		}
	})
}
//console.log(DataParced)

net.train(DataParced, {
    iterations: 40000,
    errorThresh: 0.000005,
    log: true,
    learningRate: 0.2,
    momentum: 0.09
    });

 let result = net.run({
    hgh: 0.04690741,
    lw: 0.043449,
    op: 0.04642259,
    cl: 0.04484651,
    //wA : 0.04483061
});


console.log(result)
