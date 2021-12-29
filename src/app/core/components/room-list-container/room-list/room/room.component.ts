import { Component, Input, OnInit } from '@angular/core';
import { RoomDetails } from 'src/app/shared/interfaces/room-details.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  @Input() public roomDetails: RoomDetails;

  constructor() {}

  ngOnInit() {}
}
