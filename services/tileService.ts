import { Injectable, OnDestroy } from '@angular/core';
import { TileData } from '../models/tileData';

@Injectable()
export class TileService {

    protected _tiles: Array<TileData> = null;

    public get Tiles(): Promise<Array<TileData>> {
        return new Promise<Array<TileData>>((resolve, reject) => {
            try {
                if (this._tiles == null) this.GetData();
                resolve(this._tiles)
            }
            catch (e) {
                reject(e);
            }
        });
    }


    constructor() {}

    protected GetData() {

        //
        // add payload to tile data from backend system.
        //

        if (this._tiles == null) this._tiles = new Array<TileData>();
        else {
            this._tiles.splice(0, this._tiles.length);
        }
        this._tiles.push(new TileData("50", "Show new Tasks", "/tasks", "New Tasks", "red", "fa-inbox"));
        this._tiles.push(new TileData("23", "Show new Messages", "/messages", "New Message", "yellow", "fa-comments"));
        this._tiles.push(new TileData("19", "Show Reports penidng review", "/reports", "Reports for Review", "green", "fa-tags"));
        this._tiles.push(new TileData("16", "Display new shared information", "/shares", "Shares", "blue", "fa-share-alt"));

    }

}