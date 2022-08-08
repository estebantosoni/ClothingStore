import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmComponent } from './abm/abm.component';
import { DetailsComponent } from './details/details.component';
import { DressComponent } from './dress/dress.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { HelpComponent } from './help/help.component';
import { AuthGuard } from './helpers/auth.guard';
import { InterfaceComponent } from './interface/interface.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsComponent } from './us/us.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'interface',               component: InterfaceComponent},
  {path: 'user/:id',                component: UserComponent,canActivate:[AuthGuard]},
  {path: 'dress',                   component: DressComponent},
  {path: 'fragrance',               component: FragranceComponent},
  {path: 'details/:category/:code', component: DetailsComponent},
  {path: 'abm',                     component: AbmComponent,canActivate:[AuthGuard]},
  {path: 'us',                      component: UsComponent},
  {path: 'help/:where',             component: HelpComponent},
  {path: '', redirectTo: '/interface', pathMatch: 'full'},
  {path: '**',                      component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
