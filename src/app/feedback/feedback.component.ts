import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public fb: FormBuilder,
    private router: Router,
    public crudService: ServiceService) { }

  ngOnInit(): void {
  }
  feedbackForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]), 
    ContactNo: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    Feedback1: new FormControl('',[Validators.required]),

    Subject: new FormControl('',[Validators.required]),

  })

  
  onSubmit()
  {
    console.log(this.feedbackForm.value);
    
    this.crudService.createFeedback(this.feedbackForm.value).subscribe(res=>{console.log('Feedback Submitted')});
    alert("Submitted Successfully");
  }  
  
 

  get Email()
  {
  return this.feedbackForm.get('Email');
  }

  get ContactNo()
  {
  return this.feedbackForm.get('ContactNo');
  }

  get Subject()
  {
  return this.feedbackForm.get('Subject');
  }

  get Feedback()
  {
  return this.feedbackForm.get('Feedback');
  }

}
export class Feedback{
  FeedbackId:number;
  Email:string;
  ContactNo:number;
  Feedback1:string;
  Subject:string;
  
}
