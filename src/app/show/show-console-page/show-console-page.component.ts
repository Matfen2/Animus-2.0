import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-console-page',
  templateUrl: './show-console-page.component.html',
  styleUrls: ['./show-console-page.component.css'],
})
export class ShowConsolePageComponent implements OnInit {
  worldId!: number;
  worldDetails: any;

  constructor(private routes: ActivatedRoute) {}

  worldData = [
    {
      id: 1,
      background: '#000dc9',
      firstConsole: '/assets/picts/ps5ConsoleOne.jpg',
      secondConsole: '/assets/picts/ps5ConsoleTwo.jpg',
      firstName: 'PS5 Standard Edition',
      secondName: 'PS5 Digital Edition',
      features:
        "Dotée d'un CPU Octa-Core AMD cadencé à 3.5GHz épaulé par 16 Go de RAM GDDR6 et d'un GPU AMD RDNA 2. La PS5 mise beaucoup sur la qualité de ces jeux en termes de graphismes, d'immersion et d'écritures",
      firstPositif: 'Retour Haptique via la Dualsense',
      secondPositif: 'Capture De Vidéo de Gameplay',
      thirdPositif: 'Jeux Exclusifs de Qualié',
      firstNegatif: 'SSD Limité',
      secondNegatif: 'Taille de la Console',
      thirdNegatif: 'Pas de rétrocompatibilité des jeux PS3, PS2, PS1',
      firstGame: '/assets/picts/ps5GameOne.jpg',
      secondGame: '/assets/picts/ps5GameTwo.png',
      thirdGame: '/assets/picts/ps5GameThree.png',
      fourGame: '/assets/picts/ps5GameFour.jpg',
    },
    {
      id: 2,
      background: '#086300',
      firstConsole: '/assets/picts/xboxSerieXConsoleOne.png',
      secondConsole: '/assets/picts/xboxSerieXConsoleTwo.png',
      firstName: 'Xbox Serie X',
      secondName: 'Xbox Serie S',
      features:
        "Dotée d'un CPU Octa-Core AMD cadencé à 3.8GHz épaulé par 16 Go de RAM GDDR6 et d'un GPU AMD RDNA 2. La Xbox Serie X mise beaucoup sur l'accessibilité de ces jeux via le Xbox Game Pass, sur la diversification de ces jeux en achetant plusieurs studios",
      firstPositif: 'SSD Ultra Rapide & Quick Resume',
      secondPositif: 'Xbox Game Pass & Rétrocompatibilité',
      thirdPositif: 'Plus puissante que la PS5',
      firstNegatif: 'Mauvaises captures de gameplay',
      secondNegatif: 'Pas de nouveautés majeures',
      thirdNegatif: 'Des jeux diversifiés mais moins marquants',
      firstGame: '/assets/picts/xboxSerieXGameOne.jpg',
      secondGame: '/assets/picts/xboxSerieXGameTwo.jpg',
      thirdGame: '/assets/picts/xboxSerieXGameThree.jpg',
      fourGame: '/assets/picts/xboxSerieXGameFour.jpg',
    },
    {
      id: 3,
      background: '#a80202',
      firstConsole: '/assets/picts/nintendoConsoleOne.png',
      secondConsole: '/assets/picts/nintendoConsoleTwo.png',
      firstName: 'Nintendo Switch',
      secondName: 'Nintendo Switch Oled',
      features:
        "Dotée d'un CPU 4 x ARM Cortex-A57 épaulé d'un 4 Go de RAM et d'un GPU NVIDIA Maxwell 2nd gen",
      firstPositif: 'Meilleure Console Hybride',
      secondPositif: 'Des Joy-Cons ergonomiques, bien pensés',
      thirdPositif: 'Les Zelda et les Marios',
      firstNegatif: 'Puissance graphique et technique inférieure',
      secondNegatif: 'Autonomie de la console faible en mode portable',
      thirdNegatif: 'Absence de services multimédia (Youtube, Netflix, etc...)',
      firstGame: '/assets/picts/nintendoGameOne.png',
      secondGame: '/assets/picts/nintendoGameTwo.png',
      thirdGame: '/assets/picts/nintendoGameThree.png',
      fourGame: '/assets/picts/nintendoGameFour.png',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.worldId = +params['id'];
      this.worldDetails = this.worldData.find(
        (console) => console.id === this.worldId
      );
    });
  }
}
