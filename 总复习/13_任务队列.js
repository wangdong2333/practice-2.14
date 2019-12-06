 console.log('1');
 setTimeout(function() {
    console.log('2');
    // process.nextTick(function() {
    //     console.log('3');
    // })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    }).then(() =>{
        console.log(3);
    })
},1000)

process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    // process.nextTick(function() {
    //     console.log('10');
    // })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    }).then(() =>{
        console.log('10')
    })
},1000)

//1 7 6 8 2 4 3 5 9 11 10 12
//https://www.cnblogs.com/oicb/p/10615592.html
//1 7 6 8 2 4 9 11 3 10 5 12
