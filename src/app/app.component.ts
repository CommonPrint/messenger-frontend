import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbToast
} from "@ng-bootstrap/ng-bootstrap";

import {fontAwesomeIcons} from "./shared/font-awesome-icons";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionBody],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'messenger-frontend';

  private faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }


  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

}
