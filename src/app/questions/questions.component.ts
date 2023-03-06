import { Component } from '@angular/core';
import { QuestionServiceService } from '../question-service.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {
  public name: String = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public explaination: string = '';
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: Boolean = false;

  constructor(private questionService: QuestionServiceService) {}
  
  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    let questions = this.questionService.getQuestion();
    this.questionList = questions.questions;
  }

  nextQuestion() {
    this.currentQuestion++;
    this.explaination = '';
  }

  previousQuestion() {
    this.currentQuestion--;
    this.explaination = '';
  }
  
  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      let _option = document.getElementsByClassName('_option')[
        option.optNo - 1
      ] as HTMLElement;
      _option.style.backgroundColor = 'green';
      this.explaination = this.questionList[this.currentQuestion].explanation;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
        this.explaination = '';
      }, this.counter*1000);
    } else {
      this.points -= 5;
      let _option = document.getElementsByClassName('_option')[
        option.optNo - 1
      ] as HTMLElement;
      _option.style.backgroundColor = 'red';
      this.explaination = this.questionList[this.currentQuestion].explanation;
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
        this.explaination = '';
      }, this.counter*1000);
    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 6000000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
    this.explaination = '';
  }
  
  getProgressPercent() {
    this.progress = (
      (this.currentQuestion / this.questionList.length) *
      100
    ).toString();
    return this.progress;
  }
}
