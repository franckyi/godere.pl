import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grond-black',
  templateUrl: './grond-black.component.html',
  styleUrls: ['./grond-black.component.scss']
})
export class GrondBlackComponent implements OnInit {

  componentList = [
    'Procesor: Intel Core i7-5820K, 3.3GHz, 15MB',
    'Płyta glówna: MSI X99A TOMAHAWK',
    'Karta graficzna: EVGA GeForce GTX 1080 FTW Gaming ACX',
    'Pamięć Ram: G.Skill DDR4 16GB (4GBx4) 2133MHz, CL15 Ripjaws 4 Red Quad',
    'Zasilacz: Corsair AX860 80PLUS Platinum 860W',
    'Podstawowy dysk twardy: SSD Samsung 950 Pro 256GB PCIe 3.0',
    'Dodatkowy dysk twardy: Seagate SV35, 3.5", 2TB, SATA/600, 7200RPM, 64MB',
    'System operacyjny: Windows 10 Home 64bit Oem Pl'
  ];

  coolingCol1 = [
    'Blok chłodzenia procesora: EK-Supremacy EVO Elite Edition',
    'Blok chłodzenia karty graficznej: EK-FC1080 GTX',
    'Blok chłodzenia dysku twardego: Koolance HD-60 Cold Plate for 3.5in Hard Drives',
    'Radiator: Airplex modularity system 420 mm',
    'Pompa D5 pump',
    'Kontroler autmoatyki układu chłodzenia: Aqua ',
    'Computer aquaero 5 LT USB',
    'Przepływomierz: Koolance INS-FM17N Coolant',
    'Węże: Masterkleer Tubing PVC 19/13mm (1/2"ID) UV-reactive Dark Red',
    'ConnectorZłączki: 17x Alphacool Eiszapfen 19/13mm compression fitting G1/4 - deep black'
  ]

  coolingCol2 = [
    'Zawór spustowy: 2-way ball valve G1/4 - Deep Black',
    'Rezerwuar: Phobya Balancer 150 Silver Nickel',
    'Czujnik temperatury: Liquid temperature sensor XSPC',
    'Oświetlenie: Revoltec cold light cathode LED BitFenix Alchemy 2.0',
    'Podkładki antywibracyjne :Phobya 140mm (7mm thickness)',
    'Wentylatory: 3x Noctua NF-A14 industrialPPC-2000 PWM',
    'Grill chłodnicy: Phobya (420) - Bricky –czarny',
    'Czujniki temperatury powietrza:XPC TEMPERATURE SENSORS',
  ];

  coolingSystemList = [
    'zredukowanie głośności do 25 dB kiedy komputer jest włączony',
    'zredukowanie temperatury CPU do 34 °C w trybie normalnym (internet, oglądania filmów, kopiowanie plików itd.)',
    'zredukowanie temperatury GPU do 34 °C w trybie normalnym (internet, oglądania filmy, skopiowanie plików itd.)',
    'zredukowanie temperatury HDD do 35 °C',
    'większa możliwość podkręcania CPU oraz GPU',
    'automatyzację procesu chłodzenia Lego PC'
  ];

  coolingComponentsCol1 = ['CPU', 'GPU', 'Drugi HDD', 'Kontroler automatyki'];
  coolingComponentsCol2 = ['Rezerwuar', 'Przepływomierz', 'Chłodnica + 3 wentylatory 140 mm', 'Pompa', 'Złączki', 'Węże'];

  images: number[] = [];

  constructor() {
    for (let i= 0; i < 25; i++) {
      this.images.push(i)
    }
  }

  ngOnInit(): void {
  }

}
