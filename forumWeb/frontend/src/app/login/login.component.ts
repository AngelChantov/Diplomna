import {AfterViewInit, Component} from '@angular/core';
import {initFlowbite} from "flowbite";
import {RouterOutlet} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {
  title = 'frontend';
  constructor(private router: Router) {}
  navigateToRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }

}
