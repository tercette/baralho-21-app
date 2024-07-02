import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ace-value-dialog',
  templateUrl: './ace-value-dialog.component.html',
  styleUrls: ['./ace-value-dialog.component.css']
})
export class AceValueDialogComponent implements OnInit {
  aceValue: number = 1;

  constructor(
    public dialogRef: MatDialogRef<AceValueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onConfirm(): void {
    this.dialogRef.close(this.aceValue);
  }
}
