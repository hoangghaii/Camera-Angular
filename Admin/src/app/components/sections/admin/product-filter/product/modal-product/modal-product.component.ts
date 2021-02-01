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
import { ImageHolder } from 'src/app/constants/global-const';
import { Product } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';
import { ProductService } from 'src/app/services/apis';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss'],
})
export class ModalProductComponent implements OnInit {
  public productForm!: FormGroup;
  public product: Product[] = [];
  public submitted: boolean = false;
  public imagesUrl!: string;

  @Input() open!: boolean;
  @Input() typeModal!: string;
  @Input() selectCurrent: any;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>(false);

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    this.imagesUrl = ImageHolder.imageUrl;
    if (this.open && this.selectCurrent) {
      this.productService
        .getProduct(this.selectCurrent.id)
        .subscribe((res: any) => {
          this.imagesUrl = res.file;
          this.productForm.patchValue({
            id: res.id,
            productType: res.category_product_id,
            productName: res.name,
            productPrice: res.price,
            productNote: res.description,
            productImage: res.file,
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
    this.productForm = this.fb.group({
      id: [''],
      productType: ['', [ValidatorService.required]],
      productName: [
        '',
        [ValidatorService.required, ValidatorService.maxLength(500)],
      ],
      productPrice: [
        '',
        [ValidatorService.required, ValidatorService.isNumber],
      ],
      productNote: [''],
      productImage: ['', [ValidatorService.required]],
      updatedAt: [''],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  closeModal(): void {
    this.submitted = false;
    this.productForm.reset();
    this.confirm.emit({ open: false });
  }

  uploadFile(event: any): void {
    console.log(event);
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imagesUrl = reader.result as string;

        this.productForm.patchValue({
          productImage: event.target.files[0],
        });
      };
    }
  }

  handleCreate() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.productForm.getRawValue());

    this.productService.createProduct(obj).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Đăng ký sản phẩm thành công !');
    });
  }

  handleUpdate() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.productForm.getRawValue());

    this.productService.updateProduct(obj).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Cập nhật sản phẩm thành công !');
    });
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      category_product_id: obj.productType,
      name: obj.productName,
      price: obj.productPrice,
      description: obj.productNote,
      image: obj.productImage,
      updated_at: obj.updatedAt,
    };
  }
}
