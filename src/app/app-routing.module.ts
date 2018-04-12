import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { SettingsComponent } from "./settings/settings.component";
import { LessonEditorComponent } from "./lesson-editor/lesson-editor.component";
import { LoginPageComponent } from "./login-page/login-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "lessons", component: LessonsListComponent },
  { path: "settings", component: SettingsComponent},
  { path: "lessons/edit/:id", component: LessonEditorComponent },
  { path: "lessons/create", component: LessonEditorComponent },
  { path: "login", component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
