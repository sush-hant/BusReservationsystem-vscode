import { Time } from "@angular/common";
import { Seats } from "./seats";

export class BusRouteDetails {
    Source: string;
    Destination: string;
    DepartureTime: Time;
    ArrivalTime: Time;
    Fare: number
    Seats: Seats[]

}
