import { Addschedule } from "./add-schedule";

export class Addbuss {
    BusId:number = 258;
    Source:string;
    Destination:string;
    DepartureTime:string;
    ArrivalTime:string;
    FarePerSeat:number;
    ScheduleTable: Addschedule[];

}