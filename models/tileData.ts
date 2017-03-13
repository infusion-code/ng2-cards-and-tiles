export class TileData {
    private _title: string;
    private _subTitle: string;
    private _description: string;
    private _url: string;
    private _additionalCssClass: string;
    private _faIcon: string;
    private _image: string;

    public get Title(): string { return this._title; }
    public get SubTitle(): string { return this._subTitle; }
    public get Description(): string { return this._description; }
    public get Url(): string { return this._url; }
    public get AdditionalCssClass(): string { return this._additionalCssClass; }
    public get FAIcon(): string { return this._faIcon; }
    public get Image(): string { return this._image }

    constructor(title: string, description: string, url: string, subTitle?: string, additionalCssClass?: string, faIcon?: string, image?: string) {
        this._title = title;
        this._subTitle = subTitle ? subTitle : "";
        this._url = url;
        this._description = description;
        this._url = url;
        this._faIcon = faIcon ? faIcon : "fa-arrow-circle-right";
        this._additionalCssClass = additionalCssClass ? additionalCssClass : "";
        this._image = image ? image : "";
    }
}