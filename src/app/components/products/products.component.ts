import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  icon: string;
  name: string;
  tagline: string;
  desc: string;
  status: 'coming-soon' | 'available' | 'beta';
  statusLabel: string;
  features: string[];
  id: string;
  color: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      icon: '🤖',
      name: 'Fundaxool',
      tagline: 'AI Chatbot via WhatsApp',
      desc: 'A powerful AI chatbot accessible via WhatsApp, powered by cutting-edge LLM models with menu-based input for seamless interactions. Your intelligent business assistant, always available.',
      status: 'coming-soon',
      statusLabel: 'Coming Soon',
      features: ['WhatsApp Integration', 'LLM Powered', 'Menu-based Input', 'Business Automation', '24/7 Availability'],
      id: 'prod-fundaxool',
      color: '#FF6B00'
    },
    {
      icon: '🔍',
      name: 'CLEAR',
      tagline: 'AI-Powered Litter Detection',
      desc: 'An advanced AI system for littering action detection and suspect identification. Helping communities and municipalities maintain cleaner environments through intelligent surveillance.',
      status: 'coming-soon',
      statusLabel: 'Coming Soon',
      features: ['Real-time Detection', 'Suspect Identification', 'AI-Powered Vision', 'Report Generation', 'Dashboard Analytics'],
      id: 'prod-clear',
      color: '#3B82F6'
    },
    {
      icon: '🏠',
      name: 'ZE-state',
      tagline: 'Smart Housing Platform',
      desc: 'A modern platform to advertise and find rental housing. Connecting landlords with tenants seamlessly, making the search for your perfect home effortless and efficient.',
      status: 'coming-soon',
      statusLabel: 'Coming Soon',
      features: ['Property Listings', 'Tenant Matching', 'Secure Payments', 'Virtual Tours', 'Smart Search'],
      id: 'prod-zestate',
      color: '#10B981'
    },
  ];

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '255, 107, 0';
  }

  openInquiry(product: Product) {
    const subject = encodeURIComponent(`Product Inquiry: ${product.name}`);
    const body = encodeURIComponent(`Hello Tryaxel Forge,\n\nI would like to learn more about ${product.name} — ${product.tagline}.\n\nPlease keep me updated on its availability.\n\nThank you.`);
    window.open(`mailto:info@tryaxelforge.co.zw?subject=${subject}&body=${body}`, '_blank');
  }
}
