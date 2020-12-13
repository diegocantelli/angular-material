import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-material-snackbar',
  templateUrl: './material-snackbar.component.html',
  styleUrls: ['./material-snackbar.component.scss']
})
export class MaterialSnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed()
      .subscribe(() => {
        console.log('The snackbar was dismissed');
      });

    snackBarRef.onAction()
      .subscribe(() => {
        console.log('The snackbar action was triggered');
      })
  }

}
