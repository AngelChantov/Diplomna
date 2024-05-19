import {AfterViewInit, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-german',
  standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './german.component.html',
  styleUrl: './german.component.css'
})
export class GermanComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }

}
