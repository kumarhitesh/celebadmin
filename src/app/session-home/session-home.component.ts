import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session-services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-home',
  templateUrl: './session-home.component.html',
  styleUrls: ['./session-home.component.css', '../app.component.css']
})
export class SessionHomeComponent implements OnInit {

  sessionList = [];
  sessionListSearch: any;

  constructor(private sessionService: SessionService, private route: Router) { }

  ngOnInit() {
    const curentUrl = this.route.url.split('/');
    this.sessionService.setCurrentpage(curentUrl[1]);
    this.sessionService.setCurrentpage('home');
    this.getSessionList();
  }

  getSessionList() {
    this.sessionService.apiCall().subscribe((res) => {
      this.sessionList = res;
    });
  }
}
