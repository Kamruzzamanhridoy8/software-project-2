function insersion() {
    var in1 = document.getElementById('in1').value;
    var in2 = document.getElementById('in2').value;
    var in3 = document.getElementById('in3').value;
    var in4 = document.getElementById('in4').value;

    var outputTable =document.getElementById('outputTable');
    var row = outputTable.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = in1;
    cell2.innerHTML = in2;
    cell3.innerHTML = in3;
    cell4.innerHTML = in4;
}