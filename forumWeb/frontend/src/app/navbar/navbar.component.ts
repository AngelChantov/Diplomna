import {AfterViewInit, Component} from '@angular/core';
import {initFlowbite} from "flowbite";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
