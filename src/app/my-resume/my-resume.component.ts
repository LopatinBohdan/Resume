import { Component, OnInit } from '@angular/core';
import{User} from '../User';
import { users } from '../Mock-User';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {
  ngOnInit(): void {}

  Users=users;

  constructor(){}
}
