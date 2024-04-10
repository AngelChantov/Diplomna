import {AfterViewInit, Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
