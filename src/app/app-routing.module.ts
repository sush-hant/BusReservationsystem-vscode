import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Register', component: RegisterComponent},
  {path: 'Feedback', component:FeedbackComponent},
  {path:'SearchResults', component: SearchresultComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register', component: RegisterComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
