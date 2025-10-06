import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [];

  setCourses(courses: Course[]) {
    this.courses = courses;
  }

  getCourses(): Course[] {
    return this.courses;
  }
}
