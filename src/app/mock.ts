import { Meetup } from "./meetup";
import { Speaker } from "./speaker";

export const MEETUPS: Meetup[] = [
    { id: 1, name: 'Meetup DRB #1', date: new Date('2018-03-31'), speakers: [{ name: 'Jean Luc Semedo', subject: 'Geolocalisation in Python'},  { name: 'Mohamed Gueye Camou', subject: 'React & Redux'},  { name: 'Mohamed Diedhiou', subject: 'Built Microservices'} ] },
    { id: 2, name: 'Meetup DRB #2', date: new Date('2018-07-14'), speakers: [{ name: 'Ady Ngom', subject: 'TypeScript'},  { name: 'Baba Sankharé', subject: 'Docker Orchestration'},  { name: 'Hassane Moustapha', subject: 'Docker in Depth'} ] },
    { id: 3, name: 'Meetup DRB #3', date: new Date('2018-05-10'), speakers: [{ name: 'Ady Ngom', subject: 'Swagger'},  { name: 'Mohamed Gueye Camou', subject: 'Observables'},  { name: 'Leyla Salim', subject: 'Angular Pipes'} ] },
];


