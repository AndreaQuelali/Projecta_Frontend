import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.html'
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input({ transform: booleanAttribute }) loading = false;
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input() icon?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get buttonClasses(): string {
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';

    const variantClasses = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm',
      secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500 shadow-sm',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm',
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-xs gap-1.5',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-2.5',
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]}`;
  }
}
