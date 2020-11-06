import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ren',
  templateUrl: './ren.component.html',
  styleUrls: ['./ren.component.scss'],
})
export class RenComponent implements OnInit {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/tabs/tab1'])
  }

  ngOnInit() {}

}
