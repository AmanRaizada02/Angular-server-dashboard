import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent,FormsModule]
})
export class NewTicketComponent implements OnInit, AfterViewInit {
    @ViewChild('form') private form?:ElementRef<HTMLFormElement>;
    // private form=viewChild.required<ElementRef<HTMLFormElement>>('form');
    // @Output() add= new EventEmitter<{title:string;text:string}>()
    enteredTitle=''
    enteredText=''
    add=output<{title:string;text:string}>();

    ngOnInit(){
        console.log('oninit')
        console.log(this.form?.nativeElement);
    }
    ngAfterViewInit() {
        console.log('after view init')
        console.log(this.form?.nativeElement);
    }
    onSubmit(){
        // console.log('title',title)
        // console.log('ticket',ticket)
        // this.add.emit({title: title, text:ticketText});
        this.add.emit({title: this.enteredTitle, text:this.enteredText});
        // form.reset();
        // this.form?.nativeElement.reset();
        this.form?.nativeElement.reset();
    }
}
