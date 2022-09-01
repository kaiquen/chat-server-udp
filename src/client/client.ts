import udp, { RemoteInfo } from "node:dgram";

class Client {
    client = udp.createSocket("udp4");
    PORT = 3000;
    ADDRESS = "localhost";
    
    start() {
        this.client.connect(this.PORT, this.ADDRESS, () => {  
            this.client.on('message', (msg: Buffer, info:RemoteInfo) => {
                console.log(msg.toString());
                console.log(info.port);
            });
            Buffer.isEncoding("utf8");
            
            const group = {id: 1, name:"group 1"}
            console.log(JSON.stringify(group))
            this.client.send(JSON.stringify(group), (err) => {
                if(err) {
                    console.log(err);
                }
    
                console.log("send")
            });
        })
    }
    
    sendMessage(msg: string) {
       
    }
}

const cliente = new Client();
cliente.start()
cliente.sendMessage("");


    // console.log("while")
    // client.on('message', (msg: Buffer, info:RemoteInfo) => {
    //     console.log(msg.toString());
    //     console.log(info.toString());
    // });
    
    // const data = Buffer.from("Hi world")
    
    // client.send(data,PORT,ADDRESS, () => {
    //     console.log("send")
    // });




