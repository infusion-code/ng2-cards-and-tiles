import { Component, Input } from '@angular/core';
import { MessageData } from '../models/messageData';
 
@Component({
    selector: 'message',
    template: `
        <a [routerLink]="[Message.Url]">
            <li>
                <img src="{{Message.Image}}" class="profile-img pull-left">
                <div class="message-block">
                    <div>
                        <span class="username">{{Message.From}}</span> <span class="message-datetime">{{Message.Created}}</span>
                    </div>
                    <div class="message">{{Message.Body}}</div>
                </div>
            </li>
        </a>
    `,
    styles: [
        ".message { background-color: #444; color: #ddd; }",
        ".username { background-color: #444; color: #ddd; }"
    ]
})
export class MessageTile {
    private _message: MessageData;

    @Input()
        public get Message(): MessageData { return this._message }
        public set Message(val: MessageData) { this._message = val; }

    constructor() { }
}
