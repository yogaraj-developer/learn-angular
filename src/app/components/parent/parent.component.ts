import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})

export class ParentComponent {

  @Input() data: any;
  @Output() name1 = new EventEmitter();
  appName: string = '';

  send(param: any) {
    this.name1.emit(param);
  }

}
