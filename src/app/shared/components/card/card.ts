import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, ContentChild } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card.html'
})
export class Card {
  @Input() borderColor: string = 'border-gray-200';
  @Input({ transform: booleanAttribute }) border = true;
  @Input({ transform: booleanAttribute }) shadow = true;
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  @ContentChild('header') headerContent?: any;
  @ContentChild('footer') footerContent?: any;

  get hasHeader(): boolean {
    return !!this.headerContent;
  }

  get hasFooter(): boolean {
    return !!this.footerContent;
  }

  get cardClasses(): string {
    const base = 'bg-white rounded-xl overflow-hidden border transition-all duration-300';
    const shadowClass = this.shadow ? 'shadow-lg hover:shadow-xl' : 'shadow-none';

    const borderClass = this.border ? `border ${this.borderColor}` : 'border-none';

    return `${base} ${borderClass} ${shadowClass}`;
  }

  get bodyPadding(): string {
    const paddings = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };
    return paddings[this.padding];
  }
}
