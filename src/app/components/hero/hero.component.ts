import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  tags: string[];
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  services: ServiceItem[] = [
    {
      id: 'svc-website',
      title: 'Website Development',
      desc: 'Modern, responsive and SEO-friendly websites that represent your brand and convert visitors into customers.',
      icon: 'fa-solid fa-globe',
      tags: ['Responsive UI', 'SEO Optimized', 'High Conversion']
    },
    {
      id: 'svc-webapp',
      title: 'Web Application Development',
      desc: 'Custom web applications tailored to streamline your business processes and boost enterprise productivity.',
      icon: 'fa-solid fa-code',
      tags: ['Full-Stack', 'Interactive', 'Cloud Architecture']
    },
    {
      id: 'svc-mobile',
      title: 'Mobile App Development',
      desc: 'Cross-platform mobile apps for Android & iOS using Flutter that deliver seamless native experiences.',
      icon: 'fa-solid fa-mobile-screen-button',
      tags: ['Android & iOS', 'Flutter', 'Offline-First']
    },
    {
      id: 'svc-hosting',
      title: 'Web Application Hosting',
      desc: 'Fast, secure and reliable hosting to keep your web applications running 24/7 with 99.9% uptime.',
      icon: 'fa-solid fa-cloud',
      tags: ['99.9% Uptime', 'SSL Security', 'Auto Backups']
    },
    {
      id: 'svc-domain',
      title: 'Domain Registration',
      desc: 'Register your perfect domain name (.co.zw, .com, .net, .org) and establish your trusted digital presence.',
      icon: 'fa-solid fa-link',
      tags: ['.co.zw Domains', 'Instant Setup', 'DNS Management']
    },
    {
      id: 'svc-email',
      title: 'Business Email Configuration',
      desc: 'Professional email setup with your custom domain for secure, trustworthy business communication.',
      icon: 'fa-solid fa-envelope',
      tags: ['Custom Mailbox', 'Spam Protection', 'Mobile Sync']
    },
    {
      id: 'svc-database',
      title: 'Database Hosting & Configuration',
      desc: 'Secure, optimized and scalable database hosting and configuration for your mission-critical applications.',
      icon: 'fa-solid fa-database',
      tags: ['PostgreSQL & MySQL', 'High Performance', 'Snapshots']
    },
    {
      id: 'svc-ai',
      title: 'AI Integration',
      desc: 'Integrate Artificial Intelligence into your applications to automate workflows, analyze data, and unlock new value.',
      icon: 'fa-solid fa-brain',
      tags: ['LLM Chatbots', 'Computer Vision', 'Automation']
    },
    {
      id: 'svc-isp',
      title: 'ISP Services',
      desc: 'Reliable internet connectivity packages tailored for homes and businesses. Stay connected with fast, affordable internet.',
      icon: 'fa-solid fa-wifi',
      tags: ['High Speed', 'Fiber & Wireless', '24/7 Monitoring']
    },
    {
      id: 'svc-vibe',
      title: 'Vibe Coding',
      desc: 'AI-assisted rapid development — describe your idea and we build it at lightning speed using cutting-edge AI tools.',
      icon: 'fa-solid fa-wand-magic-sparkles',
      tags: ['Rapid Prototyping', 'AI-Powered Sprints', 'Agile Delivery']
    }
  ];

  currentServiceIndex = 0;
  fadeState: 'fade-in' | 'fade-out' = 'fade-in';
  isPaused = false;

  private cycleTimer: any;
  private resizeListener?: () => void;

  stats = [
    { value: '5+', label: 'Projects Delivered' },
    { value: '3+', label: 'Active Products' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  get currentService(): ServiceItem {
    return this.services[this.currentServiceIndex];
  }

  ngOnInit() {
    this.startCardCycle();
    this.initParticles();
  }

  ngOnDestroy() {
    clearTimeout(this.cycleTimer);
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  /**
   * Card animation cycle:
   * 1. Card fades in slowly (1.2s CSS transition).
   * 2. Card stays visible for 3.5s for comfortable reading.
   * 3. Card fades out slowly (1.2s CSS transition).
   * 4. Waits 2 seconds (completely faded out / empty pause).
   * 5. Switch to next service and fade in slowly.
   */
  startCardCycle() {
    clearTimeout(this.cycleTimer);

    // Visible duration: 3.5s after fade-in
    const visibleDuration = 3500;
    const fadeOutDuration = 1200; // time it takes to slowly fade out
    const waitBetweenCards = 2000; // wait 2 seconds before the next card comes

    this.cycleTimer = setTimeout(() => {
      this.checkAndFadeOut(visibleDuration, fadeOutDuration, waitBetweenCards);
    }, visibleDuration);
  }

  private checkAndFadeOut(visibleDuration: number, fadeOutDuration: number, waitBetweenCards: number) {
    if (this.isPaused) {
      // If user is hovering to read, re-check in 1 second
      this.cycleTimer = setTimeout(() => {
        this.checkAndFadeOut(visibleDuration, fadeOutDuration, waitBetweenCards);
      }, 1000);
      return;
    }

    // Step 1: Fade out slowly
    this.fadeState = 'fade-out';

    // Step 2: Once faded out (1.2s), wait 2 full seconds with card hidden
    this.cycleTimer = setTimeout(() => {
      // Step 3: Wait 2 seconds before the next comes
      this.cycleTimer = setTimeout(() => {
        // Step 4: Advance to next service and fade in slowly
        this.currentServiceIndex = (this.currentServiceIndex + 1) % this.services.length;
        this.fadeState = 'fade-in';
        // Continue the cycle
        this.startCardCycle();
      }, waitBetweenCards);
    }, fadeOutDuration);
  }

  nextService() {
    this.triggerManualSwitch((this.currentServiceIndex + 1) % this.services.length);
  }

  prevService() {
    const prevIdx = (this.currentServiceIndex - 1 + this.services.length) % this.services.length;
    this.triggerManualSwitch(prevIdx);
  }

  goToService(index: number) {
    if (index === this.currentServiceIndex) return;
    this.triggerManualSwitch(index);
  }

  private triggerManualSwitch(targetIndex: number) {
    clearTimeout(this.cycleTimer);
    this.fadeState = 'fade-out';

    // Transition smoothly to chosen card
    setTimeout(() => {
      this.currentServiceIndex = targetIndex;
      this.fadeState = 'fade-in';
      this.startCardCycle();
    }, 400);
  }

  setHover(hovered: boolean) {
    this.isPaused = hovered;
  }

  openServiceInquiry(service: ServiceItem) {
    const subject = encodeURIComponent(`Inquiry: ${service.title}`);
    const body = encodeURIComponent(
      `Hello Tryaxel Forge,\n\nI am interested in your ${service.title} service.\n\nPlease share more details and a quote.\n\nThank you!`
    );
    window.open(`mailto:info@tryaxelforge.co.zw?subject=${subject}&body=${body}`, '_blank');
  }

  initParticles() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    this.resizeListener = resize;
    window.addEventListener('resize', resize);

    const particles: any[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 0, ${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 107, 0, ${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    animate();
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
