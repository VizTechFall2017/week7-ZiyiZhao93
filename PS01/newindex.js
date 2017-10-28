var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

console.log(width, height);

var clicked = true;

var marginLeft = 50;
var marginTop = 50;

var nestedData = [];

var svg = d3.select('#svg1')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var svg2 = d3.select('#svg2')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var scaleX = d3.scaleBand().rangeRound([0, width-2*marginLeft]).padding(0.5);
var scaleY = d3.scaleLinear().range([height-2*marginTop, 0]);

d3.csv('./subway.csv', function(dataIn) {

    nestedData = d3.nest()
        .key(function(d){return d.gender})
        .entries(dataIn);

    var loadData = nestedData.filter(function(d){return d.key == 'total'})[0].values;

    svg.append("g")
        .attr('class','xaxis')
        .attr('transform','translate(0,'+ (height-2*marginTop) +')')
        .call(d3.axisBottom(scaleX));

    svg.append("g")
        .attr('class', 'yaxis')
        .call(d3.axisLeft(scaleY));

    drawPoints(loadData);

});

function drawPoints(pointData){


    scaleX.domain(pointData.map(function(d){return d.things;}));
    scaleY.domain([0, d3.max(pointData.map(function(d){return +d.number}))]);


    d3.selectAll('.xaxis')
        .call(d3.axisBottom(scaleX));

    d3.selectAll('.yaxis')
        .call(d3.axisLeft(scaleY));


    var rects = svg.selectAll('.bars')
        .data(pointData, function(d){return d.things;});

    console.log(pointData);

    rects
        .transition()
        .duration(200)
        .attr('x',function(d){
            return scaleX(d.things);
        })
        .attr('y',function(d){
            return scaleY(+d.number);
        })
        .attr('width',function(d){
            return scaleX.bandwidth();
        })
        .attr('height',function(d){
            return height-2*marginTop - scaleY(+d.number);
        });

    rects
        .enter()
        .append('rect')
        .attr('class','bars')
        .attr('fill', "mediumslateblue")
        .attr('id',function (d) {return d.things})
        .attr('x',function(d){
            return scaleX(d.things);
        })
        .attr('y',function(d){
            return scaleY(+d.number);
        })
        .attr('width',function(d){
            return scaleX.bandwidth();
        })
        .attr('height',function(d){
            return height-2*marginTop - scaleY(+d.number);
        })

}

function updateData(selectedGender){
    return nestedData.filter(function(d){return d.key == 'female'})[0].values;
}


function sliderMoved(value){

    newData = updateData(value);
    drawPoints(newData);

}

svg2.append('rect')
    .attr('x',0)
    .attr('y', 200)
    .attr('width', 710)
    .attr('height', 20)
    .attr('fill', '#F9F0D8');

svg2.append('rect')
    .attr('x',20)
    .attr('y',10)
    .attr('width',100)
    .attr('height',110)
    .attr('fill','lightskyblue')
    .attr('stroke','gray')
    .attr('stroke-width',1);

svg2.append('rect')
    .attr('x',130)
    .attr('y',10)
    .attr('width',100)
    .attr('height',110)
    .attr('fill','lightskyblue')
    .attr('stroke-width',1);

svg2.append('rect')
    .attr('x',250)
    .attr('y',10)
    .attr('width',100)
    .attr('height',110)
    .attr('fill','lightskyblue')
    .attr('stroke-width',1);

svg2.append('rect')
    .attr('x',360)
    .attr('y',10)
    .attr('width',100)
    .attr('height',110)
    .attr('fill','lightskyblue')
    .attr('stroke-width',1);

svg2.append('rect')
    .attr('x',480)
    .attr('y',10)
    .attr('width',100)
    .attr('height',110)
    .attr('fill','lightskyblue')
    .attr('stroke-width',1);

svg2.append('rect')
    .attr('x',590)
    .attr('y',10)
    .attr('width',100)
    .attr('height',110)
    .attr('fill','lightskyblue')
    .attr('stroke-width',1);






















