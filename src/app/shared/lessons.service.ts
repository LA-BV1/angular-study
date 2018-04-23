import { Injectable } from "@angular/core";

import { Lesson } from "./lesson.model";


@Injectable()
export class LessonsService {

    constructor() { }
    data = [ { id: 1, name: 'first', completed: true } ];

    getAll = () => this.data;

    getById = (id: number) => this.data.find(i => i.id === id );

    create = (lesson: Lesson) => this.data.push({...lesson, id: this.data.length + 1 });

    update = (lesson: Lesson) => {
        return this.data.map(i => {
            if (i.id === lesson.id) {
                i.id = lesson.id;
                i.name = lesson.name;
                i.completed = lesson.completed;
            }
        });
    }

    delete = (id: number) => {
        const toDelete = this.getById(id);
        this.data.splice(this.data.indexOf(toDelete), 1);
    }
}
