import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "../models/categoria";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  private baseURL = "https://localhost:5001/api/categoria";

  constructor(private http: HttpClient) {}

  list(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseURL}/list`);
  }
}
