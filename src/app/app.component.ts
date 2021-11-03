import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'phoenix-wc-wiki-ngx-lt';
  showManeuversTab = false;

  ngOnInit() {
    window.addEventListener('phoenix-wc-wiki-ngx-ce-data-sent-test', this.customEventListenerFunction, true);
  }

  customEventListenerFunction(event: any) {
    console.log('testfunc - ' , event.detail);
    this.showManeuversTab = true;
    console.log('showManeuversTab - ' , this.showManeuversTab);
  }

  ngOnDestroy(): void{
    window.removeEventListener('changeNameToCustomEvent', this.customEventListenerFunction, true);
  }

}
