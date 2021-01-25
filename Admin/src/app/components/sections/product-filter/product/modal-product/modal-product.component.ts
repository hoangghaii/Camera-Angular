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

  constructor(private fb: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
  }

  ngOnChanges(): void {
    this.imagesUrl = ImageHolder.imageUrl;
  }

  initForm(): void {
    this.productForm = this.fb.group({
      id: [''],
      productType: ['', [ValidatorService.required]],
      productName: [
        '',
        [ValidatorService.required, ValidatorService.maxLength(30)],
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

  // handleCreate(): void {
  //   this.submitted = true;
  //   if (!this.productForm.valid) {
  //     return;
  //   }
  // }

  uploadFile(event: any): void {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      // console.log(reader.readAsDataURL(file));

      reader.onload = () => {
        this.imagesUrl = reader.result as string;
        console.log(reader.result);

        this.productForm.patchValue({
          productImage: reader.result,
        });
      };
    }
  }

  handleCreate() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return;
    }
  }

  handleUpdate() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return;
    }
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      product_type: obj.productType,
      product_name: obj.productName,
      product_price: obj.productPrice,
      product_note: obj.productNote,
      product_image: obj.productImage,
      updated_at: obj.updatedAt,
    };
  }
}
