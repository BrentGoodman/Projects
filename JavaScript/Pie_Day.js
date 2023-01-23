let pie = svg.append('g').attr('transform', 'translate(' + window.innerWidth/2 + ',' + window.innerHeight/2 + ')');

let pizzaPie = {
    crust: '#b78b43',
    filling:'#fffa8a',
    toppings: {
        color:'	#ce0000',
        radius: 13,
        spread: 120,
        amount: 12,
    }
};

let keyLimePie = {
    crust: '#b78b43',
    filling:'#9ae769',
};

let pumpkinPie = {
    crust: '#b78b43',
    filling:'#ffa600',
};


function makePi(typeOfPie){
    let pieCrust = pie.append('circle').attr('r', 100).attr('fill', typeOfPie.crust);
    let piFilling = pie.append('circle').attr('r', 90).attr('fill', typeOfPie.filling);
    
    if (typeOfPie.toppings) {
        let toppingInfo = typeOfPie.toppings;
        let counter = toppingInfo.amount;
        while (counter){
            pie.append('circle')
            .attr('r', toppingInfo.radius)
            .attr('cx', pickRandom(toppingInfo.spread) - toppingInfo.spread / 2)
            .attr('cy', pickRandom(toppingInfo.spread) - toppingInfo.spread / 2)
            .attr('fill', toppingInfo.color);
            counter--;
        }
    }
    
    let piSymbol = pie.append('path')
    .attr('d', "M 10.4997 177.038 L 31.1749 178.57 C 52.6159 154.321 61.0392 82.5959 187.388 96.6347 C 182.793 403.956 48.0214 436.372 56.4447 499.419 C 59.5077 535.154 87.8404 557.106 118.47 558.382 C 215.21 555.064 210.871 424.631 240.99 95.8689 L 365.808 95.8689 C 359.171 211.752 341.048 327.636 339.006 441.222 C 340.538 516.776 386.483 557.106 446.977 557.616 C 546.525 560.934 577.92 444.796 577.92 395.277 L 556.479 395.277 C 554.437 436.117 534.783 465.471 492.922 467.258 C 378.825 468.789 441.617 266.631 442.383 97.4004 L 577.92 98.1662 L 577.155 11.6364 C 13.8075 8.90758 85.3123 -2.13662 10.4997 177.038 Z")
    .attr('fill', 'black')
    .attr('transform', 'translate(-60, -60) scale(.2)');
}

makePi(pickRandom([keyLimePie, pizzaPie, pumpkinPie]));
