import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ngIf/diretiva-ngIf.component';
import { DiretivaNgSwitchComponent } from './diretiva-ngSwitch/diretiva-ngSwitch.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiretivaNgForComponent } from './diretiva-ngFor/diretiva-ngFor.component';
import { DiretivaNgClassComponent } from './diretiva-ngClass/diretiva-ngClass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';

@NgModule({
  declarations: [	
    AppComponent,
      DiretivaNgIfComponent,
      DiretivaNgSwitchComponent,
      DiretivaNgForComponent,
      DiretivaNgClassComponent,
      DiretivaNgstyleComponent,
      OperadorElvisComponent,
      ExemploNgContentComponent
   ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
