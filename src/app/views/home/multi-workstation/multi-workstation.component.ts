import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-workstation',
  templateUrl: './multi-workstation.component.html',
  styleUrls: ['./multi-workstation.component.scss']
})
export class MultiWorkstationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  advantages = [
    'One central unit, built with Lego bricks',
    'Saving space in rooms where the other blocks are located',
    'Saved money',
    'Comfort for all users',
    'Possible work on all positions at the same time',
    'Utilization of the performance potential of the central unit to the highest degree '
  ]

}
