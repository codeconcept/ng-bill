import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-bill",
  templateUrl: "./bill.component.html",
  styleUrls: ["./bill.component.css"]
})
export class BillComponent implements OnInit {
  billForm: FormGroup;
  billNumber: number = 1;
  articles: FormArray = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.billForm = this.fb.group({
      billNumber: [this.billNumber],
      articles: this.fb.array([
        this.fb.group({
          articleQuantity: [1, Validators.required],
          articleName: ["", Validators.required]
        })
      ])
    });

    this.articles = <FormArray>this.billForm.get("articles");
  }

  addExtraArticle() {
    this.articles.push(
      this.fb.group({
        articleQuantity: [1, Validators.required],
        articleName: ["", Validators.required]
      })
    );
    console.log(this.billForm);
  }

  create() {}
}
