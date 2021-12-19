import { Component, Input, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ChatInfo } from 'src/app/shared/interfaces/chat-info.model';

@Component({
  selector: 'app-group-information',
  templateUrl: './group-information.component.html',
  styleUrls: ['./group-information.component.scss'],
})
export class GroupInformationComponent {
  @ViewChild('overlayPanel') private overlayRef: OverlayPanel;

  @Input() public transitionDelayMs = 100;
  @Input() public chatInfo: ChatInfo;

  public toggleOverlay(event: Event) {
    this.overlayRef.toggle(event);
  }
}
