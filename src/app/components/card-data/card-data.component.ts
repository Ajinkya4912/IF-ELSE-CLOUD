import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss'],
})
export class CardDataComponent implements OnInit {
  cardData: any;
  constructor(private loanServicee: LoanService) {}
  ngOnInit(): void {
    this.loanServicee.getData().subscribe(
      (data: any) => {
        this.cardData = data.top_cards;
        console.log('ghdsgvavbyfv', data);
      },
      (error) => {
        console.error('Error is .....', error);
      }
    );
  }
}
