import udp, { RemoteInfo } from "node:dgram";

const server = udp.createSocket("udp4");

const PORT = 3000;
const ADDRESS = "localhost"

server.on("connect", () => {
    console.log("CLIENTE CONNECTED");
})

server.on("message", (msg:Buffer, info:RemoteInfo) => {
    console.log(`ação: 1\ncliente: ${info.address}:${info.port}\n`, );
    console.log(msg.toString())
})

server.on("error", (err) => {
    console.log('Error: ' + err);
    server.close();
})


server.on("listening", () => {
    const address = server.address();
    console.log(`Server is listening at address ${address.address}:${address.port} ${address.family} `);
})

server.bind({port:PORT, address:ADDRESS})




