import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductImportComponent } from './Productos/product-import/product-import.component';
import { AssociatesNewComponent } from './Associates/associates-new/associates-new.component';
import { AssociatesRemoveComponent } from './Associates/associates-remove/associates-remove.component';
import { AssociatesReadComponent } from './Associates/associates-read/associates-read.component';
import { AssociatesUpdateComponent } from './Associates/associates-update/associates-update.component';
import { CotizacionNewComponent } from './Cotizacion/cotizacion-new/cotizacion-new.component';
import { CompanyNewComponent } from './Company/company-new/company-new.component';
import { CompanyReadComponent } from './Company/company-read/company-read.component';
import { CompanyDeleteComponent } from './Company/company-delete/company-delete.component';
import { CompanyUpdateComponent } from './Company/company-update/company-update.component';
import {CompanyService} from './Company/company.service';
import {CotizacionService} from './Cotizacion/cotizacion.service';
import {AssociatesService} from './Associates/associates.service';
import {ProductsService} from './Productos/products.service';
import { DashboardService } from './dashboard/dashboard.service';
import {LoginService} from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import{Ng2Webstorage} from 'ngx-webstorage';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

import { CotizacionAllComponent } from './Cotizacion/cotizacion-all/cotizacion-all.component';
import { DashBoardComponent } from './Stadistics/dash-board/dash-board.component';
import { DashboardProjectComponent } from './Projects/dashboard-project/dashboard-project.component';
import { ProjectNewComponent } from './Projects/project-new/project-new.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    ProductImportComponent,
    AssociatesNewComponent,
    AssociatesRemoveComponent,
    AssociatesReadComponent,
    AssociatesUpdateComponent,
    CotizacionNewComponent,
    CompanyNewComponent,
    CompanyReadComponent,
    CompanyDeleteComponent,
    CompanyUpdateComponent,
    CotizacionAllComponent,
    DashBoardComponent,
    DashboardProjectComponent,
    ProjectNewComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      AlertModule.forRoot(),
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      Ng2Webstorage,
      NgxUiLoaderModule

  ],
  providers: [
      CookieService,
      CompanyService,
      CotizacionService,
      AssociatesService,
      ProductsService,
      LoginService,
      DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
