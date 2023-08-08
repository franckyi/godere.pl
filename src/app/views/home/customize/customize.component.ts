import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  col1List = [
    'Size and shape of the Lego-made case',
    'color of LEGO bricks',
    'the material of the Lego PC motherboard (steel, aluminum, acrylic glass-PMMA)',
    'computer components available on the market',
    'arrangement of components',
    'cooling components (water, air, combined cooling)',
    'way of starting the computer (wireless, button, combined)',
    'optimal computer noise (dB)',
    'additional backlight'
  ];

  col2List = [
    'number of USB ports',
    'location of USB ports in the housing made of Lego blocks',
    'location of the audio connector: microphone input / headphone audio output',
    'location of the graphics card connectors (HDMI, mini-HDMI, Displayport, DVI-I)',
    'location of the induction charging of the telephone',
    '10 ”LCD panel displaying information about the computer\'s operating parameters',
    'adding controllers (pads, steering wheel, joystick)'
  ];

  col3List = [
    'purpose of the computer: one off Lego case computer / Multi-workstation',
    'number of required positions',
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
