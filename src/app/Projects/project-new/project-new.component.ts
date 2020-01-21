import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';


@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  selectedCompany: string;
  selectedAssociate: string;
  summaryDesc: string;
  optionsCompany = [
    { name: "Barcel", value: 1 },
    { name: "Dobos", value: 2 },
    { name: "Estudio Color", value: 3 }
  ]

  optionsAssociate = [
    { name: "pacoc", value: 1 },
    { name: "pedro", value: 2 },
    { name: "juan", value: 3 }
  ]

  personal = [
    { name: "Daniel Flores", job: 20, salary: 100 },
    { name: "Mario Flores", job: 40, salary: 200 },
    { name: "El chato Flores", job: 40, salary: 2000 },
    { name: "Daniel Flores", job: 20, salary: 100 },
    { name: "Mario Flores", job: 40, salary: 200 },
    { name: "Daniel Flores", job: 20, salary: 100 },
    { name: "Mario Flores", job: 40, salary: 200 },
    { name: "Daniel Flores", job: 20, salary: 100 },
    { name: "Mario Flores", job: 40, salary: 200 },
    { name: "Daniel Flores", job: 20, salary: 100 },
    { name: "Mario Flores", job: 40, salary: 200 },
    { name: "Daniel Flores", job: 20, salary: 100 },
    { name: "Mario Flores", job: 40, salary: 200 }
  ]
  isAssociate = false;

  summary2 = {
    comp: "",
    associate: "",
    desc: "",
    time: "",
  }
  selectedPersonal = {
    name: "",
    job: "",
    salary: 0
  }
  resultsPersonal = [];

  ngOnInit() {

    $(document).ready(function () {
      /*$(".datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  });*/

    });

    $("#mySearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#resultsTable #myTr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });


  }
  callType(value) {
    this.isAssociate = true;
    //Call to service that brings associate from that company

  }
  openModalAddPersonal(template: TemplateRef<any>, personal) {
    this.selectedPersonal.name = personal.name;
    this.selectedPersonal.job = personal.job;
    this.selectedPersonal.salary = personal.salary;
    this.modalRef = this.modalService.show(template);
  }
  openModalSummary(template: TemplateRef<any>) {
    this.summary2.comp = this.selectedCompany;
    this.summary2.associate = this.selectedAssociate;
    this.summary2.desc = this.summaryDesc;
    this.modalRef = this.modalService.show(template);
    //console.log(this.resultsPersonal);
  }

  addP() {
    this.resultsPersonal.push({ name: this.selectedPersonal.name, job: this.selectedPersonal.job, salary: this.selectedPersonal.salary });
    this.modalRef.hide();

  }

}
