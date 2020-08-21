import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Productos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Productos', url: '/products'},
        { titulo: 'Crear un nuevo producto', url: '/products-new'},
      ]
    }
  ];

constructor() { }

}
