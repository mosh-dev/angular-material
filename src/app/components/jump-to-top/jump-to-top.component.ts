import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-jump-to-top',
  templateUrl: './jump-to-top.component.html',
  styleUrls: ['./jump-to-top.component.scss']
})
export class JumpToTopComponent implements OnInit, AfterViewInit {
  // @ViewChild('content') content: ElementRef;

  constructor( private elRef: ElementRef) {

   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // console.log(this.content);
  }

  jump() {
    // this.content.nativeElement.scroll(0, 0);
  }

}
