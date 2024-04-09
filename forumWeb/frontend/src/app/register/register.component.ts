import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements AfterViewInit {
  title = 'frontend';
  constructor(private router: Router) {}
  navigateToLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}



