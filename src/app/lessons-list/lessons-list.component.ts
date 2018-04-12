import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LessonsService } from "../shared/lessons.service";
import { Lesson } from "../shared/lesson.model";

@Component({
  selector: "app-lessons-list",
  templateUrl: "./lessons-list.component.html",
  styleUrls: ["./lessons-list.component.css"]
})
export class LessonsListComponent implements OnInit {

  lessons: Lesson[];

  constructor(private service: LessonsService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.lessons = this.service.getAll();
  }

  onCreate() {
    this.router.navigate(["lessons", "create"]);
  }

  onEdit(lesson: Lesson) {
    this.router.navigate(["lessons", "edit", lesson.id]);
  }

  onDelete(lesson: Lesson) {
    this.service.delete(lesson.id);
    this.refresh();
  }

}
