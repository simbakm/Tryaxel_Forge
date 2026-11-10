import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactMethod {
  iconClass: string;
  label: string;
  value: string;
  href: string;
  color?: string;
  target?: string;
}

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

  contactMethods: ContactMethod[] = [
    {
      iconClass: 'fa-solid fa-phone',
      label: 'Call / WhatsApp',
      value: '+263 786 795 902',
      href: 'tel:+263786795902',
      color: '#FF6B00'
    },
    {
      iconClass: 'fa-solid fa-envelope',
      label: 'Email',
      value: 'info@tryaxelforge.co.zw',
      href: 'mailto:info@tryaxelforge.co.zw',
      color: '#FF6B00'
    },
    {
      iconClass: 'fa-solid fa-globe',
      label: 'Website',
      value: 'www.tryaxelforge.co.zw',
      href: 'https://www.tryaxelforge.co.zw',
      color: '#FF6B00',
      target: '_blank'
    },
    {
      iconClass: 'fa-brands fa-facebook',
      label: 'Facebook',
      value: 'Tryaxel Forge',
      href: 'https://www.facebook.com/simbarashe.sandi.5',
      color: '#1877F2',
      target: '_blank'
    },
    {
      iconClass: 'fa-solid fa-location-dot',
      label: 'Location',
      value: 'Stand Number 6, Village 16A, Wenimbe, Marondera',
      href: 'https://maps.google.com/?q=Wenimbe%20Marondera%20Zimbabwe',
      color: '#FF6B00',
      target: '_blank'
    }
  ];

  submitForm() {
    const subject = encodeURIComponent(`Website Inquiry from ${this.formData.name}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\nService: ${this.formData.service}\n\nMessage:\n${this.formData.message}`
    );
    window.open(`mailto:info@tryaxelforge.co.zw?subject=${subject}&body=${body}`, '_blank');
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 5000);
  }
}
