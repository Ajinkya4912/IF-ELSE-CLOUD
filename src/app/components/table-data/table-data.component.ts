import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  //items = [{ status: 'paid' }, { status: 'fail' }, { status: 'pending' }];

  recent_Order: any;
  newUser: any;
  status: any;
  constructor(private loanService: LoanService) {}
  item: any;
  ngOnInit(): void {
    this.loanService.getData().subscribe(
      (data: any) => {
        this.recent_Order = data.recent_orders;
        this.newUser = data.new_users;
        console.log('...............', this.recent_Order);
        console.log('New User...............', this.newUser);
        console.log('Ajinkya', this.recent_Order[0].status);
      },
      (error) => {
        console.error('Error is .....', error);
      }
    );

    const date = new Date(this.recent_Order.delivery_date);
  }
}
