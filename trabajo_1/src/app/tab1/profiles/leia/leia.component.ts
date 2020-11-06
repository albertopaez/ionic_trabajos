import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.scss'],
})
export class LeiaComponent implements OnInit {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/tabs/tab1'])
  }

  ngOnInit() {}

}
