import { Injectable } from "@angular/core";

import { Lesson } from "./lesson.model";


@Injectable()
export class LessonsService {

    constructor() { }
    data = [ { id: 1, name: 'first', completed: true,  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' } ];

    getAll = () => this.data;

    getById = (id: number) => this.data.find(i => i.id === id );

    create = (lesson: Lesson) => this.data.push({...lesson, id: this.data.length + 1 });

    update = (lesson: Lesson) => {
        return this.data.map(i => {
            if (i.id === lesson.id) {
                i.id = lesson.id;
                i.name = lesson.name;
                i.completed = lesson.completed;
                i.description = lesson.description;
            }
        });
    }

    delete = (id: number) => {
        const toDelete = this.getById(id);
        this.data.splice(this.data.indexOf(toDelete), 1);
    }
}
