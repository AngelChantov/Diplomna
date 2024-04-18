import {AfterViewInit, Component} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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
