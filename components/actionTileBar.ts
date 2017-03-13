import { Component, OnInit } from '@angular/core';
import { TileData } from '../models/tileData';
import { TileService } from '../services/tileService';


@Component({
    selector: 'actiontilebar',
    template: `
        <div class="row">
            <ng-container *ngIf="Tiles != null && Tiles.length > 0">
                <actiontile  *ngFor="let tile of Tiles" [Tile]="tile"></actiontile>
            </ng-container>
        </div>
    `,
    styles: [
        ":host .row { margin-bottom: 10px; }"
    ]
})

export class ActionTileBar implements OnInit {
    private _tileService: TileService;  
    private _tiles: Array<TileData>;

    public get Tiles(): Array<TileData>  { return this._tiles; }
    
    constructor(tileService: TileService) {
        this._tileService = tileService;
    } 

    public ngOnInit() {
        this._tileService.Tiles.then(d => {
            this._tiles = d;
        });
    }

}