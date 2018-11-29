import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  // providers: [LoggingService]
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    { name: "Yoshi", belt: 'black' },
    { name: "Ryu", belt: 'red' },
    { name: "crystal", belt: 'purple' }
  ];
  term: any;

  constructor(private logger: LoggingService) {
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
  }

}
