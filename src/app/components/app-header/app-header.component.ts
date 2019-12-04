import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  public logic: any;

  constructor(private renderer: Renderer2) {
    this.logic = true;
  }


  ngOnInit() {

  }

  @ViewChild('navBox', { static: false }) navBox: ElementRef;

  menuOpen() {

    if (this.logic == true) {
      this.renderer.addClass(this.navBox.nativeElement, "displayOn");
      this.logic = false;
    } else {
      this.renderer.removeClass(this.navBox.nativeElement, "displayOn");
      this.logic = true;
    }

  }

}
