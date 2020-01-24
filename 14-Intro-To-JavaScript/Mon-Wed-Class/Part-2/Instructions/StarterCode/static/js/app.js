// from data.js
var tableData = data;
//define tablewriting function
function tablewriter(tableData) {
    //from the empty <tbody> tag in index.html
    var tablebody = d3.select("tbody");
    //from the "Enter a Date" label in index.html
    var date = d3.select("#datetime").property("value");
    //begin looping through objects within array "data"
    for (let i = 0; i < data.length; i++) {
        //hold values of array at index "i" within variable "rowvalues"
        var rowvalues = Object.values(tableData[i])
        //append a row tag <tr> to <tbody>
        var datarow = tablebody.append("tr");
        //begin looping through key values within array at indexx "i"
        for (let j = 0; j < rowvalues.length; j++) {
            //append a value tag <td> to <tr>
            datarow.append("td").text(rowvalues[j]);
            }
        ;
    };
}
tablewriter(tableData);
