import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export type ToastType = 'success' | 'error' | 'info' | 'warning';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './toast.html'
})
export class Toast implements OnInit {
  @Input() type: ToastType = 'info';
  @Input() message: string = '';
  @Input() duration: number = 3000;
  @Input() position: ToastPosition = 'top-right';

  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.duration > 0) {
      setTimeout(() => this.onClose(), this.duration);
    }
  }

  onClose(): void {
    this.close.emit();
  }

  get containerClasses(): string {
    const positions = {
      'top-right': 'top-5 right-5',
      'top-left': 'top-5 left-5',
      'bottom-right': 'bottom-5 right-5',
      'bottom-left': 'bottom-5 left-5',
    };

    return `fixed z-[100] transition-all duration-300 transform ${positions[this.position]}`;
  }

  get toastClasses(): string {
    const types = {
      success: 'bg-emerald-50 border-emerald-100 text-emerald-800',
      error: 'bg-red-50 border-red-100 text-red-800',
      info: 'bg-blue-50 border-blue-100 text-blue-800',
      warning: 'bg-amber-50 border-amber-100 text-amber-800',
    };

    return `flex items-center gap-3 px-5 py-4 rounded-2xl border shadow-xl min-w-[320px] max-w-md ${types[this.type]}`;
  }

  get iconClasses(): string {
    const icons = {
      success: 'text-emerald-500 bg-emerald-100',
      error: 'text-red-500 bg-red-100',
      info: 'text-blue-500 bg-blue-100',
      warning: 'text-amber-500 bg-amber-100',
    };
    return `flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl ${icons[this.type]}`;
  }
}
