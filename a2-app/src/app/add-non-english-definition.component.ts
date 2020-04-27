import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DataManagerService } from "./data-manager.service";
import { nonEnglishTerm, AddDefinition, definition } from './data-classes';

@Component({
  selector: 'app-add-non-english-definition',
  templateUrl: './add-non-english-definition.component.html',
  styleUrls: ['./add-non-english-definition.component.css']
})
export class AddNonEnglishDefinitionComponent implements OnInit {
  currentTerm: nonEnglishTerm;
  defToAdd: AddDefinition;
  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.m.getOneNonEnglishTerm(id).subscribe(response => this.currentTerm = response);

    this.defToAdd = new AddDefinition("", "", "", 0, 0);
  }

  definitionSave(f: NgForm): void {
    this.defToAdd.dateCreated = new Date().toISOString();

    // web API POST method
    this.m.AddNewDefToNonEnglish(this.currentTerm._id, this.defToAdd).subscribe(response => {
      if (response) {
        this.currentTerm = response;
        this.router.navigate(['/nonEnglishTerm/', response._id]);
      }
    });
  }

  likeClick(def: definition): void {
    this.m.incrementNonEnglishLike(this.currentTerm._id, def).subscribe(response => this.currentTerm = response);
  }
}
