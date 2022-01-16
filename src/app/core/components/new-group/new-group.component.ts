import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss'],
})
export class NewGroupComponent implements OnInit {
  @Input() public showNewGroupModal = false;

  @Output() public showNewGroupModalChange = new EventEmitter<boolean>();
  public groupPrivacy: string;

  constructor() {}

  ngOnInit() {}

  public closeModal(): void {
    this.showNewGroupModal = false;
    this.showNewGroupModalChange.emit(this.showNewGroupModal);
  }
}
