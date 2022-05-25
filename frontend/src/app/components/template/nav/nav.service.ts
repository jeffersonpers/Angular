import { NavData }         from './nav-data.model';
import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private _navData = new BehaviorSubject<NavData> ({
    title: ''
  })

  constructor() { }

  get navData(): NavData {
    return this._navData.value
  }

  set navData(navData: NavData){
    this._navData.next(navData)
  }
}
