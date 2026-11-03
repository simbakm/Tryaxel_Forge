import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  services = [
    'Website Development',
    'Web Application Development',
    'Mobile App Development',
    'Web Application Hosting',
    'Domain Registration',
    'Business Email Configuration',
    'Database Hosting & Configuration',
    'AI Integration',
    'ISP Services',
    'General Inquiry'
  ];

  submitted = signal(false);

  submitForm() {
    const subject = encodeURIComponent(`Website Inquiry from ${this.formData.name}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\nService: ${this.formData.service}\n\nMessage:\n${this.formData.message}`
    );
    window.open(`mailto:info@tryaxelforge.co.zw?subject=${subject}&body=${body}`, '_blank');
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 5000);
  }

  contactMethods = [
    { icon: '📞', label: 'Call / WhatsApp', value: '+263 786 795 902', href: 'tel:+263786795902' },
    { icon: '✉️', label: 'Email',           value: 'info@tryaxelforge.co.zw', href: 'mailto:info@tryaxelforge.co.zw' },
    { icon: '🌐', label: 'Website',         value: 'www.tryaxelforge.co.zw', href: 'https://www.tryaxelforge.co.zw' },
    { icon: '📘', label: 'Facebook',        value: '@TryaxelForge', href: 'https://facebook.com/TryaxelForge' },
  ];
}
