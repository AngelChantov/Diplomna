import {AfterViewInit, Component} from '@angular/core';
import {initFlowbite} from "flowbite";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
