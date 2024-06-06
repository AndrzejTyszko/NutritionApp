import { Component } from '@angular/core';
import { NutritionService } from '../services/nutrition.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  query: string = '';
  nutritionData: any;
  date: string = ''; // Define the date property

  constructor(private nutritionService: NutritionService, private databaseService: DatabaseService) { }

  getNutrition() {
    this.nutritionService.getNutrition(this.query).subscribe(
      data => {
        this.nutritionData = data.items;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  saveData() {
    if (this.date && this.nutritionData) {
      this.databaseService.saveNutritionData(this.date, this.nutritionData);
    }
  }

  loadData() {
    if (this.date) {
      this.databaseService.getNutritionData(this.date).then(data => {
        this.nutritionData = data;
      });
    }
  }

  deleteData() {
    if (this.date) {
      this.databaseService.deleteNutritionData(this.date);
      this.nutritionData = null;
    }
  }

  getTotal(nutrient: string): number {
    if (!this.nutritionData) return 0;
    return this.nutritionData.reduce((total: any, item: { [x: string]: any; }) => total + item[nutrient], 0);
  }
}
