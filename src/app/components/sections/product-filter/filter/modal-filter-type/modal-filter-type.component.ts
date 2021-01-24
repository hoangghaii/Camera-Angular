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

  constructor(private fb: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
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
  }

  handleCreate() {
    this.submitted = true;
    if (!this.filterTypeForm.valid) {
      return;
    }
  }

  handleUpdate() {
    this.submitted = true;
    if (!this.filterTypeForm.valid) {
      return;
    }
  }

  parserObj(obj: any): object {
    return {
      id: obj.id,
      filter_type_name: obj.filterTypeName,
      filterType_note: obj.filterTypeNote,
      updated_at: obj.updatedAt,
    };
  }
}
