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
    'Jedna jednostka centralna, zbudowana w klocków Lego',
    'Zaoszczędzone miejsce w pomieszczeniach, w których są stanowiska',
    'Zaoszczędzone pieniądze',
    'Komfort wszystkich użytkowników',
    'Możliwa praca na wszystkich stanowiskach jednocześnie',
    'Wykorzystanie potencjału wydajnościowego jednostki centralnej w najwyższym stopniu'
  ]

}
