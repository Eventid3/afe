import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Box} from './home-page/box/box';
import {NavigationBar} from './navigation-bar/navigation-bar';
import { Course } from './course';
import {CourseService} from './course-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Box, NavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');

  courses: Course[] = [{
    name: "Avanceret Frontend Development",
    code: "afe",
    ects: 5
  }, {
    name: "Machine Learning",
    code: "MAL",
    ects: 5
  }, {

    name: "Anvendt Funktionel Programmering",
    code: "AFP",
    ects: 5
  }]

  constructor(courseService: CourseService) {
    courseService.setCourses(this.courses);
  }
}
