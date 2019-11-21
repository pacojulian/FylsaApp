import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService



@Component({
  selector: 'app-cotizacion-all',
  templateUrl: './cotizacion-all.component.html',
  styleUrls: ['./cotizacion-all.component.css']
})
export class CotizacionAllComponent implements OnInit {

  users = [
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '003', Company: 'Estudio Color', Total: 500, Status: "Rechazada"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},{Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"},
    {Id: '001', Company: 'Barcel', Total: 500, Status: "Pagada"},
    {Id: '002', Company: 'Dobos', Total: 4000, Status: "En proceso"}, 
    

];

constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit() {

    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);


    $(document).ready(function() {

       } );

    $(".mySearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#resultsTableQuoatation #myTr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  RowSelected(u:any){
      console.log("Chato");
      console.log(u); 
    }

}
