import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavLink {
  label: string;
  fragment: string;
  id: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  drawerOpen = signal(false);
  scrolled = signal(false);
  activeSection = signal('hero');

  navLinks: NavLink[] = [
    { label: 'Home',      fragment: 'hero',     id: 'nav-home' },
    { label: 'About',     fragment: 'about',    id: 'nav-about' },
    { label: 'Services',  fragment: 'services', id: 'nav-services' },
    { label: 'Products',  fragment: 'products', id: 'nav-products' },
    { label: 'Projects',  fragment: 'projects', id: 'nav-projects' },
    { label: 'Team',      fragment: 'team',     id: 'nav-team' },
    { label: 'Contact',   fragment: 'contact',  id: 'nav-contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['hero', 'about', 'services', 'products', 'projects', 'team', 'contact'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  toggleDrawer() {
    this.drawerOpen.update(v => !v);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }

  scrollTo(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeDrawer();
  }
}
