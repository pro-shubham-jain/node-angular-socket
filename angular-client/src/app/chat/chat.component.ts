import { Component } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  message: string = '';
  receivedMessages: string[] = [];

  constructor(private socketService: SocketService) {}

  sendMessage() {
    this.socketService.sendMessage(this.message);
    this.message = '';
  }

  async ngOnInit() {
    this.socketService.getMessage().subscribe((message: string) => {
      this.receivedMessages.push(message);
    });
  }
}
