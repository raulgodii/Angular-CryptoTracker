import { Component, OnInit } from '@angular/core';
import { FirestoreControlService } from '../firestore-control.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RequestAJAXService } from '../request-ajax.service';
import { UserControlService } from '../user-control.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  constructor(public firestoreService:FirestoreControlService, public userService: UserControlService, public RequestAJAX:RequestAJAXService, private scroll:ViewportScroller, private router:ActivatedRoute){

  }

  ngOnInit(): void {

    this.firestoreService.getPortfolio(this.userService.user.uid);

    // this.userService.getUser().then(user => {
    //   if (user) {
    //     // Usuario autenticado, realizar operaciones necesarias
    //     this.firestoreService.getPortfolio(user.uid);
    //     // Resto del código...
    //   } else {
    //     // Usuario no autenticado, redirigir o realizar acciones necesarias
    //     // Por ejemplo, redirigir al componente de inicio de sesión
    //     this.router.navigate(['/login']);
    //   }
    // });

    if(this.router.snapshot.fragment){
      this.scroll.scrollToAnchor(this.router.snapshot.fragment);
    } else {
      this.scroll.scrollToPosition([0, 0]);
    }
  }

  unfollowCrypto(id: any){
    this.firestoreService.unfollowCrypto(id);
  }

  getDataCoin(id: any){
    this.RequestAJAX.getDataCoin(id);
  }
  
}
