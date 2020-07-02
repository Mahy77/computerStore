import { Component, OnInit, TemplateRef } from '@angular/core';
import { Ordinateur } from 'src/app/models/ordinateur';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {

  ordinateurs : Ordinateur[];
  isLoading: boolean;
  modalRef: BsModalRef;
  messageModal: string;

  constructor(private ordinateurService: OrdinateurService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ordinateurService.getAllOrdinateurs().subscribe((data: Ordinateur[]) => {
      this.ordinateurs = data;
      this.isLoading = false;
  })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(id: number): void {
    this.isLoading = true;
    this.ordinateurService.ordinateurDelete(id).subscribe(then => {
      this.ordinateurService.getAllOrdinateurs().subscribe((data: Ordinateur[]) => {
        this.ordinateurs = data;
        this.isLoading = false;
      });
    });
    this.messageModal = 'Message supprimé!';
    this.modalRef.hide();
  }
  decline(): void {
    this.messageModal = 'Declined!';
    this.modalRef.hide();
  }
}
