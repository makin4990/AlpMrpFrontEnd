import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionComponent } from './components/option/option.component';
import { NaviComponent } from './components/navi/navi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Route } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AuthGuard } from './guards/auth.guard';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartService } from './services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { pipe } from 'rxjs';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent, canActivate:[AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'productprocces', component: LoginComponent },
  { path: 'orders', component: CartSummaryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    NaviComponent,
    LoginComponent,
    HomepageComponent,
    CartSummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [ CartService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
