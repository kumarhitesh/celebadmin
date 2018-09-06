import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session-services/session.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-session-edit-delete',
  templateUrl: './session-edit-delete.component.html',
  styleUrls: ['./session-edit-delete.component.css', '../app.component.css']
})
export class SessionEditDeleteComponent implements OnInit {

  sessionDetails = {
    'name': '',
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

  disableInput = true;

  private sessionId: any = '';

  constructor(private route: ActivatedRoute,
    private sessionService: SessionService,
    private toastMessage: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get('sessionId');
    this.sessionService.getSessionByID(this.sessionId).subscribe((res) => {
      this.sessionDetails = {
        'name': res.sessionName,
        'duration': res.duration,
        'time': res.time,
        'image': res.image,
        'discription': res.description,
        'mediaMode': res.mediaMode,
        'location': res.location
      };
    });
  }

  enableInput() {
    this.disableInput = false;
  }

  saveChangedSession() {
    const payload = {
      sessionName: this.sessionDetails.name,
      time: this.sessionDetails.time,
      duration: this.sessionDetails.duration,
      description: this.sessionDetails.discription,
      image: this.sessionDetails.image,
      mediaMode: this.sessionDetails.mediaMode,
      location: this.sessionDetails.location
    };
    this.sessionService.updateSession(payload, this.sessionId).subscribe((res) => {
      if (res) {
        this.disableInput = true;
        this.toastMessage.success('Session Updated Successfully');
      } else {
        this.disableInput = false;
        this.toastMessage.warning('Something went worng while updating please try after some time');
      }
    });
  }

  deleteSession() {
    this.sessionService.deleteSession(this.sessionId).subscribe((res) => {
      if (res) {
        this.toastMessage.success('Session deleted Successfully');
        setTimeout(() => {
          this.location.back();
        }, 1000);
      } else {
        this.toastMessage.warning('Something went wrong while deleting the session');
      }
    });
  }

}
