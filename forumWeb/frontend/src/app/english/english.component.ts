import {AfterViewInit, Component} from '@angular/core';
import {initFlowbite} from "flowbite";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './english.component.html',
  styleUrl: './english.component.css'
})
export class EnglishComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }

}
