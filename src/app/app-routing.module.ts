import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogComponent } from './blog/blog.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component:  GalleryComponent},
  { path: 'works', component: WorksComponent},
  { path: 'feedback', component:  FeedbackComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component:  ContactComponent},
  { path: 'banner', component: BannerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations : [],
  exports: [ RouterModule ],
  providers : []
})

export class AppRoutingModule {}
