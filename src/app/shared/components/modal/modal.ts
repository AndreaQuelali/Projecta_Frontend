import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Button } from '../button/button';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, Button, LucideAngularModule],
  templateUrl: './modal.html'
})
export class Modal {
  @Input() title: string = '';
  @Input({ transform: booleanAttribute }) isOpen = false;
  @Input() saveLabel: string = 'Guardar';
  @Input() cancelLabel: string = 'Cancelar';
  @Input({ transform: booleanAttribute }) loading = false;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onSave() {
    this.save.emit();
  }

  onCancel() {
    this.cancel.emit();
    this.onClose();
  }
}
