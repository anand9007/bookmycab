import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  @ViewChild('featureSection') featureSection!: ElementRef;

  scrollToFeatures() {
    this.featureSection.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
