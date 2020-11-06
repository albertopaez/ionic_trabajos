import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinnComponent } from './profiles/finn/finn.component';
import { HanComponent } from './profiles/han/han.component';
import { LeiaComponent } from './profiles/leia/leia.component';
import { RenComponent } from './profiles/ren/ren.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'han',
    component: HanComponent,
  },
  {
    path: 'ren',
    component: RenComponent,
  },
  {
    path: 'finn',
    component: FinnComponent,
  },
  {
    path: 'leia',
    component: LeiaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
