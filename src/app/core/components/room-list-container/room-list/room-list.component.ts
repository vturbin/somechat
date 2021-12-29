import { Component, OnInit } from '@angular/core';
import { roomListMock } from 'src/app/mocks/room-detail.mock';
import { RoomDetails } from 'src/app/shared/interfaces/room-details.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  public roomList: RoomDetails[] = roomListMock;

  constructor() {}

  ngOnInit() {}
}
