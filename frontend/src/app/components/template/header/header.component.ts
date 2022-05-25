import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  Logout(): void{
    this.router.navigate(['/login'])
  }

  get title(): string{
    return this.headerService.headerData.title
  }
}
