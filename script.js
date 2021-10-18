let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    // alert("Clicked Add Row");
    numRows++;

    if (numCols == 0)
      numCols = 1;

    let i = document.createElement("tr");
    document.getElementById("grid").appendChild(i);

    let q = document.getElementById("grid").lastChild;
    for (j = 0; j < numCols; j++)
    {
      p = document.createElement("td");
      q.appendChild(p);
    }
}
//Add a column
function addC() {
    // alert("Clicked Add Col");
    numCols++;

    if (numRows == 0)
    {
      numRows = 1;
      let i = document.createElement("tr");
      document.getElementById("grid").appendChild(i);
    }

    for (j = 0; j < numRows; j++)
    {
      let i = document.createElement("td");
      document.body.getElementsByTagName("tr")[j].appendChild(i);
    }
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
