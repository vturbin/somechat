import { Component, ViewChild } from '@angular/core';
import { GroupInformationComponent } from '../group-information/group-information.component';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  public membersSidebar = false;
}
