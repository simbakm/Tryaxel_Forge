import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  faIcon: string;
  title: string;
  desc: string;
  id: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      faIcon: 'fa-solid fa-globe',
      title: 'Website Development',
      desc: 'Modern, responsive and SEO-friendly websites that represent your brand and convert visitors into customers.',
      id: 'svc-website'
    },
    {
      faIcon: 'fa-solid fa-code',
      title: 'Web Application Development',
      desc: 'Custom web applications tailored to streamline your business processes and boost productivity.',
      id: 'svc-webapp'
    },
    {
      faIcon: 'fa-solid fa-mobile-screen-button',
      title: 'Mobile App Development',
      desc: 'Cross-platform mobile apps for Android & iOS using Flutter that deliver seamless experiences.',
      id: 'svc-mobile'
    },
    {
      faIcon: 'fa-solid fa-cloud',
      title: 'Web Application Hosting',
      desc: 'Fast, secure and reliable hosting to keep your web applications running 24/7 with 99.9% uptime.',
      id: 'svc-hosting'
    },
    {
      faIcon: 'fa-solid fa-link',
      title: 'Domain Registration',
      desc: 'Register your perfect domain name (.co.zw, .com, .net, .org) and establish your online identity.',
      id: 'svc-domain'
    },
    {
      faIcon: 'fa-solid fa-envelope',
      title: 'Business Email Configuration',
      desc: 'Professional email setup with your domain for secure and reliable business communication.',
      id: 'svc-email'
    },
    {
      faIcon: 'fa-solid fa-database',
      title: 'Database Hosting & Configuration',
      desc: 'Secure, optimized and scalable database hosting and configuration for your applications.',
      id: 'svc-database'
    },
    {
      faIcon: 'fa-solid fa-brain',
      title: 'AI Integration',
      desc: 'Integrate Artificial Intelligence into your applications to automate tasks and unlock new possibilities.',
      id: 'svc-ai'
    },
    {
      faIcon: 'fa-solid fa-wifi',
      title: 'ISP Services',
      desc: 'Reliable internet connectivity packages tailored for homes and businesses. Stay connected with fast and affordable internet.',
      id: 'svc-isp'
    },
    {
      faIcon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Vibe Coding',
      desc: 'AI-assisted rapid development — describe your idea and we build it at lightning speed using cutting-edge AI coding tools. Faster delivery, lower cost.',
      id: 'svc-vibe'
    },
  ];

  openInquiry(service: Service) {
    const subject = encodeURIComponent(`Inquiry: ${service.title}`);
    const body = encodeURIComponent(`Hello Tryaxel Forge,\n\nI would like to inquire about your ${service.title} service.\n\nPlease provide more information.\n\nThank you.`);
    window.open(`mailto:info@tryaxelforge.co.zw?subject=${subject}&body=${body}`, '_blank');
  }
}
