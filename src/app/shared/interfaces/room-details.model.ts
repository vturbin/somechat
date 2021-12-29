import { LastMessage } from './last-message.model';

export interface RoomDetails {
  id: string;
  image: string;
  title: string;
  lastMessage: LastMessage;
}
