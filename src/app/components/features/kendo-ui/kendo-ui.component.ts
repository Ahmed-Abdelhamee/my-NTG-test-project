import { Component } from '@angular/core';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { SVGIcon, folderIcon } from "@progress/kendo-svg-icons";
import { KENDO_GRID } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-kendo-ui',
  standalone: true,
  imports: [KENDO_BUTTONS , KENDO_GRID],
  templateUrl: './kendo-ui.component.html',
  styleUrl: './kendo-ui.component.scss'
})
export class KendoUiComponent {
  public folderSVG: SVGIcon = folderIcon;
  onButtonClick(){

  }

  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: "Chai",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Chang",
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Aniseed Syrup",
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: "Condiments",
      },
    },
  ];
}
