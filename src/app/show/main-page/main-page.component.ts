import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  showConsole = false;
  mainBackground = '/assets/picts/videoGameBackground.jpg';

  consoles = [
    {
      id: 1,
      pict: '/assets/picts/ps5Logo.jpg',
      wallpaper: '/assets/picts/ps5Background.jpg',
    },
    {
      id: 2,
      pict: '/assets/picts/xboxSerieXLogo.jpg',
      wallpaper: '/assets/picts/xboxSerieXBackground.jpg',
    },
    {
      id: 3,
      pict: '/assets/picts/nintendoSwitchLogo.jpg',
      wallpaper: '/assets/picts/nintendoSwitchBackground.jpg',
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  enterConsole(image: string) {
    this.mainBackground = 'url(' + image + ')';
    this.showConsole = true;
  }

  hideConsole() {
    this.mainBackground = 'url(/assets/picts/videoGameBackground.jpg)';
    this.showConsole = false;
  }
}
