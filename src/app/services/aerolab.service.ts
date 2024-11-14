import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AerolabService {
  private apiUrl ='https://coding-challenge-api.aerolab.co/products';
  private token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM2NjhmNmMxMGUzZDAwMjBkMzBmMzciLCJpYXQiOjE3MzE2MTkwNjJ9.dNcs71SYbAtaA64WIzavnaXoFbR_BxSzEx0t1Tp7a_w';

  constructor() { }

  async getProducts() {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async getProductById(id: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/products/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }
}
