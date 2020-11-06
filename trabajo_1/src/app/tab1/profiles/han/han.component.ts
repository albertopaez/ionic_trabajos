import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-han',
  templateUrl: './han.component.html',
  styleUrls: ['./han.component.scss'],
})
export class HanComponent implements OnInit {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/tabs/tab1'])
  }

  ngOnInit() {}

}
