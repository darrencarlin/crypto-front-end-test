let endpoint = new WebSocket("wss://www.cryptofacilities.com/ws/v1");
let data = '{"event":"subscribe","feed":"trade","product_ids":["FI_XBTUSD_180615"]}'
let table = document.getElementById("table");
let h1 = document.getElementById("title");
let obj;
let trades;

let getTime = (miliseconds) => {

    let milliseconds = Math.floor((miliseconds % 1000) / 100)
    let seconds = Math.floor((miliseconds / 1000) % 60)
    let minutes = Math.floor((miliseconds / (1000 * 60)) % 60)
    let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

endpoint.onopen = function (event) {
    console.log("Connection Established");
    endpoint.send(data);
}

endpoint.onmessage = function (event) {
    obj = JSON.parse(event.data);
    trades = obj.trades;

    if (trades != '') { h1.innerHTML = "Trade Snapshot";
    } else { h1.innerHTML = "List Empty"; }
    
    trades.forEach((element, index) => {

        table.innerHTML += `<tr><td> ${element.price} </td>
                            <td> ${element.qty} </td>
                            <td> ${element.product_id} </td>
                            <td> ${getTime(element.time)} </td></tr>`;
    });

}

endpoint.onclose = function (event) {
    console.log("Connection Closed")
}
