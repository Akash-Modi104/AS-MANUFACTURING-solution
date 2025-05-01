import {Component, OnInit} from '@angular/core';
import {ButtercmssdkService} from '../../../services/buttercmssdk.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(private bCMSSDKService: ButtercmssdkService) {
  }

  public menuData;

  ngOnInit(): void {
     this.menuData = {
      "data": {
        "data": {
          "navigation_menu": [
            {
              "menu_items": [
                { "label": "Home", "url": "/" },
                { "label": "About Us", "url": "/About us" },
                { "label": "Products", "url": "/products" },
                { "label": "Contact Us", "url": "/contact" },
                { "label": "Downloads", "url": "/downloads" },
                { "label": "Carriers", "url": "/carrier" },
             
              ]
            }
          ]
        }
      }
    }
    

   }


}
