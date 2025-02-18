import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamicForms';

  constructor(private formservice: FormService) {}

  quizForm = new FormGroup({
    questions: new FormArray([
      new FormGroup({
        question: new FormControl('', [Validators.required]),
        options: new FormArray([
          new FormGroup({
            option: new FormControl('', [Validators.required]),
          }),
        ]),
      }),
    ]),
  });

  addQuestion() {
    const newQuestion = new FormGroup({
      question: new FormControl('', [Validators.required]),
      options: new FormArray([
        new FormGroup({
          option: new FormControl('', [Validators.required]),
        }),
      ]),
    });
    this.quizForm.controls.questions.push(newQuestion);
  }

  delQuestion(id: number) {
    this.quizForm.controls.questions.removeAt(id);
  }

  addOption(id: number) {
    const newOption = new FormGroup({
      option: new FormControl('', [Validators.required]),
    });
    this.quizForm.controls.questions.controls[id].controls.options.push(
      newOption
    );
  }

  delOption(id1: number, id2: number) {
    this.quizForm.controls.questions.controls[id1].controls.options.removeAt(
      id2
    );
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    // let body:any = []
    // this.question = ''
    // for(let i =0 ;i < form.controls['questions'].value.length;i++){
    //   // console.log(form.controls['questions'].value[i].question)
    //   // console.log(form.controls['questions'].value[i].options)
    //   this.question = form.controls['questions'].value[i].question
    //   // this.options = form.controls['questions'].value[i].options
    //   this.options = []
    //   for(let j = 0 ; j<form.controls['questions'].value[i].options.length ; j++){
    //     this.options.push({"option":form.controls['questions'].value[i].options[j]})
    //     console.log(this.options);
    //   }
    //   body.push({
    //     question:this.question,
    //     options:this.options
    //   })

    // }
    // console.log(body)
    this.formservice.addData(form.value.questions).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
    this.resetForm();
  }

  resetForm() {
    this.quizForm.reset();
    this.quizForm.controls.questions.clear();
    this.addQuestion();
  }
}
