import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Ordinateur } from 'src/app/models/ordinateur';
import { OrdinateurComponent } from '../ordinateur/ordinateur.component';

@Component({
  selector: 'app-ordinateur-detail',
  templateUrl: './ordinateur-detail.component.html',
  styleUrls: ['./ordinateur-detail.component.css']
})
export class OrdinateurDetailComponent implements OnInit {

  id: number;
  ordinateur: Ordinateur;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private ordinateurService: OrdinateurService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ordinateurService.getOneOrdinateurById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Ordinateur) => {
      this.ordinateur = data;
      this.isLoading = false;
    })
  }

}
