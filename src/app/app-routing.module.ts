import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'restaurants', 
    loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsPageModule) 
},
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'addcashier', loadChildren: './addcashier/addcashier.module#AddcashierPageModule' },
  { path: 'addfood', loadChildren: './addfood/addfood.module#AddfoodPageModule' },
  { path: 'addmanager', loadChildren: './addmanager/addmanager.module#AddmanagerPageModule' },
  { path: 'addoffer', loadChildren: './addoffer/addoffer.module#AddofferPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'manager', loadChildren: './manager/manager.module#ManagerPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'passwordreset', loadChildren: './passwordreset/passwordreset.module#PasswordresetPageModule' },
  { path: 'privacypolicy', loadChildren: './privacypolicy/privacypolicy.module#PrivacypolicyPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'viewcashier', loadChildren: './viewcashier/viewcashier.module#ViewcashierPageModule' },
  { path: 'viewmanager', loadChildren: './viewmanager/viewmanager.module#ViewmanagerPageModule' },
  { path: 'defaultmap', loadChildren: './defaultmap/defaultmap.module#DefaultmapPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'getdirections', loadChildren: './getdirections/getdirections.module#GetdirectionsPageModule' },
  { path: 'viewfood', loadChildren: './viewfood/viewfood.module#ViewfoodPageModule' },
  { path: 'viewoffers', loadChildren: './viewoffers/viewoffers.module#ViewoffersPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'test2', loadChildren: './test2/test2.module#Test2PageModule' },
  { path: 'test3', loadChildren: './test3/test3.module#Test3PageModule' },
  { path: 'delivery', loadChildren: './delivery/delivery.module#DeliveryPageModule' },
  { path: 'dinein', loadChildren: './dinein/dinein.module#DineinPageModule' },
  { path: 'addshops', loadChildren: './addshops/addshops.module#AddshopsPageModule' },
  { path: 'viewshops', loadChildren: './viewshops/viewshops.module#ViewshopsPageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
