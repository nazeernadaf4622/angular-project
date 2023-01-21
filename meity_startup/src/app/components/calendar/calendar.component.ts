import { Component } from '@angular/core';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
export const testData: EventData[] = [
  {
    id: 20,
    title: 'Match',
    desc: 'BL Match',
    startDate: new Date('2022-12-22T21:00:00'),
    endDate: new Date('2022-12-26T23:00:00'),
    createdBy: 'rambabu',
    createdAt: new Date('2022-12-10T10:00:00'),
    type: 2,
    color: 'red',
  },
  {
    id: 12,
    title: 'Meeting',
    desc: 'Meeting test',
    startDate: new Date('2022-12-19T13:43:00'),
    endDate: new Date('2022-12-23T15:00:00'),
    createdBy: 'sham',
    createdAt: new Date('2022-12-10T10:00:00'),
    type: 2,
    color: 'green',
  },
  {
    id: 14,
    title:
      'Exam meggyesalmásfahéjaskalács lkgdhaslgdshal kghdsl kghdslkahsdlidg',
    desc: 'Exam test',
    startDate: new Date('2022-12-22T15:00:00'),
    endDate: new Date('2022-12-22T16:00:00'),
    createdBy: 'nazeer',
    createdAt: new Date('2022-12-10T10:00:00'),
    type: 1,
    color: 'orange',
  },
  {
    id: 104,
    title: 'Training',
    desc: 'Morning running asdfasdfds',
    startDate: new Date('2022-12-22T08:10:00'),
    endDate: new Date('2022-12-22T09:00:00'),
    createdBy: 'vamshi',
    createdAt: new Date('2022-12-10T10:00:00'),
    type: 1,
    color: 'gray',
  },
  {
    id: 18,
    title: 'Coffe',
    desc: 'Coffe with friend',
    startDate: new Date('2022-12-22T07:00:00'),
    endDate: new Date('2022-12-22T07:20:00'),
    createdBy: 'shiva',
    createdAt: new Date('2022-12-10T10:00:00'),
    type: 1,
    color: 'purple',
  },
  {
    id: 20,
    title: 'Football match',
    desc: 'Barcelona - Chelsea',
    startDate: new Date('2022-12-06T20:00:00'),
    endDate: new Date('2022-12-06T22:00:00'),
    createdBy: 'wasim',
    createdAt: new Date('2022-12-05T20:00:00'),
    type: 2,
    color: 'lightgray',
  },
  {
    id: 17,
    title: 'Holiday',
    desc: 'Travel',
    startDate: new Date('2022-12-08T20:00:00'),
    endDate: new Date('2022-12-12T12:00:00'),
    createdBy: 'shubham',
    createdAt: new Date('2022-12-06T20:00:00'),
    type: 2,
    color: '#5bda5b',
  },
  {
    id: 124,
    title: 'Meeting',
    desc: 'Meeting test',
    startDate: new Date('2022-09-28T20:00:00'),
    endDate: new Date('2022-12-05T20:00:00'),
    createdBy: 'nikil',
    createdAt: new Date('2022-05-20T20:00:00'),
    type: 2,
    color: 'cornflowerblue',
  },
  {
    id: 19,
    title: 'Training',
    desc: 'Running',
    startDate: new Date('2022-12-08T20:00:00'),
    endDate: new Date('2022-12-08T22:00:00'),
    createdBy: 'ram',
    createdAt: new Date('2022-12-20T10:00:00'),
    type: 2,
    color: 'orange',
  },
  {
    id: 21,
    title: 'Training',
    desc: 'Football',
    startDate: new Date('2022-12-30T20:00:00'),
    endDate: new Date('2022-12-08T22:00:00'),
    createdBy: 'sham',
    createdAt: new Date('2022-12-20T10:00:00'),
    type: 2,
    color: 'orange',
  },
];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  dataArray = testData;
  constructor() {}
  addEvent(event: any) {
    alert(event);
  }

  dayEvents(event: any) {}

  selectDay(event: any) {}
}
