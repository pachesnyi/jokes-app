import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  isDark: boolean = false;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.renderer[this.isDark ? 'addClass' : 'removeClass'](document.body, 'dark-theme')
    // this.renderer.setAttribute(bod)
  }

}
