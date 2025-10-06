import { Routes } from '@angular/router';
import {Box} from './home-page/box/box';
import {SomePage} from './some-page/some-page';
import {CourseList} from './course-list/course-list';

export const routes: Routes = [
  {
    path: "",
    component: Box,
    title: "Home page"
  },
  {
    path: "some-page",
    component: SomePage,
    title: "Some page"
  },
  {
    path: "courses",
    component: CourseList,
    title: "Courses"
  }
];
