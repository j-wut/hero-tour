import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  constructor(private msgService: MessageService) {}

  get messages() {
    return this.msgService.messages;
  }
  ngOnInit() {}
  clear() {
    this.msgService.clear();
  }
}
