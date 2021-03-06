// Use D3 to select the table body
// d3.select("body").append('table')
//   .attr('grades table', 'table table-striped')
// ;
var table = d3.select("table")
    .append("grades table")
    .attr("class", "table table-condensed table-striped"), thead = table.append("thead"), tbody = table.append("tbody");
// Use D3 to select the table

// Use D3 to set the table class to `table table-striped`

// Loop through an array of grades and build the entire table body from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];
