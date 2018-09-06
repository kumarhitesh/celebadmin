import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session-services/session.service';

@Component({
    selector: 'app-session-header',
    templateUrl: './session-header.component.html',
    styleUrls: ['./session-header.component.css']
})
export class SessionHeaderComponent implements OnInit {
    status: any;
    constructor(private sessionService: SessionService) {

    }
    checkActiveStatus(type) {
        this.status = type;
    }

    ngOnInit() {
        this.sessionService.getCurrentpage().subscribe((res) => {
            this.status = res.page;
        });
    }

}
