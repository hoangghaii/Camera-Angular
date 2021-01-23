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

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {
  public filterForm!: FormGroup;
  public product: Filter[] = [];
  public submitted: boolean = false;

  @Input() open!: boolean;
  @Input() typeModal!: string;
  @Input() selectCurrent: any;
  @Output() confirm: EventEmitter<object> = new EventEmitter<object>();

  constructor(private fb: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
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

  // handleCreate(): void {
  //   this.submitted = true;
  //   if (!this.filterForm.valid) {
  //     return;
  //   }
  // }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      filter_type: obj.filterType,
      filter_name: obj.filterName,
      filter_price: obj.filterNote,
      updated_at: obj.updatedAt,
    };
  }
}
