import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBidAuction } from "./types/carauction/carauction/tx";
import { MsgCancelBid } from "./types/carauction/carauction/tx";
import { MsgCreateAuction } from "./types/carauction/carauction/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/carauction.carauction.MsgBidAuction", MsgBidAuction],
    ["/carauction.carauction.MsgCancelBid", MsgCancelBid],
    ["/carauction.carauction.MsgCreateAuction", MsgCreateAuction],
    
];

export { msgTypes }