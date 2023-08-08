import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grond-black',
  templateUrl: './grond-black.component.html',
  styleUrls: ['./grond-black.component.scss']
})
export class GrondBlackComponent implements OnInit {

  componentList = [
    'Processor: Intel Core i7-5820K, 3.3GHz, 15MB',
    'Motherboard: MSI X99A TOMAHAWK',
    'Graphics: EVGA GeForce GTX 1080 FTW Gaming ACX',
    'Ram: G.Skill DDR4 16GB (4GBx4) 2133MHz, CL15 Ripjaws 4 Red Quad',
    'Power supply: Corsair AX860 80PLUS Platinum 860W',
    'Primary hard drive: Samsung 950 Pro 256GB PCIe 3.0 SSD',
    'Secondary hard drive: Seagate SV35, 3.5", 2TB, SATA / 600, 7200RPM, 64MB',
    'Operating System: Windows 10 Home 64bit Oem Pl'
  ];

  coolingCol1 = [
    'CPU Cooling Block: EK-Supremacy EVO Elite Edition',
    'Graphics card cooling block: EK-FC1080 GTX',
    'Hard Drive Cooling Block: Koolance HD-60 Cold Plate for 3.5in Hard Drives',
    'Heatsink: Airplex modularity system 420 mm',
    'Pump D5 pump',
    'Automatic cooling system controller: Aqua',
    'Computer aquaero 5 LT USB',
    'Flow meter: Koolance INS-FM17N Coolant',
    'Hoses: Masterkleer Tubing PVC 19 / 13mm (1/2 "ID) UV-reactive Dark Red',
    'Connectors: 17x Alphacool Eiszapfen 19 / 13mm compression fitting G1 / 4 - deep black'
  ]

  coolingCol2 = [
    'Drain valve: 2-way ball valve G1 / 4 - Deep Black',
    'Reservoir: Phobya Balancer 150 Silver Nickel',
    'Temperature sensor: Liquid temperature sensor XSPC',
    'Lighting: Revoltec cold light cathode LED BitFenix Alchemy 2.0',
    'Anti-vibration pads: Phobya 140mm (7mm thickness)',
    'Fans: 3x Noctua NF-A14 industrialPPC-2000 PWM',
    'Radiator Grill: Phobya (420) - Bricky - Black',
    'Air temperature sensors: XPC TEMPERATURE SENSORS'
  ];

  coolingSystemList = [
    'reducing the volume to 25 dB when the computer is turned on',
    'reducing the CPU temperature to 34 ° C in normal mode (internet, watching movies, copying files etc.)',
    'reducing the GPU temperature to 34 ° C in normal mode (internet, watching movies, copying files, etc.) ',
    'reducing the HDD temperature to 35 ° C',
    'greater ability to overclock the CPU and GPU',
    'automation of the Lego PC cooling process'
  ];

  coolingComponentsCol1 = ['CPU', 'GPU', 'Second HDD', 'Automation controller'];
  coolingComponentsCol2 = ['Reservoir', 'Flow meter', 'Radiator + 3 fans 140 mm', 'Pump', 'Couplings', 'Tubs'];

  images: number[] = [];

  constructor() {
    for (let i= 0; i < 25; i++) {
      this.images.push(i)
    }
  }

  ngOnInit(): void {
  }

}
