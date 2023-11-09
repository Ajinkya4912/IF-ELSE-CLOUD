import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private Url: any = 'https://1.api.fy23ey05.careers.ifelsecloud.com/';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.Url);
  }
}
