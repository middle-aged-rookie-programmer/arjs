import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  imports: [],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {
  constructor(private router: Router) { }

  GoShowcasePage() {
    this.router.navigate(['/showcase']);
  }

  GoMarkerPage() {
    this.router.navigate(['/marker']);
  }

  GoLocaleSimplePage() {
    this.router.navigate(['/locale-simple']);
  }

  GoWebglPage() {
    this.router.navigate(['/webgl']);
  }
}
