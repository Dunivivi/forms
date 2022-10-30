import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild("f") signupForm: NgForm;
  defaultChoice = "advanced";
  ngOnInit() {}

  onSubmit() {
    console.log(this.signupForm.form);
    if (!this.signupForm.form.valid || this.signupForm.form.touched) {
      alert("Please, enter a valid values in form, before submit!");
    } else {
      this.signupForm.reset();
    }
  }
}
