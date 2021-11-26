// JavaScript Document
function autoTable()
{
    var tableHead = '<table class="outTable"';
    var tableBody = "";
    for (var i = 1; i <= 15; i++)
        {
            tableBody += "<tr>";
            for (var c = 1; c <= 15; c++)
                {
                    tableBody += "<td>";
                    tableBody += i + "," + c;
                    tableBody += "</td>";
                }
            tableBody += "</tr>";
        }
    var tableEnd = "</table>"
    document.getElementById("tableOut").innerHTML = tableHead + tableBody + tableEnd;
}
window.addEventListener("load", autoTable);
function tableCreator()
{
    var numOfRows = document.getElementById("row").value;
    var numOfColumns = document.getElementById("column").value;
    var bgColor = document.getElementById("bgColor").value;
    var tableHead = '<table class="outTable" style="background-color: ' + bgColor + '80"';
    var tableBody = '';
    for (var i = 1; i <= numOfRows; i++)
        {
            tableBody += "<tr>";
            for (var c = 1; c <= numOfColumns; c++)
                {
                    tableBody += "<td>";
                    tableBody += i + "," + c;
                    tableBody += "</td>";
                }
            tableBody += "</tr>";
        }
    var tableEnd = "</table>"
    if (numOfRows == "" && numOfColumns == "")
        {
            window.alert("Please Enter Rows and Columns!");
        }
    else if (numOfRows == "")
        {
            window.alert("Please Enter Rows!");
        }
    else if (numOfColumns == "")
        {
            window.alert("Please Enter Columns!");
        }
    else
    {
        document.getElementById("tableOut").innerHTML = tableHead + tableBody + tableEnd;
    }
    
}
document.getElementById("tablebtn").addEventListener("click", tableCreator, false);