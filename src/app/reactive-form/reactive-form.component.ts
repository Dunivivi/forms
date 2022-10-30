import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  statuts = ["Stable", "Critical", "Finished"];
  signupForm: UntypedFormGroup;
  restrictedProjectNames = ["Test", "Tudor"];

  constructor() {}

  ngOnInit() {
    this.signupForm = new UntypedFormGroup({
      project: new UntypedFormGroup({
        name: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl("critical", Validators.required),
      }),
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    });
    console.log(this.signupForm);
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
