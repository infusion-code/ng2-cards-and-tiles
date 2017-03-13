import { Component, Input, OnInit } from '@angular/core';
import { MessageData } from '../models/messageData';
import { MessageService } from '../services/messageService';

@Component({
    selector: 'messageboard',
    template: `
        <div class="col-sm-6 col-xs-12">
            <div class="card card-success messageBoard">
                <div class="card-header">
                    <div class="card-title">
                        <div class="title"><i class="fa fa-comments-o"></i> {{Title}}</div>
                    </div>
                    <div class="clear-both"></div>
                </div>
                <div class="card-body no-padding">
                    <ul class="message-list">
                        <message *ngFor="let message of Messages" [Message]="message"></message>
                        <li class="text-center load-more">
                            <a id="message-load-more" (click)="LoadMoreMessages()">
                                <i class="fa fa-refresh"></i> load more...
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styles: [
        ":host .messageBoard { background-color: #444; }",
        ":host .load-more {color: #ddd; padding: 10px; }",
        ":host .load-more a#message-load-more { color: #ddd; cursor: pointer }"
    ]
})

export class MessageBoard {
    private _service: MessageService;
    private _title: string = "Latest Messages";
    private _messages: Array<MessageData>;


    @Input()
        public get Title(): string { return this._title; }
        public set Title(val: string) { this._title = val; }

    public get Messages(): Array<MessageData> { return this._messages; }

    constructor(service: MessageService) {
        this._service = service;
    }

    public ngOnInit() {
        this._service.Messages.then(m => {
            this._messages = m;
        });
    }

    public LoadMoreMessages() {
        this._service.LoadMoreMessages().then(m => {
            this._messages = this._messages.concat(m);
        });
    }
}