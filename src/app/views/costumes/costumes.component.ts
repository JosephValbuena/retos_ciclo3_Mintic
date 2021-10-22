import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costumes',
  templateUrl: './costumes.component.html',
  styleUrls: ['./costumes.component.css']
})
export class CostumesComponent implements OnInit {
  
  modalControl = false;
  editControl = false;

  constructor() { }

  ngOnInit(): void {
  }

  

}
