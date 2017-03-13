export class MessageData {
    private _body: string;
    private _from: string;
    private _created: string;
    private _url: string;
    private _image: string;


    public get Body(): string { return this._body; }
    public get From(): string { return this._from; }
    public get Created(): string { return this._created; }
    public get Url(): string { return this._url; }
    public get Image(): string { return this._image; }

    constructor(body: string, from: string, created: string, url?: string, image?: string) {
        this._body = body;
        this._from = from;
        this._created = created;
        this._url = url;
        this._image = image;
    }
}