# crypto-front-end-test
test app for front-end position ( I am not applying for this position, I just wanted to give it a try) 


See

# CryptoFacilities Front-end Tech Test

We'd like you to build a very small 'App' that takes a stream of historical trades and displays them to the user,
data will be provided from a public websocket endpoint and the UI should update in real-time as new state is
received from the websocket and a message should be displayed to users if the list is empty (e.g. state yet received from endpoint).

The websocket endpoint is `wss://www.cryptofacilities.com/ws/v1` and once connected you need to send the messasge
`{"event":"subscribe","feed":"trade","product_ids":["FI_XBTUSD_180615"]}` to retrieve the list of trades. This will return
an initial `trade_snapshot` object which contains an array of trade objects, please display the `product_id`, `qty` and
`price` props of these objects to the user, sorted by the `time` prop in descending order.

The purpose of this test is to gauge how you would approach a real-world problem that could be given to you. Take as
long or a little time as you require to deliver something you are happy with. Using Google to tackle problems you have not
faced before (e.g. connecting to a websocket api) is perfectly acceptable.

Please take time to think about how this would be approached as any front-end JavaScript framework can be used to
complete this task (or none at all) as well as any helper libraries you wish to use however we would ask that you use SCSS
as a style preprocessor make sure you package the app as you would for a production ready build be that using Webpack,
Gulp or any other build tool.

Good Luck!


*Ben*
