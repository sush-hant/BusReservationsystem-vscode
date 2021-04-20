import { Time } from "@angular/common";
import { Seats } from "./seats";

export class BusRouteDetails {
    BusId: number;
    Source: string;
    Destination: string;
    DepartureTime: Time;
    ArrivalTime: Time;
    FarePerSeat: number
    Seats: Seats[]

}
