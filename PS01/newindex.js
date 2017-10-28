var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

console.log(width, height);


var marginLeft = 100;
var marginTop = 100;

var nestedData = [];

var svg = d3.select('#svg1')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var svg2 = d3.select('#svg2')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var scaleX = d3.scaleBand().rangeRound([0, width-2*marginLeft]).padding(0.1);
var scaleY = d3.scaleLinear().range([height-2*marginTop, 0]);
var scaleY2 = d3.scaleLinear().range([height-2*marginTop, 0]);


d3.csv('./subway.csv', function(dataIn) {

    console.log(dataIn);


});