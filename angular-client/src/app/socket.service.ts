import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3000'); // Replace with your server's URL
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  getMessage(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('message', (message: string) => {
        observer.next(message);
      });
    });
  }
}
