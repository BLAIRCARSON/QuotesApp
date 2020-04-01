import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Blaircarson', 'It always gets better Believe!'),
    new Quote(2, 'Blaircarson', 'It always gets better Believe!'),
    new Quote(3, 'Blaircarson', 'It always gets better Believe!'),
    new Quote(4, 'Blaircarson', 'It always gets better Believe!'),
    new Quote(5, 'Blaircarson', 'It always gets better Believe!'),
    new Quote(6, 'Blaircarson', 'It always gets better Believe!'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
