import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonsService } from "../shared/lessons.service";
import { Lesson } from "../shared/lesson.model";

@Component({
  selector: "app-lesson-editor",
  templateUrl: "./lesson-editor.component.html",
  styleUrls: ["./lesson-editor.component.css"]
})
export class LessonEditorComponent implements OnInit {
  lesson: Lesson;

  constructor(private service: LessonsService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id: number = +this.currentRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(id);
    else {
      this.lesson = new Lesson();
    }
  }

  onCancel() {
    this.goToList();
  }

  onSave() {
    if (this.lesson.id) {
      this.service.update(this.lesson);
    } else {
      this.service.create(this.lesson);
    }
  }

  goToList() {
    this.router.navigate([".."]);
  }
}
