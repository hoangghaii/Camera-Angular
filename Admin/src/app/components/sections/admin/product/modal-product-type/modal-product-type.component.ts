import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductType } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';
import { ProductTypeService } from 'src/app/services/apis';

@Component({
  selector: 'app-modal-product-type',
  templateUrl: './modal-product-type.component.html',
  styleUrls: ['./modal-product-type.component.scss'],
})
export class ModalProductTypeComponent implements OnInit {
  public productTypeForm!: FormGroup;
  public productType: ProductType[] = [];
  public submitted: boolean = false;

  @Input() open!: boolean;
  @Input() typeModal!: string;
  @Input() selectCurrent: any;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>(false);

  constructor(
    private fb: FormBuilder,
    private productTypeService: ProductTypeService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
  }

  ngOnChanges(): void {
    if (this.open && this.selectCurrent) {
      this.productTypeService
        .getProductType(this.selectCurrent.id)
        .subscribe((res: any) => {
          this.productTypeForm.patchValue({
            id: res.id,
            productTypeName: res.name,
            productTypeNote: res.description,
            updatedAt: res.updated_at,
          });
        });
    }
    if (this.open && this.selectCurrent === null) {
      this.initForm();
      this.submitted = false;
    }
  }

  initForm(): void {
    this.productTypeForm = this.fb.group({
      id: [''],
      productTypeName: [
        '',
        [ValidatorService.required],
      ],
      productTypeNote: [''],
      updatedAt: [''],
    });
  }

  get f() {
    return this.productTypeForm.controls;
  }

  closeModal(): void {
    this.submitted = false;
    this.productTypeForm.reset();
    this.confirm.emit({ open: false });
  }

  handleCreate() {
    this.submitted = true;
    if (!this.productTypeForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.productTypeForm.getRawValue());

    this.productTypeService.createProductType(obj).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Đăng ký loại sản phẩm thành công !');
    });
  }

  handleUpdate() {
    this.submitted = true;
    if (!this.productTypeForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.productTypeForm.getRawValue());

    this.productTypeService.updateProductType(obj, obj.id).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Cập nhật loại sản phẩm thành công !');
    });
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      name: obj.productTypeName,
      description: obj.productTypeNote,
      updated_at: obj.updatedAt,
    };
  }
}
