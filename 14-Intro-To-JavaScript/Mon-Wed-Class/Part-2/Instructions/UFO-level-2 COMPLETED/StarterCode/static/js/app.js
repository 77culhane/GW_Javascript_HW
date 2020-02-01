// from data.js
var tableData = data;
//from the empty <tbody> tag in index.html
var tablebody = d3.select("tbody");

//define tablewriting function
function tablewriter(tableData) {
    //clear output before writing table
    tablebody.html("");
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
        };
    };
}

// Create object to hold multiple filter inputs
var filters = {};
function acceptinput() {
  //create var to accept user input
  var userinput = d3.select(this).select("input").property("value");
  //create var to locate the id tag for the field in which user typed therir input
  var idtag = d3.select(this).select("input").attr("id");
  //check if any of the inputs from index.html were filled out
  //if so, then add that input to the filters object at the corresponding "idtag" index
  if (userinput) {
    filters[idtag] = userinput;
  }
  //if no input was received for a particular "idtag", ignore that idtag when filtering
  else {
    delete filters[idtag];
  }
  // initiate filter function
  filterbyinput();

}

function filterbyinput() {
  //redefine tableData whenever the filter is activated
  let filtereddata = tableData;
  //redefine filtereddata to only include rows matching the above input for each value in "filters"
  Object.entries(filters).forEach(([key, value]) => {
    filtereddata = filtereddata.filter(row => row[key] === value);
  });
  //rewrite the table using the rows in filtereddata
  tablewriter(filtereddata);
}

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", acceptinput);

tablewriter(tableData);
