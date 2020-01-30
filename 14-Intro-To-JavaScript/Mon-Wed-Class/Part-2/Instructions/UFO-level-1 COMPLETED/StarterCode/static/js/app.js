// from data.js
var tableData = data;
//from the empty <tbody> tag in index.html
var tablebody = d3.select("tbody");

//define tablewriting function
function tablewriter(tableData) {
    tablebody.html("");
    //begin looping through objects within array "data"
    for (let i = 0; i < data.length; i++) {
        //hold values of array at index "i" within variable "rowvalues"
        var rowvalues = Object.values(tableData[i])
        //append a row tag <tr> to <tbody>
        var datarow = tablebody.append("tr");
        //begin looping through key values within array at index "i"
        for (let j = 0; j < rowvalues.length; j++) {
            //append a value tag <td> to <tr>
            datarow.append("td").text(rowvalues[j]);
        };
    };
}

//define date filtering function
function filterbydate() {
    //from the "Enter a Date" label in index.html
    var date = d3.select("#datetime").property("value");
    //redefine tableData whenever the filter is activated
    let filtereddata = tableData;
    //check if the input for the "Enter a Date" label from index.html was filled out
    if (date) {
        //redefine filtereddata to only include rows matching the above input
        filtereddata = filtereddata.filter(datarow => datarow.datetime === date);
    }
    //run the tablewriter function according to "filtereddata" rather than "tabledata"
    tablewriter(filtereddata);
}

d3.selectAll("#filter-btn").on("click", filterbydate);

tablewriter(tableData);
