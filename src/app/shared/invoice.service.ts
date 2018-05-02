import { Injectable } from '@angular/core';
import { Invoice } from './invoice.model';

@Injectable()
export class InvoiceService {
    constructor() { }
    data = [
        { id: 1, name: 'first', completed: false,  description: 'Lorem Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 2, name: 'first2', completed: true,  description: 'Lorem 3 Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 3, name: 'first3', completed: false,  description: 'Lorem 2 Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 4, name: 'first4', completed: true,  description: 'Lorem Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 5, name: 'first5', completed: true,  description: 'Lorem Ipsum is simply dummy text of the printing and trem Ipsum.' }
    ];

    getAll = () => this.data;

    getById = (id: number) => this.data.find(i => i.id === id );

    create = (invoice: Invoice) => this.data.push({...invoice, id: this.data.length + 1 });

    update = (invoice: Invoice) => {
        return this.data.map(i => {
            if (i.id === invoice.id) {
                i.id = invoice.id;
                i.name = invoice.name;
                i.completed = invoice.completed;
                i.description = invoice.description;
            }
        });
    }

    delete = (id: number) => {
        const toDelete = this.getById(id);
        this.data.splice(this.data.indexOf(toDelete), 1);
    }
}
