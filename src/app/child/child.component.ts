import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() data: string = '';
  @Output() childClick: EventEmitter<any> = new EventEmitter();

  onChildClick() {
    console.log('on child click')
    const obj = {name: 'dev'}
    this.childClick.emit(obj);
  }

  childFn() {
    console.log('child fn calling from parent');
  }
}
