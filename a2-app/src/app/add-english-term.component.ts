import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DataManagerService } from './data-manager.service';
import { englishTerm, AddDefinition, AddEnglish } from './data-classes';

@Component({
  selector: 'app-add-english-term',
  templateUrl: './add-english-term.component.html',
  styleUrls: ['./add-english-term.component.css']
})
export class AddEnglishTermComponent implements OnInit {
  newEnglishTerm: AddEnglish;
  def: AddDefinition;
  result: englishTerm;

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.def = new AddDefinition("", "", "", 0, 0);
    this.newEnglishTerm = new AddEnglish("", "", "", "en", "", "", "", "", "", "", "", "", "", "", "", 0, 0, [this.def]);
  }

  termSave(f: NgForm): void {
    // machine data
    this.newEnglishTerm.dateCreated = new Date().toISOString();
    this.newEnglishTerm.dateRevised = this.newEnglishTerm.dateCreated;
    this.newEnglishTerm.definitions[0].dateCreated = this.newEnglishTerm.dateCreated;
    this.newEnglishTerm.definitions[0].authorName = this.newEnglishTerm.authorName;
    
    // send to web API via POST
    this.m.AddNewTermEnglish(this.newEnglishTerm).subscribe(response => {
      if (response) {
        this.result = response;
        this.router.navigate(['/englishTerm/', response._id]);     
      } else {
        console.log("POST failed!");
      }
    });
  }
}