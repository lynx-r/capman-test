import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {

  theme = 'default';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    public location: Location
  ) {
  }

  ngOnInit(): void {
  }

  onToggleTheme() {
    this.renderer.removeClass(this.document.body, 'default');
    this.renderer.removeClass(this.document.body, 'unicorn-dark-theme');
    this.theme = this.theme === 'default' ? 'unicorn-dark-theme' : 'default';
    this.renderer.addClass(this.document.body, this.theme);

  }
}
