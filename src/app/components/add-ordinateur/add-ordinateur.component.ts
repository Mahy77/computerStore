import { Component, OnInit, Input } from '@angular/core';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Router } from '@angular/router';
import { Ordinateur } from 'src/app/models/ordinateur';


@Component({
  selector: 'app-add-ordinateur',
  templateUrl: './add-ordinateur.component.html',
  styleUrls: ['./add-ordinateur.component.css']
})
export class AddOrdinateurComponent implements OnInit {
  
  ordinateur = new Ordinateur;
  Marques: string [];
  Types: string [];

  constructor(private ordinateurService : OrdinateurService, private router: Router) { }

  ngOnInit(): void {
     this.Marques = this.ordinateurService.marques;
     this.Types = this.ordinateurService.types;
  }

  submitOrdinateur(): void {
    this.ordinateurService.addOrdinateur(this.ordinateur).subscribe(then => {
      this.router.navigate(['/ordinateur']);
    });
  }

}
