import udp, { RemoteInfo } from "node:dgram";

const server = udp.createSocket("udp4");

const PORT = 3000;
const ADDRESS = "localhost"

interface User {
    name:string;
    
}
interface IGroup {
    id: number;
    name: string;
}

let group:IGroup[];

server.bind({port:PORT, address:ADDRESS})

server.on("listening", () => {
    const address = server.address();
    console.log(`Server is listening at address ${address.address}:${address.port} ${address.family} `);
})

server.on("message", (msg:Buffer, info:RemoteInfo) => {
    Buffer.isEncoding("udf8")

    console.log(`ação: 1\ncliente: ${info.address}:${info.port}\n`, );
    const request = JSON.parse(msg.toString());

    console.log(request)

    Buffer.isEncoding("udf8")
    server.send("ok", info.port, info.address)
})    

server.on("error", (err) => {
    console.log('Error: ' + err);
    server.close();
})    





