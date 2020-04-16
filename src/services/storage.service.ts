import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

   save(key, value) {
    let item = JSON.stringify(value);
    localStorage.setItem(key, item);
}

  load(key) {

    let item = localStorage.getItem(key)
    let value = JSON.parse(item);
    return value;
}
  constructor() { }
}
