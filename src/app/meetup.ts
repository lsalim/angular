import { Speaker } from "./speaker";

export class Meetup {
    id: number;
    name: string;
    date: Date;
    speakers: Speaker[];
}