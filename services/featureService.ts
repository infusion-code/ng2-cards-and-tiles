import { Injectable } from '@angular/core';
import { TileData } from '../models/tileData';

@Injectable()
export class FeatureService {

    protected _features: Array<TileData> = null;

    public get Features(): Promise<Array<TileData>> {
        return new Promise<Array<TileData>>((resolve, reject) => {
            try {
                if (this._features == null) this.GetData();
                resolve(this._features)
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

        if (this._features == null) this._features = new Array<TileData>();
        else {
            this._features.splice(0, this._features.length);
        }
        this._features.push(new TileData("Lorem Ipsum Dolor Sit", "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.", "/features/1", "More Information", "", "a-info-circle", "Static/Media/thumbnails/picjumbo.com_IMG_4566.jpg"));
        this._features.push(new TileData("Praesent Facilisis Orci Quis Fermentum Mollis", "Nullam vitae nunc eu ligula faucibus tristique. Etiam volutpat consectetur scelerisque. Praesent in gravida elit. Nam malesuada leo lectus, eu scelerisque sem molestie sed. Integer non malesuada turpis.", "/features/2", "More Information", "", "", "Static/Media/thumbnails/picjumbo.com_IMG_3241.jpg"));
    }

}