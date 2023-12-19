import { Component, OnInit } from '@angular/core';
import { Character } from '../model/Charater';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentPage = 1;
  data: Character[] = [];
  pageInfo: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  loadPage(page: number) {
    this.currentPage = page;
    this.apiService.getCharacters(page).subscribe(
      data => {
        const { info, results } = data;
        this.data = results;
        this.pageInfo = info;
      })

  }
  goToNextPage() {
    this.loadPage(this.currentPage + 1);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }
}

