import { Component, Input, OnInit } from '@angular/core';
import { EmojiEvent } from 'ngx-emoji-picker';

@Component({
  selector: 'app-chat-input-box',
  templateUrl: './chat-input-box.component.html',
  styleUrls: ['./chat-input-box.component.scss'],
})
export class ChatInputBoxComponent implements OnInit {
  toggled: boolean = false;
  handleSelection(event: EmojiEvent) {
    console.log(event.char);
  }

  constructor() {}

  ngOnInit() {}
}
