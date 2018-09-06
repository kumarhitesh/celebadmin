import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session-services/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css', '../app.component.css']
})
export class SessionCreateComponent implements OnInit {

  sessionDetails = {
    'name': '',
    'celebrityName': '',
    'duration': '',
    'time': '',
    'image': '',
    'discription': '',
    'mediaMode': 'relayed',
    'location': ''
  };

  mediaModeOpp = [
    { value: 'relayed', label: 'Relayed' },
    { value: 'routed', label: 'Routed' }
  ];

  durationList = [
    { value: '10', label: '10 minutes' },
    { value: '20', label: '20 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '40', label: '40 minutes' },
    { value: '50', label: '50 minutes' },
    { value: '60', label: '60 minutes' }
  ];

  dateDetails = {
    'currentDate': ''
  };

  constructor(private sessionService: SessionService, private toastMessage: ToastrService, private route: Router) { }

  ngOnInit() {
    this.getCurrentTime();
    const curentUrl = this.route.url.split('/');
    this.sessionService.setCurrentpage(curentUrl[1]);
  }

  getCurrentTime() {
    this.dateDetails.currentDate = new Date().toISOString();
    const currentDate = this.dateDetails.currentDate.split('T');
    this.dateDetails.currentDate = currentDate[0] + 'T00:00:00';
  }

  onFormSubmit() {
    if (this.sessionDetails.name === '' || this.sessionDetails.duration === '' || this.sessionDetails.time === ''
    || this.sessionDetails.image === '') {
      this.toastMessage.warning('Missing Fields!!');
    } else {
      const payload = {
        sessionName: this.sessionDetails.name,
        time: this.sessionDetails.time,
        duration: this.sessionDetails.duration,
        description: this.sessionDetails.discription,
        image: this.sessionDetails.image,
        mediaMode: this.sessionDetails.mediaMode,
        location: this.sessionDetails.location
      };
      this.sessionService.addSession(payload).subscribe((res) => {
        if (res) {
          this.toastMessage.success('Session Created Successfully');
          this.clearForm();
        } else {
          this.toastMessage.warning('Something went wrong while creating the session');
        }
      });
    }
  }

  clearForm() {
    this.sessionDetails = {
      'name': '',
      'celebrityName': '',
      'duration': '',
      'time': '',
      'image': '',
      'discription': '',
      'mediaMode': 'relayed',
      'location': ''
    };
  }
}
