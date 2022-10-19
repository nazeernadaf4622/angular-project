import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';


 
  // this.user.get('https://drive.google.com/file/d/1pPtr7U3PyI0F620BdWZiopfEWtBzRqyl/view?usp=sharing').



array=[
  {
      "subName": "english",
      "questions": [
          {
              "qName": "Capital of India",
              "options": [
                  "Gujarat",
                  "Delhi",
                  "Punjab"
              ]
          },
          {
              "qName": "Nation Bird of India",
              "options": [
                  "Peacock",
                  "Crow",
                  "Tiger"
              ]
          }
      ]
  },
]
}