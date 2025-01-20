import { Component } from '@angular/core';
// angularでaframe, arjsを使う
// https://github.com/jeromeetienne/AR.js/issues/379
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const aframe = (window as any).AFRAME;

@Component({
  selector: 'app-marker',
  imports: [],
  templateUrl: './marker.component.html',
  styleUrl: './marker.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkerComponent {

}
