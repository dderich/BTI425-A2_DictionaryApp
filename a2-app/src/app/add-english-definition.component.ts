import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DataManagerService } from "./data-manager.service";
import { englishTerm, definition, AddDefinition } from './data-classes';

@Component({
  selector: 'app-add-english-definition',
  templateUrl: './add-english-definition.component.html',
  styleUrls: ['./add-english-definition.component.css']
})
export class AddEnglishDefinitionComponent implements OnInit {
  currentTerm: englishTerm;
  defToAdd: AddDefinition;

  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.m.getOneEnglishTerm(id).subscribe(response => this.currentTerm = response);

    this.defToAdd = new AddDefinition("", "", "", 0, 0);
  }

  definitionSave(f: NgForm): void {
    this.defToAdd.dateCreated = new Date().toISOString();

    // web API POST method
    this.m.AddNewDefToEnglish(this.currentTerm._id, this.defToAdd).subscribe(response =>
      {
        if (response) {
          this.currentTerm = response;
          this.router.navigate(['/englishTerm/', response._id]); 
        }
        
      });
  }

  likeClick(p_def: definition): void
  {
    this.m.incrementEnglishLike(this.currentTerm._id, p_def).subscribe(response => this.currentTerm = response);
  }
}