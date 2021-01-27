import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Helper } from 'src/app/utils/helper';

const HEROES = [
  { id: 1, name: 'a', price: 2000000 },
  { id: 2, name: 'b', price: 4000000 },
  { id: 5, name: 'c', price: 6000000 },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public helper = Helper;
  public valueInputNumber: number = 1;
  public totalPrice: number = 0;
  public listPrice: any[] = HEROES;
  public heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}

  ngOnChange(): void {}

  /**
   * Handle minus value input
   * @param index
   */
  quantityMinus(index: number) {
    if (this.valueInputNumber - 1 >= 0) this.valueInputNumber -= 1;
    // this.setPrice(index);
  }

  /**
   * Handle plus value input
   * @param index
   */
  quantityPlus(e: any, index: number) {
    e.path[1].childNodes[1].value++;
    let valueInput = e.path[1].childNodes[1].value;

    this.setPrice(valueInput, index);
  }

  setPrice(item: number, index: number) {
    this.listPrice[index] = item * 2000;
  }

  handleTotalPrice(value: number) {
    this.totalPrice += value;
  }
}
