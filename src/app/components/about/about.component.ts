import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  values = [
    { icon: 'fa-solid fa-shield-halved', title: 'Robustness',    desc: 'We build strong, secure and high-performing solutions that withstand the test of time.' },
    { icon: 'fa-solid fa-bolt',          title: 'Responsiveness', desc: 'We deliver seamless experiences across all devices and network conditions.' },
    { icon: 'fa-solid fa-bullseye',      title: 'Reliability',    desc: 'We ensure your systems are always available and trustworthy when you need them.' },
    { icon: 'fa-solid fa-rocket',        title: 'Innovation',     desc: 'We stay at the cutting edge of technology, bringing the future to your doorstep.' },
  ];

  technologies = [
    { name: 'Angular',      devicon: 'devicon-angularjs-plain colored' },
    { name: 'Spring Boot',  devicon: 'devicon-spring-plain colored' },
    { name: 'Flutter',      devicon: 'devicon-flutter-plain colored' },
    { name: 'Python',       devicon: 'devicon-python-plain colored' },
    { name: 'Laravel',      devicon: 'devicon-laravel-plain colored' },
    { name: 'Java',         devicon: 'devicon-java-plain colored' },
    { name: 'TypeScript',   devicon: 'devicon-typescript-plain colored' },
    { name: 'MySQL',        devicon: 'devicon-mysql-plain colored' },
    { name: 'Docker',       devicon: 'devicon-docker-plain colored' },
    { name: 'AI / LLMs',   devicon: 'devicon-tensorflow-original colored' },
  ];
}
