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
import { Filter } from 'src/app/models';
import { ModalService } from 'src/app/services';
import { ValidatorService } from 'src/app/services';
import { FilterService, FilterTypeService } from 'src/app/services/apis';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {
  public filterForm!: FormGroup;
  public product: Filter[] = [];
  public submitted: boolean = false;
  public filterTypeList: any;

  @Input() open!: boolean;
  @Input() typeModal!: string;
  @Input() selectCurrent: any;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>(false);

  constructor(
    private fb: FormBuilder,
    private filterService: FilterService,
    private filterTypeService: FilterTypeService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
    this.getFilterTypeList();
  }

  async ngOnChanges(): Promise<void> {
    // this.getFilterTypeList();

    if (this.open && this.selectCurrent) {
      let res = await this.filterService
        .getFilter(this.selectCurrent.id)
        .toPromise();
      console.log(res);
      this.filterForm.patchValue({
        id: res['id'],
        filterType: res['category_filter_id'],
        filterName: res['name'],
        filterNote: res['description'],
        updatedAt: res['updated_at'],
      });
    }
    if (this.open && this.selectCurrent === null) {
      this.initForm();
      this.submitted = false;
    }
  }

  initForm(): void {
    this.filterForm = this.fb.group({
      id: [''],
      filterType: ['', [ValidatorService.required]],
      filterName: [
        '',
        [ValidatorService.required, ValidatorService.maxLength(30)],
      ],
      filterNote: [''],
      updatedAt: [''],
    });
  }

  get f() {
    return this.filterForm.controls;
  }

  closeModal(): void {
    this.submitted = false;
    this.filterForm.reset();
    this.confirm.emit({ open: false });
  }

  async getFilterTypeList(): Promise<any[]> {
    return (this.filterTypeList = await this.filterTypeService
      .getFilterTypeList()
      .toPromise());
  }

  handleCreate() {
    this.submitted = true;
    if (!this.filterForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.filterForm.getRawValue());
    this.filterService.createFilter(obj).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Đăng ký bộ lọc thành công !');
    });
  }

  handleUpdate() {
    this.submitted = true;
    if (!this.filterForm.valid) {
      return;
    }

    const obj: any = this.parserObj(this.filterForm.getRawValue());
    this.filterService.updateFilter(obj, obj.id).subscribe((res) => {
      this.confirm.emit({ open: false, status: 'upCreate' });
      this.modalService.open('✔️ Cập nhật bộ lọc thành công !');
    });
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      category_filter_id: obj.filterType,
      name: obj.filterName,
      description: obj.filterNote,
      updated_at: obj.updatedAt,
    };
  }
}
