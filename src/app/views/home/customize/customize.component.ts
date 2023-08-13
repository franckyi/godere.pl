import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  col1List = [
    'wymiar oraz kształt obudowy z klocków LEGO',
    'kolor klocków LEGO',
    'materiał z którego będzie zbudowana rama Lego PC (stal, aluminium, szkło akrylowe-PMMA)',
    'podzespoły komputerowe dostępne na rynku',
    'arraułożenie podzespołów',
    'chłodzenie podzespołów komputerowych (chłodzenie wodne, powietrzem, łączone)',
    'sposób uruchomienia komputera (bezprzewodowo, przycisk, łączony)',
    'optymalną głośność pracy komputera (dB)',
    'dodatkowe podświetlenie'
  ];

  col2List = [
    'ilość portów USB',
    'umiejscowienie portów USB w obudowie z klocków Lego',
    'umiejscowienie złącza audio: wejście mikrofonowe / wyjście audio słuchawkowe',
    'umiejscowienie złącz karty graficznej (HDMI, mini-HDMI, Displayport, DVI-I)',
    'umiejscowienie ładowania indukcyjnego telefonu',
    'panel LCD 10” wyświetlający informacji o parametrach pracy komputera',
    'dodatkowe kontrolery ( pady, kierownica, joystick )'
  ];

  col3List = [
    'przeznaczenie komputera: indiwidualne / Multi-station',
    'ilość potrzebnych stanowisk',
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
