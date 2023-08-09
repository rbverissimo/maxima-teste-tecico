import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-erros-dialog',
  templateUrl: './erros-dialog.component.html',
  styleUrls: ['./erros-dialog.component.css']
})
export class ErrosDialogComponent {

  constructor(public dialogRef: MatDialogRef<ErrosDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {mensagem: string}){}

}
