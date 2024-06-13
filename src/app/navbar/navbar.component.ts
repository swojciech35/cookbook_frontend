import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuCollapsed: boolean = true;

  constructor(public authService: AuthService, private toastr: ToastrService) {
  }

  signOutToaaster() {
    this.toastr.success("Wylogowano")
  }
}
