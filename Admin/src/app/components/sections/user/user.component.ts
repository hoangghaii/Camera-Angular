import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  public formProduct !: FormGroup;
  public isOpen!: boolean;

  constructor(
    private fb :FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.setForm();
    console.log(this.listProductType.value)
  }
  setForm() {
    let list = this.formProduct.get("listProductType") as FormArray;
    this.heroes.forEach(item=>{
      let form = this.addFormProductType(item);
      list.push(form);
    })
  }
  get listProductType() : FormArray {
    return this.formProduct.get("listProductType") as FormArray
  }

  initForm() {
    this.formProduct = this.fb.group({
      listProductType : this.fb.array([])
    })
  }


  ngOnChange(): void {}

  openModal(): void {
    this.isOpen = true;
  }

  addFormProductType(item:any){
   return this.fb.group({
        id : item.id,
        nameProductType : item.name,
        image :[''],
        count :0,
        price :item.price,
        originalPrice :item.price,
        nameProduct :['']
   })
  }

  closeModal(event: any): void {
    this.isOpen = event.isOpen;
  }

  /**
   * Handle minus value input
   * @param index
   */
  quantityMinus(index: number) {
    let product = this.listProductType.controls[index].value;
    let count  =product.count;
    let originalPrice = Number(product.originalPrice);
    if(Number(count)>0){
      count = Number(count)-1
    }
    else{
      count = 0;
    }

    this.listProductType.controls[index].patchValue({
        count : count,
        price : originalPrice*count
    });
  }

  /**
   * Handle plus value input
   * @param index
   */
  quantityPlus(e: any, index: number) {
    let product = this.listProductType.controls[index].value;
    let originalPrice = Number(product.originalPrice);
    let count  =Number(product.count)+1;
    this.listProductType.controls[index].patchValue({
        count : count,
        price : originalPrice*count
       });
  }

  setPrice(item: number, index: number) {
    this.listPrice[index] = item * 2000;
  }

  handleTotalPrice(value: number) {
    this.totalPrice += value;
  }
}
