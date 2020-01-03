import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  providers: [],
  imports: [CommonModule],
  exports: []
})
export class <%=classify(coreModule)%>Module {
  constructor(@Optional() @SkipSelf() <%=coreModule%>: <%=classify(coreModule)%>Module) {
    if (<%=coreModule%>) {
      throw new Error("You should import core module only in the root module.");
    }
  }
}
