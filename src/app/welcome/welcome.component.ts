import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  public message: string = '';
  constructor(private router: Router) {}

  startQuiz(Quiz: NgForm) {
    let name = Quiz.controls['userName'].value;
    if (name != '') {
      localStorage.setItem('name', name);
      this.router.navigateByUrl('/question');
    } else {
      this.message = 'Name should not be Empty'
    }
  }
}
