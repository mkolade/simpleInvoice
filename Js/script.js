var total = 0;

function additem()
{
   
    var item_name = document.getElementById('item_name');
    var item_qty = document.getElementById('item_qty');
    var item_price = document.getElementById('item_price');
    var Alltotal = document.getElementById('Alltotal');

    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    td1.innerHTML = item_name.value;
    td2.innerHTML = item_qty.value;
    td3.innerHTML = item_price.value;
    td4.innerHTML = (parseFloat(item_qty.value) * parseFloat(item_price.value));

    total = total + (parseFloat(item_qty.value) * parseFloat(item_price.value));

    Alltotal.innerHTML = total;

    if
    (item_name.value == "")
    {
       
        alert('Make Sure You Fill Out All The Categories');;

      
        return false
    }else if
    (item_price.value == "")
    {
        alert('Make Sure You Fill Out All The Categories');

      
        return false
    }else if
    (item_qty.value == "")
    {
        alert('Make Sure You Fill Out All The Categories');

      
        
        return false
    }

    

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
   


    var body = document.getElementById('body');
    body.appendChild(tr)

    return false
}