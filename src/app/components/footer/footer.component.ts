import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'About',    fragment: 'about' },
    { label: 'Services', fragment: 'services' },
    { label: 'Products', fragment: 'products' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Team',     fragment: 'team' },
    { label: 'Contact',  fragment: 'contact' },
  ];

  services = [
    'Website Development',
    'Web App Development',
    'Mobile App Development',
    'Web Hosting',
    'Domain Registration',
    'AI Integration',
    'ISP Services',
  ];

  scrollTo(fragment: string) {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
