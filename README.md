# Angular Schematic to create a core and shared module

To get started with structuring your Angular project. This schematic will create a core and shared module. Have a read [over here](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7) for details on a scaleable Angular project structure.

## Installation and usage

### Installation

Switch to your project directory. Then install the latest version as development dependency with:
```bash
npm i -D ng-core-module
```

### Run the schematic

Running the schematic with the ng add command:
```bash
ng add ng-core-module
```

### Import the new modules

Check your root module. The root module must import the new core module. The shared module should be imported by any feature module that needs its components.

Below an example root module (usually your `app.module.ts`):
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## ToDo

- automate the import of the modules
- provide a `--skip-import` option
 