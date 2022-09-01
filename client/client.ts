import udp, { RemoteInfo } from "node:dgram";

const client = udp.createSocket("udp4");

client.on('message', (msg: Buffer, info:RemoteInfo) => {

    console.log(msg.toString());
    console.log(info.toString());
});

const data = Buffer.from("Hi world")

client.send(data, 3000, 'localhost', (err) => {
    if(err) {
        console.log(err);
        client.close();
    } else {
        console.log("Data is sent!")
    }
})