import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
   standalone: true,
  imports: [ Header, Sidebar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
