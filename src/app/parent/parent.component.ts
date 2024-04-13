import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  public parentData:string = 'I am coming from parent';
  @ViewChild('child') child: any;

  parentFu(value: any) {
    console.log('----', value);
  }

  callChild() {
    this.child.childFn();
  }
}
