import {
  Component,
  ElementRef,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ProductTypeService } from 'src/app/services/apis';
import { Helper } from 'src/app/utils/helper';
import { CommonService } from 'src/app/services';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public helper = Helper;
  public pageOfItems!: Array<any>;
  public valueInputNumber: number = 1;
  public totalPrice: number = 0;
  public formProduct!: FormGroup;
  public isOpen!: boolean;
  public listProductTypes = [];
  public index: number = 0;
  public productTypeId: number = 0;
  public productVal: any;

  @ViewChild('pdf') pdf!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private productTypeService: ProductTypeService,
    private commonService: CommonService
  ) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
    this.listProductTypes = await this.productTypeService
      .getProductTypeList()
      .toPromise();
    console.log(this.listProductTypes);
    this.setForm();
    console.log(this.listProductTypeForm);
  }

  setForm() {
    let list = this.formProduct.get('listProductType') as FormArray;
    this.listProductTypes.forEach((item) => {
      let form = this.addFormProductType(item);
      list.push(form);
    });
  }

  get listProductTypeForm(): FormArray {
    return this.formProduct.get('listProductType') as FormArray;
  }

  initForm() {
    this.formProduct = this.fb.group({
      listProductType: new FormArray([]),
    });
  }

  // ngOnChange(): void {

  // }

  calculatorTotalPrice() {
    // console.log(this.totalPrice);
    for (const element of this.listProductTypeForm.value) {
      console.log(element.price);
    }
  }

  deleteItem(index: number) {
    let product = this.listProductTypeForm.controls[index].value;
    this.totalPrice -= Number(product.originalPrice);
    this.listProductTypeForm.at(index).patchValue({
      image: './assets/images/100x100.png',
      nameProduct: '',
      count: 0,
    });
  }

  openModal(i: number, productTypeId: number): void {
    this.index = i;
    this.isOpen = true;
    this.productTypeId = productTypeId;
    console.log(this.isOpen);
  }

  addFormProductType(item: any) {
    return this.fb.group({
      id: item.id,
      nameProductType: item.name,
      image: [''],
      count: 0,
      price: item.price || '',
      originalPrice: item.price || '',
      nameProduct: [''],
    });
  }

  closeModal(event: any): void {
    this.isOpen = event.isOpen;
    if (event.product) {
      console.log(event.product);
      this.listProductTypeForm.at(event.index).patchValue({
        count: 1,
        nameProduct: event.product.name,
        originalPrice: event.product.price,
        image: event.product.file,
        description: event.product.description,
      });
      this.totalPrice += Number(event.product.price);
    }
  }

  /**
   * Handle minus value input
   * @param index
   */
  quantityMinus(index: number) {
    let product = this.listProductTypeForm.controls[index].value;
    let count = Number(product.count) - 1;

    this.listProductTypeForm.controls[index].patchValue({
      count: count,
    });

    this.listProductTypeForm.controls[index].patchValue({
      price: count * Number(product.originalPrice),
    });
    this.totalPrice -= Number(product.originalPrice);
    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
    if (count == 0) {
      this.listProductTypeForm.controls[index].patchValue({
        image: './assets/images/100x100.png',
      });
    }
  }

  /**
   * Handle plus value input
   * @param index
   */
  quantityPlus(e: any, index: number) {
    let product = this.listProductTypeForm.controls[index].value;
    let count = Number(product.count) + 1;

    this.listProductTypeForm.controls[index].patchValue({
      count: count,
    });

    this.listProductTypeForm.controls[index].patchValue({
      price: count * Number(product.originalPrice),
    });
    console.log(this.listProductTypeForm.controls[index].value.price);
    this.totalPrice += Number(product.originalPrice);
  }

  exportPDF() {
    let data: any[][] = [];
    let head = [
      ['STT', 'San Pham', 'Loai San Pham', 'So Luong', 'Gia Goc', 'Tong Cong'],
    ];

    this.productVal = this.listProductTypeForm.getRawValue();
    this.productVal = this.productVal.filter((x: any) => x.nameProduct != '');
    this.productVal.forEach((item: any, index: any) => {
      let val = [
        (index + 1).toString(),
        item.nameProduct,
        item.nameProductType,
        item.count.toString(),
        this.helper.formatCurrency(item.originalPrice),
        this.helper.formatCurrency(
          Number(item.originalPrice) * Number(item.count)
        ),
      ];
      data.push(val);
    });
    // data.push(this.helper.formatCurrency(Number(this.totalPrice)))
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Chi Tiet Hoa Don - Ngay tao: ', 50, 30);
    doc.setFontSize(11);
    doc.setTextColor('#b6b6b6');

    autoTable(doc, {
      head: head,
      body: data,
      // footer:this.helper.formatCurrency(Number(this.totalPrice)),
      theme: 'striped',
      headStyles: {
        halign: 'center',
      },
      columnStyles: {
        0: {
          cellWidth: 'auto',
          halign: 'center',
        },
        1: {
          cellWidth: 50,
        },
        2: {
          cellWidth: 'auto',
        },
        3: {
          cellWidth: 'auto',
          halign: 'center',
        },
        4: {
          cellWidth: 'auto',
          halign: 'right',
        },
        5: {
          cellWidth: 'auto',
          halign: 'right',
        },
      },
      margin: { top: 40 },
    });

    // doc.save('table.pdf');
    doc.output('dataurlnewwindow');
  }
}
