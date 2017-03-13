import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TileData } from './models/tileData';
import { MessageData } from './models/messageData';
import { ActionTile } from './components/actionTile';
import { ActionTileBar } from './components/actionTileBar';
import { FeatureTile } from './components/featureTile';
import { FeatureTileBar } from './components/featureTileBar';
import { MessageTile } from './components/messageTile';
import { MessageBoard } from './components/messageBoard';
import { TileService } from './services/tileService';
import { FeatureService } from './services/featureService';
import { MessageService } from './services/messageService';

export { TileData, MessageData, ActionTile, ActionTileBar, FeatureTile, FeatureTileBar, MessageTile, MessageBoard, TileService, FeatureService, MessageService }; 

@NgModule({
    imports: [CommonModule, RouterModule ],
    declarations: [ActionTile, ActionTileBar, FeatureTile, FeatureTileBar, MessageTile, MessageBoard],
    exports: [ActionTile, ActionTileBar, FeatureTile, FeatureTileBar, MessageTile, MessageBoard],
    providers: [TileService, FeatureService, MessageService ]
})
export class TilesAndCardsModule {

    static forRoot(tileService: TileService, featureService: FeatureService, messageService: MessageService): ModuleWithProviders {
        return {
            ngModule: TilesAndCardsModule,
            providers: [
                { provide: TileService, useValue: tileService },
                { provide: FeatureService, useValue: featureService },
                { provide: MessageService, useValue: messageService }
            ]
        };
    }

}