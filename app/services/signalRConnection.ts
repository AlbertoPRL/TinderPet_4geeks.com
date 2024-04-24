import * as signalR from "@microsoft/signalr";

const URL = process.env.HUB_ADDRESS ?? "http://129.213.181.186/chatHub"; //or whatever your backend port is

class Connector {
    private connection: signalR.HubConnection;
    public events: (onMessageReceived: (message: string) => void) => void;
    static instance: Connector;
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start().catch(err => console.error(err)).then(() => console.log("connected"));
        this.events = (onMessageReceived) => {
            this.connection.on("ReceiveMessage", (message) => {
                onMessageReceived(message);
            });
        };
    }
    public newMessage = (message: string) => {
        this.connection.send("SendMessage", message).then(x => console.log("sent"))
    }
    public static getInstance(): Connector {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }
}
export default Connector.getInstance;