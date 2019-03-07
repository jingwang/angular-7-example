import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  hasMessages(): boolean {
    return this.messageService.messages.length > 0;
  }

  getMessages(): string[] {
    return this.messageService.messages;
  }

  clearMessages() {
    this.messageService.clear();
  }

}
