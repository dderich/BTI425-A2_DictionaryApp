import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DataManagerService } from './data-manager.service';
import { nonEnglishTerm, AddDefinition, AddNonEnglish, englishTerm, languageCodes } from './data-classes';


@Component({
  selector: 'app-add-non-english-term',
  templateUrl: './add-non-english-term.component.html',
  styleUrls: ['./add-non-english-term.component.css']
})
export class AddNonEnglishTermComponent implements OnInit {
  newNonEnglishTerm: AddNonEnglish;
  newDef: AddDefinition;
  result: nonEnglishTerm;
  engTerm: englishTerm;
  languages: languageCodes[];
  langChosen: string;
  constructor(private m: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']; // english term id
    this.m.getOneEnglishTerm(id).subscribe(response => this.engTerm = response);
    this.newDef = new AddDefinition("", "", "", 0, 0);
    this.newNonEnglishTerm = new AddNonEnglish("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 0, 0, [this.newDef], id);
    this.m.getLang().subscribe(r => this.languages = r);
  }

  newTermSave(f: NgForm): void {
    this.newNonEnglishTerm.wordEnglish = this.engTerm.wordEnglish;
    this.newNonEnglishTerm.dateCreated = new Date().toISOString();
    this.newNonEnglishTerm.dateRevised = this.newNonEnglishTerm.dateCreated;
    this.newNonEnglishTerm.definitions[0].dateCreated = this.newNonEnglishTerm.dateCreated;
    this.newNonEnglishTerm.definitions[0].authorName = this.newNonEnglishTerm.authorName;
    this.newNonEnglishTerm.languageCode = this.langChosen;

    // send to web API via POST
    this.m.AddNewTermNonEnglish(this.newNonEnglishTerm).subscribe(response => {
      if (response) {
        this.result = response;
        this.router.navigate(['/nonEnglishTerm/', response._id]);
      } else {
        console.log("POST failed!");
      }
    });
  } // end of newTerm()
} // end of class