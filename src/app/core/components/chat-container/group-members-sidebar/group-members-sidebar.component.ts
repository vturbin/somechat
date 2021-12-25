import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { membersMock } from 'src/app/mocks/member.mock';

@Component({
  selector: 'app-chat-group-members',
  templateUrl: './group-members-sidebar.component.html',
  styleUrls: ['./group-members-sidebar.component.scss'],
})
export class ChatGroupMembersComponent {
  @Input() visibleSidebar = true;
  @ViewChild('membersSidebar') membersSidebar: HTMLElement;

  public members = membersMock;
  constructor() {}
}
