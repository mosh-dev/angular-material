import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    color: new FormControl(null, Validators.required),
    progress: new FormControl(20)
  });

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }
}
