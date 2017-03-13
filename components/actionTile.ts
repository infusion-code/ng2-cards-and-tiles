import { Component, Input } from '@angular/core';
import { TileData } from '../models/tileData';

@Component({
    selector: 'actiontile',
    template: `
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a [routerLink]="[Tile.Url]" title="{{Tile.Description}}">
                <div class="card {{Tile.AdditionalCssClass}} summary-inline">
                    <div class="card-body">
                        <i class="icon fa {{Tile.FAIcon}} fa-4x"></i>
                        <div class="content">
                            <div class="title">{{Tile.Title}}</div>
                            <div class="sub-title">{{Tile.SubTitle}}</div>
                        </div>
                        <div class="clear-both"></div>
                    </div>
                </div>
            </a>
        </div>
    `,
    styles: [
        ":host > div { margin-bottom: 15px; }"
    ]
})
export class ActionTile {
    private _tileData: TileData;

    @Input() 
        get Tile(): TileData  { return this._tileData; }
        set Tile(val: TileData) { this._tileData = val; }

    constructor() {} 
}