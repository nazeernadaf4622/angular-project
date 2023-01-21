import { style } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

// localization module import
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isCollapsed = false;
  @Output() newItemEvent = new EventEmitter<string>();
  selectedLanguage: string = 'English';

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  constructor(public translate: TranslateService) {
    const currentLanguage = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  ngOnInit() {
    this.newItemEvent.emit(this.changeColo);

    const btn_menu = document.querySelector('.navbar-toggler-sidebutton');
    const side_bar = document.querySelector('.sidebar');

    btn_menu?.addEventListener('click', function () {
      side_bar?.classList.toggle('expand');
      if (side_bar?.classList.contains('expand')) {
        side_bar?.classList.remove('side-drawer');
      } else {
        side_bar?.classList.add('side-drawer');
      }

      changebtn();
    });

    function changebtn() {
      if (side_bar?.classList.contains('expand')) {
        btn_menu?.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        btn_menu?.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    }

    const header_toolbar_button = document.querySelector(
      '.header-toolbar-button'
    );
    const cdk_overlay_bounding_box = document.querySelector(
      '.cdk-overlay-connected-position-bounding-box'
    );
    header_toolbar_button?.addEventListener('click', function () {
      if (cdk_overlay_bounding_box?.classList.contains('display-popup-icons')) {
        cdk_overlay_bounding_box?.classList.remove('display-popup-icons');
      } else {
        cdk_overlay_bounding_box?.classList.add('display-popup-icons');
      }
    });
  }
  togglePanel(collapseButton: HTMLElement, collapsePanel: HTMLElement) {
    if (this.isCollapsed) {
      collapseButton.classList.add('collapsed');
      collapsePanel.classList.remove('show');
    } else {
      collapsePanel.classList.add('show');
      collapseButton.classList.remove('collapsed');
    }
    this.isCollapsed = !this.isCollapsed;
  }

  toggle = true;
  status = 'pink';
  changeColo: any = 'linear-gradient(90deg,#4a148c,#880e4f)';

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'pinkcolor' : 'greycolor';
  }

  changeColor(event: any) {
    this.changeColo = event.target.value;
    this.newItemEvent.emit(this.changeColo);
  }

  toggleEvent(value: any) {
    if (value) {
      this.changeColo = '#0aa5df';
    } else {
      this.changeColo = 'linear-gradient(90deg,#4a148c,#880e4f)';
    }
    this.newItemEvent.emit(this.changeColo);
  }

  selectedLang(lang: string, selectedlang: string) {
    this.translate.use(lang);
    this.selectedLanguage = selectedlang;
  }
}
