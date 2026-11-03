import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  skills: string[];
  socials: { faIcon: string; label: string; href: string; color: string }[];
  id: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  members: TeamMember[] = [
    {
      name: 'Simbarashe Sandi',
      role: 'Founder & CEO · Software Engineer',
      bio: 'First class honours graduate in Software Engineering from Harare Institute of Technology (HIT). Visionary leader and seasoned software engineer with deep expertise in full-stack development, AI integration, and digital transformation. Passionate about forging intelligent solutions that drive business growth.',
      photo: 'assets/images/simbarashe.jpg',
      skills: ['Angular', 'Spring Boot', 'Flutter', 'Python', 'AI/ML', 'System Architecture'],
      socials: [
        {
          faIcon: 'fa-brands fa-linkedin-in',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/simbarashe-sandi/',
          color: '#0A66C2'
        },
        {
          faIcon: 'fa-brands fa-facebook-f',
          label: 'Facebook',
          href: 'https://www.facebook.com/simbarashe.sandi.5',
          color: '#1877F2'
        },
        {
          faIcon: 'fa-solid fa-envelope',
          label: 'Email',
          href: 'mailto:simbarashesandi@gmail.com',
          color: '#EA4335'
        },
        {
          faIcon: 'fa-brands fa-whatsapp',
          label: 'WhatsApp',
          href: 'https://wa.me/263786795902',
          color: '#25D366'
        },
      ],
      id: 'member-simbarashe'
    }
  ];
}
