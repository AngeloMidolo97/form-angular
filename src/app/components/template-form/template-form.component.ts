import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-form',
    templateUrl: './template-form.component.html',
    styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

    @ViewChild('form', { static: true }) form!: NgForm;

    hero: any = {
        nome: '',
        alterego: '',
        superpotere: '',
        nemico: '',
        pianeta: '',
        debolezza: ''
    }

    constructor() { }

    ngOnInit(): void {
    }

    submit(form: NgForm) {
        console.log('form inviato: ', form.value);
        this.form.reset();
    }

}
