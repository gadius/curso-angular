import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('name','descripcion','https://imco.org.mx/wp-content/uploads/2020/08/test-3.png')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
