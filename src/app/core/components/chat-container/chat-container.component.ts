import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { GroupInformationComponent } from '../group-information/group-information.component';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  @ViewChild('groupInfoOverlay')
  public groupInfoOverlay: GroupInformationComponent;
}
