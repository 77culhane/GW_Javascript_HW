// from data.js
var tableData = data;

var tablebody = d3.select("tbody");

function loaddata(data) {
    for (let i = 0; i < data.length; i++) {
        var datarow = tablebody.append("tr");
        var j = Object.values(data[i])
        for (let k = 0; k < j.length; k++) {
            datarow.append("td").text(j[k]);
            }
        ;
    };
}
loaddata(tableData);
