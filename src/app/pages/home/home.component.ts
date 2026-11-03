import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { TeamComponent } from '../../components/team/team.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    ProjectsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-products></app-products>
    <app-projects></app-projects>
    <app-team></app-team>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent {}
