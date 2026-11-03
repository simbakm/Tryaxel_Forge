import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type AdminTab = 'dashboard' | 'projects' | 'services' | 'products' | 'team';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  activeTab = signal<AdminTab>('dashboard');

  stats = [
    { icon: '📁', label: 'Projects',  value: '5',  color: '#FF6B00' },
    { icon: '⚙️', label: 'Services',  value: '9',  color: '#3B82F6' },
    { icon: '📦', label: 'Products',  value: '3',  color: '#10B981' },
    { icon: '👥', label: 'Team',      value: '1',  color: '#8B5CF6' },
  ];

  // Placeholder data — will be replaced by backend
  mockProjects = [
    { title: 'Aeternusworks Construction Website', status: 'completed', client: 'Aeternusworks' },
    { title: 'Tryaxel Forge Corporate Website',    status: 'ongoing',   client: 'Internal' },
    { title: 'Fundaxool AI WhatsApp Assistant',    status: 'upcoming',  client: 'Internal' },
    { title: 'CLEAR Litter Detection System',      status: 'upcoming',  client: 'Internal' },
    { title: 'ZE-state Housing Platform',          status: 'upcoming',  client: 'Internal' },
  ];

  mockServices = [
    'Website Development', 'Web Application Development', 'Mobile App Development',
    'Web Application Hosting', 'Domain Registration', 'Business Email Configuration',
    'Database Hosting & Configuration', 'AI Integration', 'ISP Services',
  ];

  mockProducts = [
    { name: 'Fundaxool', tagline: 'AI WhatsApp Chatbot',   status: 'coming-soon' },
    { name: 'CLEAR',     tagline: 'Litter Detection AI',    status: 'coming-soon' },
    { name: 'ZE-state',  tagline: 'Housing Platform',       status: 'coming-soon' },
  ];

  setTab(tab: AdminTab) {
    this.activeTab.set(tab);
  }

  getStatusClass(status: string) {
    return {
      completed: 'badge-green',
      ongoing:   'badge-orange',
      upcoming:  'badge-blue',
      'coming-soon': 'badge-silver',
    }[status] || 'badge-silver';
  }
}
