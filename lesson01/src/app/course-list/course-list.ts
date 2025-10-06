import {Component, input} from '@angular/core';
import {CourseListItem} from './course-list-item/course-list-item';
import {Course} from '../course';
import {CourseService} from '../course-service';

@Component({
  selector: 'app-course-list',
  imports: [CourseListItem],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses: Course[];

  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
