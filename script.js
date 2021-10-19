let numRows = 0;
let numCols = 0;
let colorSelected;
selected();

//Add a row
function addR() {
    // alert("Clicked Add Row");
    numRows++;

    if (numCols <= 0)
    {
      numCols = 1;
    }

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

    if (numRows <= 0)
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
    // alert("Clicked Remove Row")
    if (numRows > 1)
    {
      numRows--;
      document.getElementById("grid").lastChild.remove();
      return;
    }

    numCols = 0;
    numRows = 0;
    document.getElementById("grid").lastChild.remove();
}

//Remove a column
function removeC() {
    // alert("Clicked Remove Col")
    if (numCols > 1)
    {
      numCols--;
      for (j = 0; j < numRows; j++)
      {
        document.body.getElementsByTagName("tr")[j].lastChild.remove();
      }
      return;
    }

    while (numRows > 0)
    {
      document.getElementById("grid").lastChild.remove();
      numRows--;
    }
    numCols = 0;
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    if (colorSelected == "SELECT")
      colorSelected = "";
    console.log(colorSelected);
}

// Clicking a square changes its color
document.getElementById("grid").addEventListener("click", event => {
    if (event.target.nodeName == "TD") {
      event.target.style["background-color"] = colorSelected;
    }
  });

// Fill all uncolored squares with the selected color
function fill(){
    // alert("Clicked Fill All")
    for (let i = 0; i < numRows; i++)
    {
      for (let j = 0; j < numCols; j++)
      {
          document.getElementById("grid").children[i].children[j].style["background-color"] = colorSelected;
      }
    }
}

function clearAll(){
    // alert("Clicked Clear All")
    for (let i = 0; i < numRows; i++)
    {
      for (let j = 0; j < numCols; j++)
      {
        document.getElementById("grid").children[i].children[j].style["background-color"] = "";
      }
    }
}

function fillU(){
    // alert("Clicked Fill All Uncolored")
    let grid = document.getElementById("grid")
    for (let i = 0; i < numRows; i++)
    {
      for (let j = 0; j < numCols; j++)
      {
        if (grid.children[i].children[j].style["background-color"] == "white" ||
            grid.children[i].children[j].style["background-color"] == "")
        {
          grid.children[i].children[j].style["background-color"] = colorSelected;
        }
      }
    }
}
