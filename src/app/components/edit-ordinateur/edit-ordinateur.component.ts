import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Ordinateur } from 'src/app/models/ordinateur';


@Component({
  selector: 'app-edit-ordinateur',
  templateUrl: './edit-ordinateur.component.html',
  styleUrls: ['./edit-ordinateur.component.css']
})
export class EditOrdinateurComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private ordinateurService: OrdinateurService, private router: Router) { }

  ordinateur: Ordinateur;
  isLoading: boolean;
  Marques: string[];
  Types: string[];

  ngOnInit(): void {
    this.isLoading = true;
    this.ordinateurService.getOneOrdinateurById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Ordinateur) => {
      this.ordinateur = data;
      this.isLoading = false;
      this.Marques = this.ordinateurService.marques;
     this.Types = this.ordinateurService.types;
    });
  }

  editOrdinateur(): void {
    this.ordinateurService.editOrdinateur(this.ordinateur).subscribe(then => {
    this.router.navigate(['/ordinateur']);
});
}
}
