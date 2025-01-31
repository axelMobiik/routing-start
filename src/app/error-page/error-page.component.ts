import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export class ErrorPageComponent implements OnInit {
  // Arguments
  errorMessage: string;

  // Constructor
  constructor(private route: ActivatedRoute) {}

  // Hooks
  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data['message']
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }

  // Methods
}
