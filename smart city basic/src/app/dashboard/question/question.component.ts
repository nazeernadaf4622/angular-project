import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StmtModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Question, Quiz, QuizConfig, Option } from '../models';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizes: any;
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string = "JavaScript";
  configs: any;
  p: any;
  data: any
  options: any = [];
  option: any = [];
  finalArray: any[] = [];
  LinalArray: any[] = [];
  arrayUniqueByKey: any[] = [];
  item: any;
  radio_counter=0;
  flag =false;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,
    'duration': 2700,
    'pageSize': 1,
    'requiredAll': false,
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none',
    currentPage: 1
  };


  timer: any = null;
  startTime!: Date;
  endTime!: Date;
  ellapsedTime = '00:00';
  duration = '';
  statements: any;

  constructor(private qsnService: QuestionService, private router: Router, private http: HttpClient) {
    this.configs = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 20,
    };
    setTimeout(function () {
      alert("TimeOut");
      router.navigate(['']);
    }, 2700000);//wait 2 seconds
  }

  ngOnInit() {

    // localStorage.clear();
    this.item = localStorage.getItem('item')
    this.create_exam();
    
    //    this.getAllQuestions();
  }
  uNo_of_questions: number = 10;
  uSetNo: number = 3;
  pager = {
    index: 0,

    count: 1
  };

  create_exam(){
    var exam_session_data={
      
        "eExamCompleted": false,
        "eTotalStatements": null,
        "ePercentCompleted": 0,
        "eUserID": sessionStorage.getItem('uUserID'),
        "eExamProgress":null
    
    }
    this.qsnService.create_new_exam(exam_session_data).subscribe((response_exam)=>{
      sessionStorage.setItem('eExamID',response_exam.eExamID )
      this.postAllQuestions(response_exam.eExamID )
    },(error)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sorry.!! Something went wrong...!!!',
        showConfirmButton: false,
        timer: 2000      })
        this.router.navigate(['sidenav/dashboard/welcome'])
       
    })
  }


  postAllQuestions(examid:any) {

    this.qsnService.get_user_data_for_exams(sessionStorage.getItem('uUserID')).subscribe((data)=>{
   
      this.data = {
      "uUserID": sessionStorage.getItem('uUserID'),
      "uExamID": examid,
      "uSetNo": this.uSetNo,
      "uNo_of_questions": this.uNo_of_questions,
      "sType":data.uType,
    }
    this.qsnService.postQuestionJson(this.data).subscribe((res: any) => {
   
      this.statements = res;
      this.pager.count = this.statements.length;
      console.log(this.pager.count);

      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    }, error =>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sorry.!! Something went wrong...!!!',
        showConfirmButton: false,
        timer: 2000      })
        this.router.navigate(['sidenav/dashboard/welcome'])
       
    });
  });
   
    this.mode = 'quiz';
  }


  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.Submit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.statements) ?
      this.statements.slice(this.pager.index, this.pager.index + this.uNo_of_questions) : [];
  }

  onSelect(question: Question, option: Option) {
    this.radio_counter+=1;
    question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }


    this.LinalArray.push({ "stid": question.sStatementID, "answer": option.text })
    const key = 'stid';
    this.arrayUniqueByKey = [...new Map(this.LinalArray.map(item =>
      [item[key], item])).values()];
      console.log(key);
    console.log(option.selected)
    localStorage.setItem("item", JSON.stringify(this.arrayUniqueByKey))
    this.item = localStorage.getItem('item')
  }

  goTo(index: number) {
    if (this.radio_counter>=this.uNo_of_questions){
      if (index >= 0 && index < this.pager.count) {
        this.pager.index = index;
        this.mode = 'quiz';
      }
      this.radio_counter=0;
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Kindly attempt all the Questions.!!!',
        showConfirmButton: false,
        timer: 2000      })
    }
    
  }

  goToback(index: number) {
      this.radio_counter= this.uNo_of_questions;
      if (index >= 0 && index < this.pager.count) {
        this.pager.index = index;
        this.mode = 'quiz';
      }
   
    }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

Submit() {
      this.item = localStorage.getItem('item')
      this.item = JSON.parse(this.item)
       this.qsnService.putQuestionJson(sessionStorage.getItem('eExamID'),this.item).subscribe((res: any) => {
        if (res.ePercentCompleted === "100" ||res.ePercentCompleted === "100.0" ){

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Congratulations..!! You have sucessfully completed the Test.!',
            showConfirmButton: false,
            timer: 2000      })
           
          this.router.navigate(['sidenav/reports/reports']);
        }
        else{
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Kindly attempt all the Questions.!!!',
            showConfirmButton: false,
            timer: 2000      })
           
        }
       
      });
    }
  
  
}
