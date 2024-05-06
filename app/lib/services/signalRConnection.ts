import * as signalR from "@microsoft/signalr";
import { ConversationDto } from "../types/Dtos/conversationsDto";
import { datetimeRegex } from "zod";


const URL = process.env.HUB_ADDRESS ?? "http://129.213.181.186/chatHub"; //or whatever your backend port is

class Connector {
    private connection: signalR.HubConnection;
    public events: (onMessageReceived: (message: string, groupName : string, date : string, receiverId : string) => void) => void;
    
    static instance: Connector;
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start().catch(err => console.error(err)).then(() => console.log("connected"));
        this.events = (onMessageReceived) => {
            this.connection.on("ReceiveMessage", (message : string, groupName: string, date: string, receiverId: string) => {
                onMessageReceived(message, groupName, date, receiverId);
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

    public joinGroups = (conversations: ConversationDto[]) => {
        if(this.connection.state === signalR.HubConnectionState.Connected){
            let connectionGroups = [];
            if (conversations != null) {
                for(let conversation of conversations){
                    connectionGroups.push(conversation?.id);
                }
            }
            this.connection.invoke("JoinGroupAsync", connectionGroups).then(x => console.log("joined groups"));
        }
    }

    public handleMessageReceived = (message: string) => {
        console.log(message);
    }

    public SendMessageToGroup = (message: string, groupId: string, senderId: string, receiverId : string, date : string) => {
        if(this.connection.state === signalR.HubConnectionState.Connected)
        {
            this.connection.invoke("SendMessageToGroup", message, groupId, senderId, receiverId, date)
                .then(x => console.log(`sent message to group ${groupId} from ${senderId} to ${receiverId} message: ${message} on ${date}`))
                .catch(err => console.error(err));
        }
    }
}
export default Connector.getInstance;