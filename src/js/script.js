let endpoint = new WebSocket("wss://www.cryptofacilities.com/ws/v1");
let data = '{"event":"subscribe","feed":"trade","product_ids":["FI_XBTUSD_180615"]}'
let obj;
let trades;
let table = document.getElementById("table");

let date = new Date();

let getTime = (seconds) => {
    date.getSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

endpoint.onopen = function (event) {
    console.log("Connection Established");
    endpoint.send(data);
}

endpoint.onmessage = function (event) {
    obj = JSON.parse(event.data);
    trades = obj.trades;
    console.log(trades)

    trades.forEach((element, index) => {

        table.innerHTML +=`<tr><td> ${element.price} </td>
                            <td> ${element.qty} </td>
                            <td> ${element.product_id} </td>
                            <td> ${getTime(element.time)} </td></tr>`;

    });
    
 

}

endpoint.onclose = function (event) {
    console.log("Connection Closed")
}