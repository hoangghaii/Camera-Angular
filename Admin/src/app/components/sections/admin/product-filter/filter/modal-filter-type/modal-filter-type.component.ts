import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterType } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';
import { FilterTypeService } from 'src/app/services/apis';

@Component({
  selector: 'app-modal-filter-type',
  templateUrl: './modal-filter-type.component.html',
  styleUrls: ['./modal-filter-type.component.scss'],
})
export class ModalFilterTypeComponent implements OnInit {
  public filterTypeForm!: FormGroup;
  public filterType: FilterType[] = [];
  public submitted: boolean = false;

  @Input() open!: boolean;
  @Input() typeModal!: string;
  @Input() selectCurrent: any;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>(false);

  constructor(
    private fb: FormBuilder,
    private filterTypeService: FilterTypeService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
  }

  ngOnChanges(): void {
    if (this.open && this.selectCurrent) {
      this.filterTypeService
        .getFilterType(this.selectCurrent.id)
        .subscribe((res: any) => {
          this.filterTypeForm.patchValue({
            id: res.id,
            filterTypeName: res.name,
            filterTypeNote: res.description,
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
    this.filterTypeForm = this.fb.group({
      id: [''],
      filterTypeName: [
        '',
        [ValidatorService.required, ValidatorService.maxLength(30)],
      ],
      filterTypeNote: [''],
      updatedAt: [''],
    });
  }

  get f() {
    return this.filterTypeForm.controls;
  }

  closeModal(): void {
    this.submitted = false;
    this.filterTypeForm.reset();
    this.confirm.emit({ open: false });
    this.initForm();
  }

  handleCreate() {
    this.submitted = true;
    if (!this.filterTypeForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.filterTypeForm.getRawValue());

    this.filterTypeService.createFilterType(obj).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Đăng ký loại bộ lọc thành công !');
    });
  }

  handleUpdate() {
    this.submitted = true;
    if (!this.filterTypeForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.filterTypeForm.getRawValue());

    this.filterTypeService.updateFilterType(obj, obj.id).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Cập nhật loại bộ lọc thành công !');
    });
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      name: obj.filterTypeName,
      description: obj.filterTypeNote,
      updated_at: obj.updatedAt,
    };
  }
}
