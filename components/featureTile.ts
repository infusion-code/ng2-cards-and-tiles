import { Component, Input } from '@angular/core';
import { TileData } from '../models/tileData';

@Component({
    selector: 'featuretile',
    template: `
        <div class="col-md-6 col-sm-12">
            <div class="thumbnail {{Tile.AdditionalCssClass}} no-margin-bottom">
                <img src="{{Tile.Image}}" class="img-responsive">
                <div class="caption">
                    <h3 id="thumbnail-label">{{Tile.Title}}<a class="anchorjs-link" href="#thumbnail-label"><span class="anchorjs-icon"></span></a></h3>
                    <p>{{Tile.Description}}</p>
                    <p><a [routerLink]="[Tile.Url]" class="btn btn-primary" role="button"><i *ngIf="Tile.FAIcon != ''" class="icon fa {{Tile.FAIcon}}"></i>{{Tile.SubTitle}}</a></p>
                </div>
            </div>
        </div>
    `,
    styles: [
        ":host > div { margin-bottom: 15px; }",
        ".thumbnail { background-color: #444; border: none; }",
        ".thumbnail .caption { color: #ddd; }",
        ".icon.fa {padding-right: 10px }"
    ]
})
export class FeatureTile {
    private _tile: TileData;

    @Input()
        public get Tile(): TileData { return this._tile };
        public set Tile(val: TileData) { this._tile = val; }

        constructor() { }
}