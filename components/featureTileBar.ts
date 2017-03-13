import { Component, OnInit } from '@angular/core';
import { TileData } from '../models/tileData';
import { FeatureService } from '../services/featureService';


@Component({
    selector: 'featuretilebar',
    template: `
        <div class="col-sm-6 col-xs-12">
            <div class="row">
                <featuretile *ngFor="let feature of Features" [Tile]="feature"></featuretile>
            </div>
        </div>
    `,
    styles: [
        ":host .row { margin-bottom: 10px; }"
    ]
})

export class FeatureTileBar implements OnInit {
    private _featureService: FeatureService;  
    private _features: Array<TileData>;

    public get Features(): Array<TileData> { return this._features; }
    
    constructor(featureService: FeatureService) {
        this._featureService = featureService;
    } 

    public ngOnInit() {
        this._featureService.Features.then(d => {
            this._features = d;
        });
    }

}