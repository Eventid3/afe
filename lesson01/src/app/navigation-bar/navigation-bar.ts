import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {
  appName: string = "angular test app";
}
