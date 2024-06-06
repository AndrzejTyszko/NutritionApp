import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saved-data',
  templateUrl: './saved-data.page.html',
  styleUrls: ['./saved-data.page.scss'],
})
export class SavedDataPage implements OnInit {
  savedData: { date: string, items: any[] }[] = [];
  totals: any = {};

  constructor(private databaseService: DatabaseService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const rawData = await this.databaseService.getAllData();
    this.savedData = rawData.map(entry => ({ date: entry.key, items: entry.value }));
    this.calculateTotals();
  }

  calculateTotals() {
    this.totals = {
      calories: 0,
      protein_g: 0,
      carbohydrates_total_g: 0,
      fat_total_g: 0,
      sugar_g: 0,
      fiber_g: 0,
      sodium_mg: 0,
      potassium_mg: 0
    };

    this.savedData.forEach(entry => {
      entry.items.forEach(item => {
        this.totals.calories += item.calories || 0;
        this.totals.protein_g += item.protein_g || 0;
        this.totals.carbohydrates_total_g += item.carbohydrates_total_g || 0;
        this.totals.fat_total_g += item.fat_total_g || 0;
        this.totals.sugar_g += item.sugar_g || 0;
        this.totals.fiber_g += item.fiber_g || 0;
        this.totals.sodium_mg += item.sodium_mg || 0;
        this.totals.potassium_mg += item.potassium_mg || 0;
      });
    });
  }

  getTotal(nutrient: string): number {
    return this.totals[nutrient];
  }

  goBack() {
    this.navCtrl.navigateBack('/home');
  }
}
