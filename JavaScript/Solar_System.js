let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

let solarSystem = svg.append('g');
let sun = solarSystem.append('circle').attr('fill', '#F3700D').attr('r', 20).attr('cx', centerX).attr('cy', centerY);
let planets = [
    {offset: 57, rads: 3, color: '#868686'},
    {offset: 108, rads: 7.5, color: '#D5C9AA'},
    {offset: 149, rads: 7.9, color: '#374253'},
    {offset: 228, rads: 4.2, color: '#8E543E'},
    {offset: 780, rads: 88.8, color: '#C0A476'},
    {offset: 1437, rads: 74.9, color: '#B29D71'},
    {offset: 2871, rads: 31.7, color: '#B2D6EB'},
    {offset: 4530, rads: 30.779, color: '#3C5BE9'},
];

for (const planet of planets) {

    const rotation = 'rotate(' + pickRandom(360) + ',' + centerX + ',' + centerY + ')';
    const offset = 20 + Math.pow(planet.offset, 0.52);

    const body = solarSystem.append('circle')
        .attr('fill', planet.color)
        .attr('cx', centerX)
        .attr('cy', centerY - offset)
        .attr('r', Math.log(planet.rads))
        .attr('transform', rotation);

    const trail = solarSystem.append('path')
        .attr('stroke', planet.color)
        .attr('stroke-width', 1)
        .attr('fill', 'none')
        .attr('d',
            d3.arc()
            .innerRadius(offset)
            .outerRadius(offset)
            .startAngle(0)
            .endAngle((0.5 + Math.random()) * Math.PI))
        .attr('transform', rotation + 'translate(' + centerX + ',' + centerY + ')');
}
