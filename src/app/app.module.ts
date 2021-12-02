import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './core/components/app-header/app-header.component';
import { ChatContainerComponent } from './core/components/chat-container/chat-container.component';
import { ChatInputBoxComponent } from './core/components/chat-container/chat-input-box/chat-input-box.component';
import { ChatMessageComponent } from './core/components/chat-container/chat-room/chat-message/chat-message.component';
import { ChatRoomComponent } from './core/components/chat-container/chat-room/chat-room.component';
import { InputTextModule } from 'primeng/inputtext';
import { SearchbarComponent } from './core/components/room-list-container/searchbar/searchbar.component';
import { RoomListComponent } from './core/components/room-list-container/room-list/room-list.component';
import { RoomListContainerComponent } from './core/components/room-list-container/room-list-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ChatContainerComponent,
    ChatInputBoxComponent,
    ChatRoomComponent,
    ChatMessageComponent,
    SearchbarComponent,
    RoomListComponent,
    RoomListContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
