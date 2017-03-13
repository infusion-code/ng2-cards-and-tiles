import { Injectable, OnDestroy } from '@angular/core';
import { MessageData } from '../models/messageData';

@Injectable()
export class MessageService {
    private _count: number;
    protected _messages: Array<MessageData> = null;

    public get Messages(): Promise<Array<MessageData>> {
        return new Promise<Array<MessageData>>((resolve, reject) => {
            try {
                if (this._messages == null) this.GetData();
                resolve(this._messages);
            }
            catch (e) {
                reject(e);
            }
        });
    }


    constructor() {
        this._count = 0;
    }

    protected GetData() {

        //
        // add payload to get message data from backend system.
        //

        if (this._messages == null) this._messages = new Array<MessageData>();
        else {
            this._messages.splice(0, this._messages.length);
        }
        this._messages.push(new MessageData("Duis tristique orci elit, in congue dolor porttitor elementum. Proin ac felis vitae lacus efficitur rhoncus. Sed id finibus ex. Etiam molestie nunc diam. Duis fermentum posuere eros quis fermentum. Vestibulum eu viverra nibh. Pellentesque suscipit nisi metus, at fringilla sem accumsan ut. Morbi vestibulum lobortis sagittis. Integer tincidunt leo in ante sollicitudin ultricies. Duis sagittis justo sed nisi tempor cursus. Proin enim metus, tincidunt nec eleifend eget, luctus id eros. Duis massa orci, eleifend sed tellus eget, auctor tincidunt dui. Fusce ullamcorper diam aliquet mauris tempus, in commodo justo efficitur. Suspendisse feugiat leo id fringilla interdum.", "Thor Schueler", "12 min ago", "/messages/" + (this._count++).toString(), "Static/Media/profile/profile-1.jpg"));
        this._messages.push(new MessageData("Donec egestas lectus a ipsum elementum rhoncus. Vivamus lacinia non elit eget tincidunt. Vivamus leo turpis, efficitur tincidunt efficitur nec, venenatis convallis velit. Fusce facilisis ipsum eget semper vestibulum. Phasellus fringilla sapien vitae risus fringilla hendrerit.", "Thor Schueler", "15 min ago", "/messages/" + (this._count++).toString(), "Static/Media/profile/profile-1.jpg"));
        this._messages.push(new MessageData("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.", "Thor Schueler", "2 hours ago", "/messages/" + (this._count++).toString(), "Static/Media/profile/profile-1.jpg"));
        this._messages.push(new MessageData("Nullam vitae nunc eu ligula faucibus tristique. Etiam volutpat consectetur scelerisque. Praesent in gravida elit. Nam malesuada leo lectus, eu scelerisque sem molestie sed.", "Thor Schueler", "1 day ago", "/messages/" + (this._count++).toString(), "Static/Media/profile/profile-1.jpg"));

    }

    public LoadMoreMessages(): Promise<Array<MessageData>> {
        return new Promise<Array<MessageData>>((resolve, reject) => {
            try {
                let _t: Array<MessageData> = new Array<MessageData>();
                _t.push(new MessageData(
                    "Donec egestas lectus a ipsum elementum rhoncus. Vivamus lacinia non elit eget tincidunt. Vivamus leo turpis, efficitur tincidunt efficitur nec, venenatis convallis velit. Fusce facilisis ipsum eget semper vestibulum. Phasellus fringilla sapien vitae risus fringilla hendrerit.",
                    "Thor Schueler", "more than 1 day ago", "/messages/" + (this._count++).toString(), "Static/Media/profile/profile-1.jpg"
                ));
                resolve(_t);
            }
            catch (e) {
                reject(e);
            }
        });
    }

}