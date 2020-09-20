import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  productsCategory = [
    {
      categoryName: 'ElectronicsDevices',
      children: [
        {
          type: 'Mobile & Tablets',
          children: ['Mobiles', 'Landlines', 'Tablets'],
        },
        {
          type: 'Laptop',
          children: ['Traditional Laptops', 'Gaming Laptops'],
        },
        {
          type: 'Console Gaming',
          children: ['Console', 'Console Game', 'Console Game Accessories'],
        },
        {
          type: 'Smart watches & Accessories',
          children: ['Fitness Trackers', 'Smart Trackers'],
        },
      ],
    },
    {
      categoryName: 'Electronics Acessories',
      children: [
        {
          type: 'Mobile Accesories',
          children: ['Phone Cases', 'Power Banks', 'Cables & Converters'],
        },
        {
          type: 'Audios',
          children: [
            'Head Phones & Head Sets',
            'Portable Speakers',
            'Home Audio',
          ],
        },
        {
          type: 'Smart Devices',
          children: [
            'Electronic Cigarrets',
            'Smart Speakers',
            'Virtual Reality',
          ],
        },
      ],
    },
    {
      categoryName: "Men's' Fashion",
      children: [
        {
          type: 'Men Clothing',
          children: ['Tshirt & Tanks', 'Shirts', 'Pants'],
        },
        {
          type: 'Men Shoes',
          children: ['Shoes', 'Boots', 'Flip Flops'],
        },
        {
          type: 'Accessories',
          children: ['Socks', 'Belts', 'Hat & Caps'],
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
