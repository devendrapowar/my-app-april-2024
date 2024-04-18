import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input() title: string = '';
  public search: string = 'dev';

  constructor() {
    console.log(this.title);
  }

  ngOnInit(): void {
    // console.log('on init');
  }

  ngDoCheck(): void {
    // console.log('do check');
  }

  ngAfterContentInit(): void {
    // console.log('after content init');
  }
  
  ngAfterContentChecked(): void {
    // console.log('after content checked');
  }

  ngAfterViewInit(): void {
    console.log('after view init')
  }

  ngAfterViewChecked(): void {
    // console.log('after view checked')
  }
  test() {
    console.log('test', this.search)
  }

}
