import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  },
  {
    path: "category",
    loadChildren: () =>
      import("./category/category.module").then((m) => m.CategoryPageModule),
  },
  {
    path: "person",
    loadChildren: () =>
      import("./person/person.module").then((m) => m.PersonPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
