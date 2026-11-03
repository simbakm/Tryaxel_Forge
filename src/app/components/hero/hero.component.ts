import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  words = ['Digital Solutions', 'Web Applications', 'Mobile Apps', 'AI Systems', 'ISP Services'];
  currentWord = 0;
  displayText = '';
  isDeleting = false;
  typeInterval: any;

  stats = [
    { value: '5+', label: 'Projects Delivered' },
    { value: '3+', label: 'Active Products' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  ngOnInit() {
    this.startTyping();
    this.initParticles();
  }

  ngOnDestroy() {
    clearInterval(this.typeInterval);
  }

  startTyping() {
    const type = () => {
      const word = this.words[this.currentWord];
      if (this.isDeleting) {
        this.displayText = word.substring(0, this.displayText.length - 1);
      } else {
        this.displayText = word.substring(0, this.displayText.length + 1);
      }
      let delay = this.isDeleting ? 60 : 100;
      if (!this.isDeleting && this.displayText === word) {
        delay = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.displayText === '') {
        this.isDeleting = false;
        this.currentWord = (this.currentWord + 1) % this.words.length;
        delay = 400;
      }
      setTimeout(type, delay);
    };
    type();
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
    window.addEventListener('resize', resize);

    const particles: any[] = [];
    for (let i = 0; i < 60; i++) {
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

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 107, 0, ${0.08 * (1 - dist / 120)})`;
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
