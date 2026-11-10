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
  features?: string[];
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
      title: 'Tryaxel Forge Corporate Website',
      client: 'Tryaxel Forge (Official)',
      desc: 'Our premier official corporate web application showcasing our complete digital solutions catalog, active products, company portfolio, and live tech services. Fully designed, developed and live in production.',
      status: 'completed',
      tags: ['Website', 'Angular', 'Corporate', 'Web App', 'Live Production'],
      url: 'https://www.tryaxelforge.co.zw/',
      imageUrl: 'assets/images/logo.png',
      id: 'proj-tryaxelforge'
    },
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
      title: 'eLearner Junior – Offline E-Learning Platform for Primary Learners',
      client: 'Zimbabwe Primary Education / EdTech',
      desc: 'A mobile-based homework pack and e-learning application designed to support Zimbabwean primary school learners through interactive, curriculum-aligned learning and examination preparation.',
      status: 'ongoing',
      tags: ['Mobile App', 'Flutter', 'SQLite', 'Spring Boot', 'Angular', 'PostgreSQL', 'Cloudflare R2'],
      id: 'proj-elearner',
      features: [
        'Multi-Grade Learning: Supports multiple primary school grades, each with six subjects and indigenous language selection (Shona, Ndebele, Tonga, etc.).',
        'Offline-First Architecture: Flutter application using SQLite for locally stored questions, diagrams, and learning resources.',
        'Intelligent Quiz Engine: Randomized question selection, shuffled answer options, automatic answer mapping, and instant explanations.',
        'Adaptive Learning Algorithm: Tracks learner performance and identifies weak concepts to prioritize revision.',
        'Learning Analytics: Calculates topic, unit, and concept mastery, performance trends, and learning progress.',
        'Gamification: Daily challenges, achievement badges, points, and learning streaks to encourage engagement.',
        'Content Distribution: Versioned, grade-specific SQLite packages distributed through Cloudflare R2.',
        'Centralized Management: Spring Boot, Angular, and PostgreSQL backend for question management, CSV imports, content publishing, subscriptions, and device-bound activation codes (4, 8, and 12 months).'
      ]
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
    const body = encodeURIComponent(`Hello Tryaxel Forge,\n\nI am interested in learning more about: ${project.title}.\n\nPlease contact me with more details.\n\nThank you.`);
    window.open(`mailto:info@tryaxelforge.co.zw?subject=${subject}&body=${body}`, '_blank');
  }

  visitProject(url: string) {
    window.open(url, '_blank');
  }
}
