import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples1', 1),
    new Ingredient('Apples2', 2),
    new Ingredient('Apples3', 3),
  ];

  constructor() {}

  ngOnInit(): void {}
}
