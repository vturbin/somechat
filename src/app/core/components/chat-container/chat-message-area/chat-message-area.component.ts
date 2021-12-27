import { Component, OnInit } from '@angular/core';
import { MockMessage, mockMessages } from 'src/app/mocks/messages.mock';
import { ChatMessage } from 'src/app/shared/interfaces/chat-message.model';

@Component({
  selector: 'app-chat-message-area',
  templateUrl: './chat-message-area.component.html',
  styleUrls: ['./chat-message-area.component.scss'],
})
export class ChatMessageAreaComponent implements OnInit {
  public mockMessages: MockMessage[] = [
    ...mockMessages,
    ...mockMessages,
    ...mockMessages,
  ];
  constructor() {}

  ngOnInit() {}
}
