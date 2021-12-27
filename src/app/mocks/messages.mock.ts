import { MessageAddresser } from '../shared/enums/message-addresser.enum';
import { ChatMessage } from '../shared/interfaces/chat-message.model';

export const mockMessages: MockMessage[] = [
  {
    message: {
      messageFrom: 'Stewiee',
      messageContent: 'dopjwqpdwdwqopdjwqdojwqdopjwqopdjopwqdjop',
      timestamp: 1640616380425,
    },
    messageAddresser: MessageAddresser.me,
  },
  {
    message: {
      messageFrom: 'Ебола',
      messageContent: 'dopjwqpdwdwqopdjwqdojwqdopjwqopdjopwqdjop',
      timestamp: 1640616380425,
    },
    messageAddresser: MessageAddresser.others,
  },
  {
    message: {
      messageFrom: 'qwertyIsMyPass',
      messageContent: 'dopjwqpdwdwqopdjwqdojwqdopjwqopdjopwqdjop',
      timestamp: 1640616380425,
    },
    messageAddresser: MessageAddresser.others,
  },
  {
    message: {
      messageFrom: 'LOHOmann',
      messageContent: `dopjwqpdwdwqopdjwqdojwqdopjwqopdjopwqdjop
      dkopwqkodpqwkowpqdwqkop
      opdkpwqodkowpqdkopwqkdopwdkopqwdkopwqkdopwkq`,
      timestamp: 1640616380425,
    },
    messageAddresser: MessageAddresser.others,
  },
  {
    message: {
      messageFrom: 'Giogi',
      messageContent: 'dopjwqpdwdwqopdjwqdojwqdopjwqopdjopwqdjop',
      timestamp: 1640616380425,
    },
    messageAddresser: MessageAddresser.others,
  },
];

export interface MockMessage {
  message: ChatMessage;
  messageAddresser: MessageAddresser;
}
