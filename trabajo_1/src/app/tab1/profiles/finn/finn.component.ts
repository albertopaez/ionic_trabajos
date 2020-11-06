import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finn',
  templateUrl: './finn.component.html',
  styleUrls: ['./finn.component.scss'],
})
export class FinnComponent implements OnInit {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/tabs/tab1'])
  }

  ngOnInit() {}

}
