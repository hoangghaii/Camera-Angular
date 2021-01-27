import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/utils/helper';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public helper = Helper;
  public valueInputNumber: number = 1;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Handle minus value input
   * @param event
   */
  quantityMinus(event: Event) {
    if (this.valueInputNumber - 1 >= 0) this.valueInputNumber -= 1;
  }

  /**
   * Handle plus value input
   * @param event
   */
  quantityPlus(event: Event) {
    this.valueInputNumber += 1;
  }
}
