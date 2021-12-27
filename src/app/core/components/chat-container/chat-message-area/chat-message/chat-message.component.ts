import { Component, Input, OnInit } from '@angular/core';
import { MessageAddresser } from 'src/app/shared/enums/message-addresser.enum';
import { ChatMessage } from 'src/app/shared/interfaces/chat-message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {
  @Input() messageAddresser: MessageAddresser = MessageAddresser.me;
  @Input() message: ChatMessage;
  public readonly messageAddresserEnum = MessageAddresser;

  constructor() {}

  ngOnInit() {}
}
