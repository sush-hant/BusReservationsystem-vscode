import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BusaddComponent } from './busadd/busadd.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { BusmainComponent } from './busmain/busmain.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HireBusComponent } from './hire-bus/hire-bus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RentaladdComponent } from './rentaladd/rentaladd.component';
import { RentalbookingComponent } from './rentalbooking/rentalbooking.component';
import { RentalmainComponent } from './rentalmain/rentalmain.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Register', component: RegisterComponent},
  {path: 'Feedback', component:FeedbackComponent},
  {path:'SearchResults', component: SearchresultComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register', component: RegisterComponent},
  {path: 'AdminLogin', component:AdminloginComponent},
 
  {path: 'SideMenu', component:SidemenuComponent, children:[
    {path:'rentalmain',component:RentalmainComponent},
    {path:'rentaladd',component:RentaladdComponent},
    {path:'rentalbooking',component:RentalbookingComponent},
    {path:'busadd',component:BusaddComponent},
    {path:'busmain',component:BusmainComponent},
    {path:'busbooking',component:BusbookingComponent},
    {path:'viewFeedback', component:ViewFeedbackComponent},
    {path:'AdminHome', component: AdminhomeComponent},
    {path:'', component: AdminhomeComponent},


  ]},
  {path:'Profile', component: ProfileComponent},
  {path:'MyBooking', component: BookingDetailsComponent},
  {path:'ChangePassword', component: ChangePasswordComponent},
  {path: 'Wallet', component: WalletComponent},
  {path:'HireBus', component:HireBusComponent},
  {path:'AboutUs', component:AboutUsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
