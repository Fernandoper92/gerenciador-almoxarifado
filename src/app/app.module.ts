import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosModule } from './produtos/produtos.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ContaModule } from './conta/conta.module';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
// import { ConfigurationModule } from './configuration/configuration.module';
import { ProvidersBranchsModule } from './providers-branchs/providers-branchs.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatTableModule,
    AppRoutingModule,
    ProdutosModule,
    FuncionariosModule,
    ContaModule,
    MovimentacoesModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    // ConfigurationModule,
    ProvidersBranchsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
