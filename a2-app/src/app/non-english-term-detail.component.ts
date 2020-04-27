import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from "./data-manager.service";
import { nonEnglishTerm, definition, languageCodes } from './data-classes';
@Component({
  selector: 'app-non-english-term-detail',
  templateUrl: './non-english-term-detail.component.html',
  styleUrls: ['./non-english-term-detail.component.css']
})
export class NonEnglishTermDetailComponent implements OnInit {
  nonTerm: nonEnglishTerm;
  objectId: string;
  languages: languageCodes[]; // ALL Languages
  languageName: string;
  constructor(private m: DataManagerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.m.getOneNonEnglishTerm(id).subscribe(response => this.nonTerm = response);
    this.objectId = id;
    this.m.getLang().subscribe(r => {
      if (r && this.nonTerm) {
        this.languages = r;
        for (let i = 0; i < this.languages.length; ++i) {
          if (this.languages[i].code == this.nonTerm.languageCode) {
            this.languageName = this.languages[i].name;
          }
        }
      }
    });
  }

  likeClick(def: definition): void {
    this.m.incrementNonEnglishLike(this.nonTerm._id, def).subscribe(response => this.nonTerm = response);
  }

  helpYesClick(yesId: string): void {
    this.m.NonEnglishHelpYes(yesId, this.nonTerm).subscribe(response => this.nonTerm = response);
  }

  helpNoClick(noId: string): void {
    this.m.NonEnglishHelpNo(noId, this.nonTerm).subscribe(response => this.nonTerm = response);
  }
}
