import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from "./data-manager.service";
import { englishTerm, definition, nonEnglishTerm, languageCodes } from './data-classes';

@Component({
  selector: 'app-english-term-detail',
  templateUrl: './english-term-detail.component.html',
  styleUrls: ['./english-term-detail.component.css']
})
export class EnglishTermDetailComponent implements OnInit {
  engTerm: englishTerm;
  objID: any;
  translations: nonEnglishTerm[]; // translation buttons
  languages: languageCodes[]; // ALL Languages

  constructor(private m: DataManagerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.objID = this.route.snapshot.params['id'];
    this.m.getOneEnglishTerm(this.objID).subscribe(response => this.engTerm = response);
    this.m.getSomeNonEnglishTermByEngID(this.objID).subscribe(response => this.translations = response); // translation buttons
    this.m.getLang().subscribe(r => {
      if (r) {
        this.languages = r;       
      }
    });
  }

  likeClick(def: definition): void {
    this.m.incrementEnglishLike(this.engTerm._id, def).subscribe(response => this.engTerm = response);
  }

  helpYesClick(yesId: string): void {
    this.m.EnglishHelpYes(yesId, this.engTerm).subscribe(response => this.engTerm = response);
  }

  helpNoClick(noId: string): void {
    this.m.EnglishHelpNo(noId, this.engTerm).subscribe(response => this.engTerm = response);
  }
}