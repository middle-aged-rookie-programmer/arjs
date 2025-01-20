import { Component, OnInit, OnDestroy } from '@angular/core';
// angularでaframe, arjsを使う
// https://github.com/jeromeetienne/AR.js/issues/379
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const aframe = (window as any).AFRAME;

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowcaseComponent implements OnInit, OnDestroy {
  ngOnInit(): void { }
  ngOnDestroy(): void {
    let scene = document.getElementById("scene_el")
    if (scene) { scene = null }
    let camera = document.getElementById("camera_el")
    if (camera) { camera = null }
  }
}
