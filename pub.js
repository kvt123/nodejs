var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect",function(){
    console.log("successfully");
     client.publish("kvt_123","{\"adc0\":\"1\",\"adc1\":\"1\",\"LED1\":\"0\",\"LED2\":\"1\"}")
    //client.publish("kvt_123","hello")
    console.log("{\"adc0\":\"1\",\"adc1\":\"1\",\"LED1\":\"0\",\"LED2\":\"1\"}")
    client.end()
    // setInterval(function(){
    //     client.publish("kvt_123","hello")
    // }),10000;
})