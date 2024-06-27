import { Component, Output, input, output, signal } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from '../ticket.model';

@Component({
    selector: 'app-ticket',
    standalone: true,
    templateUrl: './ticket.component.html',
    styleUrl: './ticket.component.css',
    imports: [NewTicketComponent]
})
export class TicketComponent {
    // ticket=input.required<Ticket>({alias:'data'});  bad practice
    // data=input.required<Ticket>({transform:(value)=>});
    data=input.required<Ticket>();
    // @Output('<aliasName>')
    close=output();
    detailsVisible=signal(false);
    onToggleDetails(){
        // this.detailsVisible.set(!this.detailsVisible())
        this.detailsVisible.update((wasVisible)=>!wasVisible)
    }
    onMarkAsCompleted(){
        this.close.emit()
    }
}
