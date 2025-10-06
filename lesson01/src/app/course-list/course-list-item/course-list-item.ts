import {Component, input} from '@angular/core';
import {Course} from '../../course';

@Component({
  selector: 'app-course-list-item',
  imports: [],
  templateUrl: './course-list-item.html',
  styleUrl: './course-list-item.css'
})
export class CourseListItem {
  public course = input.required<Course>()
}
