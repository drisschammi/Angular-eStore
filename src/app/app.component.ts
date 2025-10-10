import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CatnavigationComponent } from "./components/catnavigation/catnavigation.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CatnavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
