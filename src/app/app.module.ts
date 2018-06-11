import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AllCompanyComponent } from './all-company/all-company.component';
import { CompanyComponent } from './company/company.component';
import { CoinTypeService } from './services/coin.type.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './Infra/Interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CnpjService } from './services/cnpj.service';
import { CompanyService } from './services/company.service';
import { ApiService } from './services/api.service';

const appRoutes: Routes = [
  // { path: '/', component: AppComponent },
  { path: '',   redirectTo: '/Company', pathMatch: 'full' },
  { path: 'AllCompany', component: AllCompanyComponent },
  { path: 'Company', component: CompanyComponent },
];



/*

form do FRONT
tratar erro no send do form FRONT
Listagem FRONT

detalhes nas listagem FRONT

*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    FooterComponent,
    AllCompanyComponent,
    CompanyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    CoinTypeService,
    CnpjService,
    CompanyService,
    ApiService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
