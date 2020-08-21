import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { SidebarService } from '../../services/shared/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: []
})
export class SideBarComponent implements OnInit {

  constructor(public loginServices: LoginService,
              public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
