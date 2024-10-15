import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Iposts } from '../../models/Iposts';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() post:Iposts = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }
  
}