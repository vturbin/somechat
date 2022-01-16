import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list-container',
  templateUrl: './room-list-container.component.html',
  styleUrls: ['./room-list-container.component.scss'],
})
export class RoomListContainerComponent implements OnInit {
  public showNewGroupModal = false;

  constructor() {}

  ngOnInit() {}
}
