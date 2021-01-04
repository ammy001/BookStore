import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/Category';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private baseUrl: string = environment.baseURL + 'api/';
    constructor(private http: HttpClient) { }

    public addCategory(category: Category) {
        return this.http.post(this.baseUrl + 'Categories', category);
    }

    public updateCategory(id: number, category: Category) {
        return this.http.put(this.baseUrl + 'Categories/' + id, category);
    }

    public getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.baseUrl + 'Categories');
    }

    public getCategoryById(id): Observable<Category> {
        return this.http.get<Category>(this.baseUrl + 'Categories/' + id);
    }

    public deleteCategory(id: number) {
        return this.http.delete(this.baseUrl + 'Categories/' + id);
    }

    public search(name: string): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.baseUrl}Categories/search/${name}`);
    }
}