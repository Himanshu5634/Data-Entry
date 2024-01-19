function submitthis() {

    var money = document.getElementById('money').value
    var name = document.querySelector('#name').value

    if (money && name) {
        var table = document.getElementById('datatable')
        var newrow = table.insertRow(table.rows.length);

        var rd1 = newrow.insertCell(0);
        var rd2 = newrow.insertCell(1);
        var rd3 = newrow.insertCell(2);

        rd1.innerHTML = money;
        rd2.innerHTML = name;
        rd3.innerHTML = '<button onclick="deleterow(this)">delete</button>'

        var money = document.getElementById('money').value = ""
        var name = document.querySelector('#name').value = ""
    }
    else{
        alert("please enter name and money...")
    }
}


document.getElementById('submit').addEventListener('click', submitthis)




function calculateTotal() {
    var table = document.getElementById('datatable');
    var total = 0;

    for (var i = 1; i < table.rows.length; i++) {
        total += parseInt(table.rows[i].cells[0].innerHTML);
    }
    console.log(total)
    document.getElementById('total').innerHTML = total;
}
 



document.getElementById('submit').addEventListener('click',calculateTotal)

function deleterow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    var deletedata = parseInt(row.cells[0].innerHTML);
    var total = parseInt(document.getElementById('total').innerHTML)

    total = total-deletedata

    document.getElementById('total').innerHTML=total

   

}
