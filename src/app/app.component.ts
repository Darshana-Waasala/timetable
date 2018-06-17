import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  timeslotsDisplay=['8.15-10.15','10.30-12.30','1.15-3.15','3.30-5.30', '5.30-7.30']
  subjectsPerTimeslot = [0,1,2,3]
  tableData = {
    'monday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'tuesday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'wednesday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'thursday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'friday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    }
    ,
    'saturday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    }
  };

  sampleData = [
    {
      "clazId": 1,
      "subject": "CM3310",
      "subjectname": "Artificial_Intelligence",
      "type": "lecture",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Dr.U.Ganegoda",
      "timeslot": [
        {
          "id": "202",
          "day": "Tuesday",
          "timeslot": "10.30-12.30",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 10.3,
      "endTime": 12.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 200,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Wednesday",
        "Thursday",
        "Friday"
      ]
    },
    {
      "clazId": 2,
      "subject": "CM3310T",
      "subjectname": "Artificial_Intelligence",
      "type": "tutorial",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Dr.U.Ganegoda",
      "timeslot": [
        {
          "id": "604",
          "day": "Saturday",
          "timeslot": "1.15-3.15",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 1.15,
      "endTime": 3.15,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 200,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Wednesday",
        "Thursday",
        "Friday"
      ]
    },
    {
      "clazId": 3,
      "subject": "CM3320",
      "subjectname": "Logic_Programming_And_Artificial_Cognitive_Systems",
      "type": "lecture",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Dr.K.S.D.Fernando",
      "timeslot": [
        {
          "id": "606",
          "day": "Saturday",
          "timeslot": "5.30-7.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 5.3,
      "endTime": 7.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 200,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Monday",
        "Wednesday"
      ]
    },
    {
      "clazId": 4,
      "subject": "CM3320L",
      "subjectname": "Logic_Programming_And_Artificial_Cognitive_Systems",
      "type": "lab",
      "subjectType": "compulsory",
      "duration": 1.5,
      "lecturer": "Instructor1",
      "timeslot": [
        {
          "id": "305",
          "day": "Wednesday",
          "timeslot": "3.30-5.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 3.3,
      "endTime": 4.8,
      "classroom": [
        {
          "id": "L4LB8",
          "level": "Level 04",
          "lab": "LB08",
          "capacity": 50
        },
        {
          "id": "L2LB2",
          "level": "Level 02",
          "lab": "LB02",
          "capacity": 50
        },
        {
          "id": "L1LB1",
          "level": "Level 01",
          "lab": "LB01",
          "capacity": 50
        },
        {
          "id": "L3LB5",
          "level": "Level 03",
          "lab": "LB05",
          "capacity": 50
        }
      ],
      "numOfStudents": 200,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Monday",
        "Wednesday"
      ]
    },
    {
      "clazId": 5,
      "subject": "IN3900",
      "subjectname": "Independent_Study",
      "type": "lecture",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Dr.L.Ranathunga",
      "timeslot": [
        {
          "id": "602",
          "day": "Saturday",
          "timeslot": "10.30-12.30",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 10.3,
      "endTime": 12.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Evening",
      "requestedDays": [
        "Monday",
        "Thursday",
        "Friday"
      ]
    },
    {
      "clazId": 6,
      "subject": "IS3400",
      "subjectname": "Management_Information_Systems",
      "type": "lecture",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Ms.G.T.Weerasuriya",
      "timeslot": [
        {
          "id": "106",
          "day": "Monday",
          "timeslot": "5.30-7.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 5.3,
      "endTime": 7.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Monday",
        "Tuesday",
        "Friday"
      ]
    },
    {
      "clazId": 7,
      "subject": "IS3400T",
      "subjectname": "Management_Information_Systems",
      "type": "tutorial",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Ms.G.T.Weerasuriya",
      "timeslot": [
        {
          "id": "206",
          "day": "Tuesday",
          "timeslot": "5.30-7.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 5.3,
      "endTime": 7.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Evening",
      "requestedDays": [
        "Monday",
        "Tuesday",
        "Friday"
      ]
    },
    {
      "clazId": 8,
      "subject": "IS3430",
      "subjectname": "IT_Project_Management",
      "type": "lecture",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Mr.P.M.Karunarathne",
      "timeslot": [
        {
          "id": "301",
          "day": "Wednesday",
          "timeslot": "8.15-10.15",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 8.15,
      "endTime": 10.15,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Monday",
        "Tuesday"
      ]
    },
    {
      "clazId": 9,
      "subject": "IS3430T",
      "subjectname": "IT_Project_Management",
      "type": "tutorial",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Mr.P.M.Karunarathne",
      "timeslot": [
        {
          "id": "104",
          "day": "Monday",
          "timeslot": "1.15-3.15",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 1.15,
      "endTime": 3.15,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Evening",
      "requestedDays": [
        "Monday",
        "Tuesday"
      ]
    },
    {
      "clazId": 10,
      "subject": "IS3010",
      "subjectname": "Communication_Skills",
      "type": "lecture",
      "subjectType": "compulsory",
      "duration": 2,
      "lecturer": "Mrs.W.A.S.N.Wijethunga",
      "timeslot": [
        {
          "id": "102",
          "day": "Monday",
          "timeslot": "10.30-12.30",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 10.3,
      "endTime": 12.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Evening",
      "requestedDays": [
        "Monday",
        "Tuesday"
      ]
    },
    {
      "clazId": 11,
      "subject": "CM3110",
      "subjectname": "Computational_Mathematics",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Mrs.K.A.D.T.Kulawansa",
      "timeslot": [
        {
          "id": "504",
          "day": "Friday",
          "timeslot": "1.15-3.15",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 1.15,
      "endTime": 3.15,
      "classroom": [
        {
          "id": "L1DR01",
          "level": "Level 01",
          "classroom": "DR01",
          "capacity": 50
        }
      ],
      "numOfStudents": 50,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Friday",
        "Tuesday",
        "Wednesday"
      ]
    },
    {
      "clazId": 12,
      "subject": "CM3110T",
      "subjectname": "Computational_Mathematics",
      "type": "tutorial",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Mrs.K.A.D.T.Kulawansa",
      "timeslot": [
        {
          "id": "201",
          "day": "Tuesday",
          "timeslot": "8.15-10.15",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 8.15,
      "endTime": 10.15,
      "classroom": [
        {
          "id": "L3LH01",
          "level": "Level 03",
          "classroom": "LH01",
          "capacity": 70
        }
      ],
      "numOfStudents": 50,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Friday",
        "Tuesday",
        "Wednesday"
      ]
    },
    {
      "clazId": 13,
      "subject": "CM3210",
      "subjectname": "Automata_Theory",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Dr.A.T.P.Silvaa",
      "timeslot": [
        {
          "id": "406",
          "day": "Thursday",
          "timeslot": "5.30-7.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 5.3,
      "endTime": 7.3,
      "classroom": [
        {
          "id": "L0LH01",
          "level": "Basement",
          "classroom": "LH01",
          "capacity": 150
        }
      ],
      "numOfStudents": 100,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Tuesday",
        "Friday"
      ]
    },
    {
      "clazId": 14,
      "subject": "CM3210T",
      "subjectname": "Automata_Theory",
      "type": "tutorial",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Dr.A.T.P.Silvaa",
      "timeslot": [
        {
          "id": "502",
          "day": "Friday",
          "timeslot": "10.30-12.30",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 10.3,
      "endTime": 12.3,
      "classroom": [
        {
          "id": "L2LH02",
          "level": "Level 02",
          "classroom": "LH02",
          "capacity": 150
        }
      ],
      "numOfStudents": 100,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Tuesday",
        "Friday"
      ]
    },
    {
      "clazId": 15,
      "subject": "CM3120",
      "subjectname": "Computational_Statistics",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Mrs.K.A.D.T.Kulawansa",
      "timeslot": [
        {
          "id": "204",
          "day": "Tuesday",
          "timeslot": "1.15-3.15",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 1.15,
      "endTime": 3.15,
      "classroom": [
        {
          "id": "L1DR01",
          "level": "Level 01",
          "classroom": "DR01",
          "capacity": 50
        }
      ],
      "numOfStudents": 50,
      "requestedTimes": "Any",
      "requestedDays": [
        "Friday",
        "Tuesday",
        "Wednesday"
      ]
    },
    {
      "clazId": 16,
      "subject": "CM3120T",
      "subjectname": "Computational_Statistics",
      "type": "tutorial",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Mrs.K.A.D.T.Kulawansa",
      "timeslot": [
        {
          "id": "502",
          "day": "Friday",
          "timeslot": "10.30-12.30",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 10.3,
      "endTime": 12.3,
      "classroom": [
        {
          "id": "L3LH01",
          "level": "Level 03",
          "classroom": "LH01",
          "capacity": 70
        }
      ],
      "numOfStudents": 50,
      "requestedTimes": "Any",
      "requestedDays": [
        "Friday",
        "Tuesday",
        "Wednesday"
      ]
    },
    {
      "clazId": 17,
      "subject": "CM3330",
      "subjectname": "Fundamentals_Of_Bioinfomatics",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Dr.U.Ganegoda",
      "timeslot": [
        {
          "id": "401",
          "day": "Thursday",
          "timeslot": "8.15-11.15",
          "duration": 3,
          "partofday": "Morning"
        }
      ],
      "startTime": 8.15,
      "endTime": 10.15,
      "classroom": [
        {
          "id": "L4LH01",
          "level": "Level 04",
          "classroom": "LH01",
          "capacity": 50
        }
      ],
      "numOfStudents": 30,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Wednesday",
        "Thursday",
        "Friday"
      ]
    },
    {
      "clazId": 18,
      "subject": "IN4500",
      "subjectname": "Mobile_And_wireless_Networks",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Dr.C.R.J.Amalraj",
      "timeslot": [
        {
          "id": "505",
          "day": "Friday",
          "timeslot": "3.30-5.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 3.3,
      "endTime": 5.3,
      "classroom": [
        {
          "id": "L2LH02",
          "level": "Level 02",
          "classroom": "LH02",
          "capacity": 150
        }
      ],
      "numOfStudents": 150,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Tuesday",
        "Friday"
      ]
    },
    {
      "clazId": 19,
      "subject": "IN4500LAB",
      "subjectname": "Mobile_And_wireless_Networks",
      "type": "lab",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Instructor2",
      "timeslot": [
        {
          "id": "201",
          "day": "Tuesday",
          "timeslot": "8.15-10.15",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 8.15,
      "endTime": 10.15,
      "classroom": [
        {
          "id": "L2LB2",
          "level": "Level 02",
          "lab": "LB02",
          "capacity": 50
        },
        {
          "id": "L4LB8",
          "level": "Level 04",
          "lab": "LB08",
          "capacity": 50
        },
        {
          "id": "L2LB3",
          "level": "Level 02",
          "lab": "LB03",
          "capacity": 50
        }
      ],
      "numOfStudents": 150,
      "requestedTimes": "Evening",
      "requestedDays": [
        "Tuesday",
        "Friday"
      ]
    },
    {
      "clazId": 20,
      "subject": "IN4110",
      "subjectname": "Network_Programming",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Mr.W.A.D.S.R.Wijethunga",
      "timeslot": [
        {
          "id": "101",
          "day": "Monday",
          "timeslot": "8.15-10.15",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 8.15,
      "endTime": 10.15,
      "classroom": [
        {
          "id": "L2LH02",
          "level": "Level 02",
          "classroom": "LH02",
          "capacity": 150
        }
      ],
      "numOfStudents": 100,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Saturday"
      ]
    },
    {
      "clazId": 21,
      "subject": "IN4110LAB",
      "subjectname": "Network_Programming",
      "type": "lab",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Instructor2",
      "timeslot": [
        {
          "id": "302",
          "day": "Wednesday",
          "timeslot": "10.30-12.30",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 10.3,
      "endTime": 12.3,
      "classroom": [],
      "numOfStudents": 100,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Monday",
        "Thursday",
        "Friday"
      ]
    },
    {
      "clazId": 22,
      "subject": "IN3400",
      "subjectname": "Advanced_Database_Management_Systems",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Dr.S.Ahangama",
      "timeslot": [
        {
          "id": "302",
          "day": "Wednesday",
          "timeslot": "10.30-12.30",
          "duration": 2,
          "partofday": "Morning"
        }
      ],
      "startTime": 10.3,
      "endTime": 12.3,
      "classroom": [
        {
          "id": "L1DR01",
          "level": "Level 01",
          "classroom": "DR01",
          "capacity": 50
        }
      ],
      "numOfStudents": 50,
      "requestedTimes": "Any",
      "requestedDays": [
        "Wednesday",
        "Thursday"
      ]
    },
    {
      "clazId": 23,
      "subject": "IN3100",
      "subjectname": "Enterprise_Applications_Development",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Mr.A.A.C.De Alwis",
      "timeslot": [
        {
          "id": "405",
          "day": "Thursday",
          "timeslot": "3.30-5.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 3.3,
      "endTime": 5.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Morning",
      "requestedDays": [
        "Saturday"
      ]
    },
    {
      "clazId": 24,
      "subject": "IS4340",
      "subjectname": "Innovation_Management",
      "type": "lecture",
      "subjectType": "elective",
      "duration": 2,
      "lecturer": "Mr.N.N.Pollwaththage",
      "timeslot": [
        {
          "id": "306",
          "day": "Wednesday",
          "timeslot": "5.30-7.30",
          "duration": 2,
          "partofday": "Evening"
        }
      ],
      "startTime": 5.3,
      "endTime": 7.3,
      "classroom": [
        {
          "id": "L4LH02",
          "level": "Level 04",
          "classroom": "LH02",
          "capacity": 250
        }
      ],
      "numOfStudents": 250,
      "requestedTimes": "Evening",
      "requestedDays": [
        "Friday"
      ]
    }
  ];

  ngOnInit() {
    this.arrangeData();
    console.log(this.tableData.friday['5.30-7.30'].length);
  }

  arrangeData() {
    for (let index = 0; index < this.sampleData.length; index++) {
      const element = this.sampleData[index];
      for (let timeslotIndex = 0; timeslotIndex < element.timeslot.length; timeslotIndex++) {
        const elementTimeslot = element.timeslot[timeslotIndex];

        if (elementTimeslot.hasOwnProperty('day') && elementTimeslot.hasOwnProperty('timeslot')) {

          if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.monday["8.15-10.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.monday["10.30-12.30"].push(element.subject);
          }

          else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.monday["1.15-3.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.monday["3.30-5.30"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.monday["5.30-7.30"].push(element.subject);
          }

          if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.tuesday["8.15-10.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.tuesday["10.30-12.30"].push(element.subject);
          }

          else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.tuesday["1.15-3.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.tuesday["3.30-5.30"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.tuesday["5.30-7.30"].push(element.subject);
          }

          if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.wednesday["8.15-10.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.wednesday["10.30-12.30"].push(element.subject);
          }

          else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.wednesday["1.15-3.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.wednesday["3.30-5.30"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.wednesday["5.30-7.30"].push(element.subject);
          }

          if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.thursday["8.15-10.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.thursday["10.30-12.30"].push(element.subject);
          }

          else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.thursday["1.15-3.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.thursday["3.30-5.30"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.thursday["5.30-7.30"].push(element.subject);
          }

          if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.friday["8.15-10.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.friday["10.30-12.30"].push(element.subject);
          }

          else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.friday["1.15-3.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.friday["3.30-5.30"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.friday["5.30-7.30"].push(element.subject);
          }

          if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.saturday["8.15-10.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.saturday["10.30-12.30"].push(element.subject);
          }

          else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.saturday["1.15-3.15"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.saturday["3.30-5.30"].push(element.subject);
          }
          else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.saturday["5.30-7.30"].push(element.subject);
          }
        }

      }

    }
  }
}
