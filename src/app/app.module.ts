import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { SettingsComponent } from "./settings/settings.component";
import { LessonsService } from "./shared/lessons.service";
import { LessonEditorComponent } from "./lesson-editor/lesson-editor.component";
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsListComponent,
    SettingsComponent,
    LessonEditorComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
