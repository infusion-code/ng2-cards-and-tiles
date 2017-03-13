# Overview
A set of Angular2 components representating various data driven card and tile designs.

# Install
Install via npm:

```
    npm install --save ng2-cards-and-tiles
```

# Use
Import `TilesAndCardsModule` (and any injected service classes) in your main app module (usually app.module.ts). Inject any overloaded providers in the providers section. 

```
    import { AppComponent, AppScaffoldModule } from 'ng2-app-scaffold'
    @NgModule({
        bootstrap: [ ... ],
        declarations: [
            ...
        ],
        imports: [
            ...
            TilesAndCardsModule
            ...
        ],
        providers: [
            {
                provide: FeatureService, deps: [...], useFactory: (...) => {
                    return new MyFeatureService(...);  
                        // this is your implementation of the feature service. 
                }
            },
            {
                provide: TileService, deps: [], useFactory: () => {
                    return new MyTileService(); 
                        // this is your implementation of the action tile service.
                }
            },
            {
                provide: MessageService, deps: [], useFactory: () => {
                    return new MyMessageService(); 
                        // this is your implementation of the message service.
                }
            }
        ]
    })
```

#Advanced
Check out the [Wiki](../../wiki) for detailed documentation on components, models and providers. 