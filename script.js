
for (let i = 0; i < 4; i++)
{
    let plusButtonDiv = document.getElementById("plus-" + i);
    let minusButtonDiv = document.getElementById("minus-" + i);
    plusButtonDiv.addEventListener("click", function (){
        plusPressed(String("plus-" + i))
    })
    minusButtonDiv.addEventListener("click", function (){
        minusPressed(String("minus-" + i))
    })
}

let clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearPressed);

let orderButton = document.getElementById("order-button")
orderButton.addEventListener("click", placeOrder);
function placeOrder()
{
    let orderStr;
    orderStr = ""
    for (let i = 0; i < 4; i++)
    {
        let amountDiv = document.getElementById("text-" + i);
        let nameDiv = document.getElementById("name-" + i);
        if (parseInt(amountDiv.innerHTML) != 0)
        {
            orderStr += `${amountDiv.innerHTML} ${nameDiv.innerHTML}\n`
        }
    }
    if (orderStr.length == 0)
    {
        alert("Place an order first.")
    }
    else
    {
        alert("Order placed!\n" + orderStr);
    }
}

function clearPressed()
{
    for (let i = 0; i < 4; i++)
    {
        let plusButtonDiv = document.getElementById("plus-" + i);
        let minusButtonDiv = document.getElementById("minus-" + i);
        let priceDiv = document.getElementById("text-" + i);
        let subtotalDiv = document.getElementById("subtotal");
        priceDiv.innerHTML = 0;
        subtotalDiv.innerHTML = 0;
    }
}

function plusPressed(id)
{
    console.log(id)
    let num = parseInt(id.slice(-1))
    let textId = "text-" + num
    let textDiv = document.getElementById(textId);
    textDiv.innerHTML = (parseInt(textDiv.innerHTML) + 1);
    let subtotalDiv = document.getElementById("subtotal");
    let priceDiv = document.getElementById("price-" + num)
    subtotalDiv.innerHTML = parseInt(subtotalDiv.innerHTML) + 
        parseInt(priceDiv.innerHTML);
}

function minusPressed(id)
{
    let num = parseInt(id.slice(-1))
    let textId = "text-" + num
    let textDiv = document.getElementById(textId);
    if (parseInt(textDiv.innerHTML) > 0)
    {
        textDiv.innerHTML = (parseInt(textDiv.innerHTML) - 1);
        let subtotalDiv = document.getElementById("subtotal");
        let priceDiv = document.getElementById("price-" + num)
        subtotalDiv.innerHTML = 
        parseInt(subtotalDiv.innerHTML) -
        parseInt(priceDiv.innerHTML) 
    }

}