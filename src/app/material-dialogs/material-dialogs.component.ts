import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-material-dialogs',
  templateUrl: './material-dialogs.component.html',
  styleUrls: ['./material-dialogs.component.scss']
})
export class MaterialDialogsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent,
      { data: { name: 'Diego' } });

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
      })
  }

}
