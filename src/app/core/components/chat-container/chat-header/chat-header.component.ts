import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GroupInformationComponent } from '../../group-information/group-information.component';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent implements OnInit {
  @ViewChild('groupInfoOverlay')
  public groupInfoOverlay: GroupInformationComponent;

  @Output() public membersSidebarOpened = new EventEmitter<boolean>();
  public membersSidebar = false;

  constructor() {}

  ngOnInit() {}
}
