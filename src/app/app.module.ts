import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialNavbarComponent } from './material-navbar/material-navbar.component';
import { MaterialGridComponent } from './material-grid/material-grid.component';
import { HomeComponent } from './home/home.component';
import { MatExpansionComponent } from './mat-expansion/mat-expansion.component';
import { MaterialCardComponent } from './material-card/material-card.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MaterialStepperComponent } from './material-stepper/material-stepper.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { MaterialTooltipComponent } from './material-tooltip/material-tooltip.component';
import { MaterialSnackbarComponent } from './material-snackbar/material-snackbar.component';
import { MaterialDialogsComponent } from './material-dialogs/material-dialogs.component';
import { DialogExampleComponent } from './material-dialogs/dialog-example/dialog-example.component';
import { MaterialDataTableComponent } from './material-data-table/material-data-table.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'card', component: MaterialCardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listas', component: MaterialListComponent },
  { path: 'grid-list', component: MaterialGridComponent },
  { path: 'mat-expansion', component: MatExpansionComponent },
  { path: 'tabs', component: MaterialTabsComponent },
  { path: 'stepper', component: MaterialStepperComponent },
  { path: 'forms', component: MaterialFormComponent },
  { path: 'tooltip', component: MaterialTooltipComponent },
  { path: 'snackbar', component: MaterialSnackbarComponent },
  { path: 'dialogs', component: MaterialDialogsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MaterialListComponent,
    MaterialNavbarComponent,
    MaterialGridComponent,
    HomeComponent,
    MatExpansionComponent,
    MaterialCardComponent,
    MaterialTabsComponent,
    MaterialStepperComponent,
    MaterialFormComponent,
    MaterialTooltipComponent,
    MaterialSnackbarComponent,
    MaterialDialogsComponent,
    DialogExampleComponent,
    MaterialDataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogExampleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
