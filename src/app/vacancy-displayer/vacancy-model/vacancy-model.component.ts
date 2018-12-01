import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../../models/vacany';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-vacancy-model',
  templateUrl: './vacancy-model.component.html',
  styleUrls: ['./vacancy-model.component.css']
})
export class VacancyModelComponent implements OnInit {
@Input() tempVacancyForModal: Vacancy;
  constructor(private ms: ModelsService) { }

  ngOnInit() 
  {

  }

  closeModal()
  {
    this.ms.closeModal();
  }

}
