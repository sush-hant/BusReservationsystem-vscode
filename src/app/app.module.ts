import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderfooterComponent } from './headerfooter/headerfooter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BusaddComponent } from './busadd/busadd.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { BusmainComponent } from './busmain/busmain.component';
import { RentaladdComponent } from './rentaladd/rentaladd.component';
import { RentalbookingComponent } from './rentalbooking/rentalbooking.component';
import { RentalmainComponent } from './rentalmain/rentalmain.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HireBusComponent } from './hire-bus/hire-bus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule} from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {WalletComponent} from './wallet/wallet.component';
import { DemoComponent } from './demo/demo.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AdminhomeComponent } from './adminhome/adminhome.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderfooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackComponent,
    SearchresultComponent,
    AdminloginComponent,
    BusaddComponent,
    BusbookingComponent,
    BusmainComponent,
    RentaladdComponent,
    RentalbookingComponent,
    RentalmainComponent,
    SidemenuComponent,
    HireBusComponent,
    AboutUsComponent,
    WalletComponent,
    FooterComponent,
    ProfileComponent,
    BookingDetailsComponent,
    ChangePasswordComponent,
    DemoComponent,
    ViewFeedbackComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
