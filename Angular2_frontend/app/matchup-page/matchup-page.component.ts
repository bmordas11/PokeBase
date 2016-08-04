import {Component,ViewChild} from '@angular/core'
import { SearchComponent } from '../search/search.component'
import { PaneComponent } from '../pane/pane.component'
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'matchup-page',
  directives: [SearchComponent,PaneComponent],
  providers: [HTTP_PROVIDERS],
  template: `
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <search (load)="load_pokemon($event)"></search>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-centered">
        <div class="col-md-6 col-sm-12">
          <pane #leftPane></pane>
        </div>
        <div class="col-md-6 col-sm-12">
          <pane #rightPane></pane>
        </div>
      </div>
    </div>
  `
})
export class MatchupPageComponent{
  @ViewChild('leftPane') leftPane: PaneComponent
  @ViewChild('rightPane') rightPane: PaneComponent

  load_pokemon(evt: any)
  {
    if(evt.pannel == "left"){
      this.leftPane.load_data(evt.pokemon)
    }
    if(evt.pannel == "right"){
      this.rightPane.load_data(evt.pokemon)
    }
  }
}
