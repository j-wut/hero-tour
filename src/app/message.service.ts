import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messages = [];

  constructor() {}
  info(...msgs) {
    this.newMsg(msgs.join(""));
  }
  newMsg(msg) {
    this.messages.push(msg);
  }
  getMessages() {
    return this.messages;
  }
  clear() {
    this.messages = [];
  }
}
