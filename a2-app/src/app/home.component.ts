import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { englishTerm } from "./data-classes";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  terms: englishTerm[];
  searchText: string;
  constructor(private m: DataManagerService) { }

  ngOnInit(): void {
    this.m.getAllEnglishTerms().subscribe(r => this.terms = r);
  }

  doSearch(): void {
    if (this.searchText.length >= 3) {
      encodeURIComponent(this.searchText);
      this.m.getSomeEnglishTerms(this.searchText).subscribe(response => this.terms = response);
    } else {
      this.m.getAllEnglishTerms().subscribe(r => this.terms = r);
    }
  }
}
