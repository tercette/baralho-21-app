import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-name-input-dialog',
  templateUrl: './name-input-dialog.component.html',
  styleUrls: ['./name-input-dialog.component.css']
})
export class NameInputDialogComponent {

  userName: string;

  constructor(
    public dialogRef: MatDialogRef<NameInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userName: string }
  ) {
    this.userName = data.userName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
