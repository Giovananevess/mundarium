// coffe.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.css']
})
export class CoffeComponent {
  rotateOption(event: MouseEvent) {
    const card = event.currentTarget as HTMLDivElement;
    card.style.transform = `rotate(45deg)`; // You can adjust the rotation angle as needed
  }
}
