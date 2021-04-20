import { Component, OnInit } from '@angular/core';
import { CrudAdminService } from '../crud-admin.service';
import { Feedback } from '../feedback/feedback.component';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
  feedback: Feedback[];
  constructor(public crudadminService:CrudAdminService) { }

  ngOnInit(): void {
    this.crudadminService.getFeedback().subscribe((data:Feedback[])=>{
      this.feedback = data;
  })
  }

}
