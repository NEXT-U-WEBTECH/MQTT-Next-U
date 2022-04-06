var mqtt = require('mqtt')

var options = {
    host: 'url_host',
    port: 8883,
    protocol: 'mqtts',
    username: 'nom_utilisateur',
    password: 'mot_passe'
}

//initialize the MQTT client
var client = mqtt.connect(options);

//setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('dev');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('dev', 'Hello-client-nodejs');