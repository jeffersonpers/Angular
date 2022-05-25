import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/header/header.service';
import { NavService } from './../../components/template/nav/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService, private navService: NavService) { 
    headerService.headerData = {
      title: 'home'
    },
    navService.navData = {
      title: 'home'
    }
  }

  ngOnInit(): void {
  }

}
