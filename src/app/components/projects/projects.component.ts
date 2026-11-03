import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

interface Project {
  title: string;
  client: string;
  desc: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;
  imageUrl?: string;
  id: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeTab = signal<ProjectStatus>('completed');

  projects: Project[] = [
    {
      title: 'Aeternusworks Construction Website',
      client: 'Aeternusworks',
      desc: 'A full construction company website and web application showcasing services, completed projects, and enabling clients to connect with the team seamlessly. Successfully designed, developed and deployed.',
      status: 'completed',
      tags: ['Website', 'Angular', 'Spring Boot', 'Web App'],
      url: 'https://www.aeternusworks.co.zw',
      imageUrl: 'assets/images/aeternusworks-preview.png',
      id: 'proj-aeternusworks'
    },
    {
      title: 'Tryaxel Forge Corporate Website',
      client: 'Internal',
      desc: 'Our own corporate website showcasing all services, products, and team. Built with Angular and featuring cutting-edge design with AI integrations.',
      status: 'ongoing',
      tags: ['Angular', 'Corporate', 'Branding'],
      id: 'proj-tryaxelforge'
    },
    {
      title: 'Fundaxool — AI WhatsApp Assistant',
      client: 'Internal Product',
      desc: 'Development of an AI-powered WhatsApp chatbot leveraging LLM models for business automation and menu-based interactions.',
      status: 'upcoming',
      tags: ['AI', 'WhatsApp API', 'LLM', 'Python'],
      id: 'proj-fundaxool'
    },
    {
      title: 'CLEAR — Litter Detection System',
      client: 'Internal Product',
      desc: 'AI-powered computer vision system for detecting littering actions and identifying suspects to help municipalities keep environments clean.',
      status: 'upcoming',
      tags: ['AI', 'Computer Vision', 'Python', 'IoT'],
      id: 'proj-clear'
    },
    {
      title: 'ZE-state Housing Platform',
      client: 'Internal Product',
      desc: 'A modern platform connecting landlords and tenants for rental housing, featuring smart search, verified listings and secure transactions.',
      status: 'upcoming',
      tags: ['Platform', 'Angular', 'Spring Boot', 'Mobile'],
      id: 'proj-zestate'
    },
  ];

  get filteredProjects() {
    return this.projects.filter(p => p.status === this.activeTab());
  }

  setTab(tab: ProjectStatus) {
    this.activeTab.set(tab);
  }

  openInquiry(project: Project) {
    const subject = encodeURIComponent(`Project Inquiry: ${project.title}`);
    const body = encodeURIComponent(`Hello Tryaxel Forge,\n\nI am interested in a similar project: ${project.title}.\n\nPlease contact me with more details.\n\nThank you.`);
    window.open(`mailto:info@tryaxelforge.co.zw?subject=${subject}&body=${body}`, '_blank');
  }

  visitProject(url: string) {
    window.open(url, '_blank');
  }
}
