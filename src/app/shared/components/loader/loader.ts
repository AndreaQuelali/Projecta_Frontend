import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.html'
})
export class Loader {
  @Input() type: 'spinner' | 'progress' = 'spinner';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: string = 'text-indigo-600';
  @Input() progress: number = 0;

  get spinnerClasses(): string {
    const sizes = {
      sm: 'h-4 w-4 border-2',
      md: 'h-8 w-8 border-3',
      lg: 'h-12 w-12 border-4',
    };
    return `${sizes[this.size]} border-t-transparent animate-spin rounded-full`;
  }
}
