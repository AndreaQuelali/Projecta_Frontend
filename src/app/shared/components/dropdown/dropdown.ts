import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, signal, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { DropdownOption } from '../../interfaces/dropdown-option.interface';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dropdown.html'
})
export class Dropdown {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string = 'Seleccionar opción';
  @Input() label: string = '';
  @Input() multiple: boolean = false;
  @Input() selectedIds: (string | number)[] = [];

  @Output() selectionChange = new EventEmitter<DropdownOption[]>();

  isOpen = signal<boolean>(false);

  constructor(private elementRef: ElementRef) { }

  toggle() {
    this.isOpen.update(v => !v);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  isSelected(option: DropdownOption): boolean {
    return this.selectedIds.includes(option.id);
  }

  selectOption(option: DropdownOption) {
    if (option.disabled) return;

    if (this.multiple) {
      if (this.isSelected(option)) {
        this.selectedIds = this.selectedIds.filter(id => id !== option.id);
      } else {
        this.selectedIds = [...this.selectedIds, option.id];
      }
    } else {
      this.selectedIds = [option.id];
      this.isOpen.set(false);
    }

    const selectedOptions = this.options.filter(opt => this.selectedIds.includes(opt.id));
    this.selectionChange.emit(selectedOptions);
  }

  get selectedLabels(): string {
    const selected = this.options.filter(opt => this.isSelected(opt));
    if (selected.length === 0) return this.placeholder;
    if (this.multiple) return `${selected.length} seleccionados`;
    return selected[0].label;
  }
}
