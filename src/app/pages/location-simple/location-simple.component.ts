import { Component, OnInit, OnDestroy } from '@angular/core';
// angularでaframe, arjsを使う
// https://github.com/jeromeetienne/AR.js/issues/379
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const aframe = (window as any).AFRAME;

@Component({
  selector: 'app-location-simple',
  imports: [],
  templateUrl: './location-simple.component.html',
  styleUrl: './location-simple.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LocationSimpleComponent {
  ngOnInit(): void { }
  ngOnDestroy(): void {
    let scene = document.getElementById("scene_el")
    if (scene) { scene = null }
  }

}
