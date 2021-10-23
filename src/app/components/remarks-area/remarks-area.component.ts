import {Component, Input, OnInit} from '@angular/core';
import {Remark} from "../../model/remark";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-remarks-area',
  templateUrl: './remarks-area.component.html',
  styleUrls: ['./remarks-area.component.css']
})
export class RemarksAreaComponent implements OnInit {

  @Input() remark: Remark | undefined;
  datePostString: string | null;

  constructor(public datePipe: DatePipe) {
    this.datePostString = '';
  }

  ngOnInit(): void {
    this.datePostString = this.datePipe.transform(this.remark?.date, 'dd-MM-yyyy HH:mm:ss');

  }

}
