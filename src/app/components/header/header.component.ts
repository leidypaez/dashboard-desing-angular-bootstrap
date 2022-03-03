import { Component, ElementRef, OnInit } from '@angular/core';
ElementRef
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    let barra = document.createElement("script");
    barra.type = "text/javascript";
    barra.src = "./index.js";
    this.elementRef.nativeElement.appendChild(barra);
  }

}
