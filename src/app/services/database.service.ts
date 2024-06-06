import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async saveNutritionData(date: string, data: any): Promise<void> {
    await this.storage.set(date, data);
  }

  async getNutritionData(date: string): Promise<any> {
    return await this.storage.get(date);
  }

  async deleteNutritionData(date: string): Promise<void> {
    await this.storage.remove(date);
  }

  async getAllData(): Promise<{ key: string, value: any }[]> {
    let data: { key: string, value: any }[] = [];
    await this.storage.forEach((value, key) => {
      data.push({ key, value });
    });
    return data;
  }
}
