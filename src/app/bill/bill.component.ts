import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  billForm: FormGroup;
  billNumber: number = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.billForm = this.fb.group({
      billNumber: [this.billNumber],
      articleQuantity: [1, Validators.required],
      articleName: ['', Validators.required]
    });
  }

  create() {
    
  }

}
