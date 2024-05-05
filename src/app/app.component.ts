import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from 'src/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hyundai_lab_test';
  showNavigation: boolean = false
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.showNavigation = sessionStorage.getItem('token') ? true : false
      }
    });
  }
}
