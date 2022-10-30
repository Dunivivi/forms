import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./template-form/template-form.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "AppComponent", pathMatch: "full" },
  { path: "templateform", component: TemplateFormComponent, pathMatch: "full" },
  { path: "reactiveform", component: ReactiveFormComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), FormsModule],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
