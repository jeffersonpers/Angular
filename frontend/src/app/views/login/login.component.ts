import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { HeaderService }     from 'src/app/components/template/header/header.service';
import { NavService }        from './../../components/template/nav/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide     = true;
  hideimgl = true;
  hideimgs = true;
  constructor(private router: Router, private headerService: HeaderService,private navService: NavService) { 
    headerService.headerData = {
      title: 'login'
    },
    navService.navData = {
      title: 'login'
    }
  }

  ngOnInit(): void {
  }

  Login(): void{
    this.router.navigate(['/home'])
  }
}
