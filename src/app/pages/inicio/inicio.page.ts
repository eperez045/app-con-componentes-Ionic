import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componente: Componente[] = [
    {
      icon: 'american-football',
      name: 'action-sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'ice-cream',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off',
      name: 'button',
      redirectTo: '/button'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
