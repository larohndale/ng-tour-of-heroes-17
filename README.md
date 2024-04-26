# Angular 17 Tour of Heroes Application

## GETTING STARTED

In this tutorial, you build your own Angular application from the start. This is a good way to experience a typical development process as you learn Angular application-design concepts, tools, and terminology.

If you're new to Angular, try the Try it now quick-start application first. Try it now is based on a ready-made partially completed project. You can edit the application in StackBlitz and see the results in real time.

Try it now covers the same major topics —components, template syntax, routing, services, and accessing data using HTTP— in a condensed format, following best practices.

This Tour of Heroes tutorial provides an introduction to the fundamentals of Angular and shows you how to:

```
- Set up your local Angular development environment.
- Use the Angular CLI to develop an application.
```

The Tour of Heroes application that you build helps a staffing agency manage its stable of heroes. The application has many of the features that you'd expect to find in any data-driven application.

The finished application:

```
- Gets a list of heroes
- Displays the heroes in a list
- Edits a selected hero's details
- Navigates between different views of heroic data
```

This tutorial helps you gain confidence that Angular can do whatever you need it to do by showing you how to:

- Use Angular directives to show and hide elements and display lists of hero data.
- Create Angular components to display hero details and show an array of heroes.

```

- Use one-way data binding for read-only data.

- Add editable fields to update a model with two-way data binding.

- Bind component methods to user events, like keystrokes and clicks.

- Enable users to select a hero from a list and edit that hero in the details view.

- Format data with pipes.

- Create a shared service to assemble the heroes.

- Use routing to navigate among different views and their components.

```

## SOLUTION

After you complete all tutorial steps, the final application looks like this example from the url below.

https://angular.io/tutorial/tour-of-heroes

## Design your new application

Showing the Dashboard view and the most heroic heroes:

You can click the Dashboard and Heroes links in the dashboard to navigate between the views.

If you click the dashboard hero "Magneta," the router opens a "Hero Details" view where you can change the hero's name.

Clicking the "Back" button returns you to the Dashboard. Links at the top take you to either of the main views. If you click "Heroes," the application displays the "Heroes" list view.

When you click a different hero name, the read-only mini detail beneath the list reflects the new choice.

You can click the "View Details" button to drill into the editable details of the selected hero.

## Angular Standalone Components

The standalone flag and component imports

Components, directives, and pipes can now be marked as standalone: true. Angular classes marked as standalone do not need to be declared in an NgModule (the Angular compiler will report an error if you try). I provided different examples from what was implemented in the Tour of Heroes demo as I encourage you to try this on your own!

Standalone components specify their dependencies directly instead of getting them through NgModules. For example, if PhotoGalleryComponent is a standalone component, it can directly import another standalone component ImageGridComponent:

```typescript
@Component({
  standalone: true,
  selector: "photo-gallery",
  imports: [ImageGridComponent],
  template: ` ... <image-grid [images]="imageList"></image-grid> `,
})
export class PhotoGalleryComponent {
  // component logic
}
```

Imports can also be used to reference standalone directives and pipes. In this way, standalone components can be written without the need to create an NgModule to manage template dependencies.

Using existing NgModules in a standalone component

When writing a standalone component, you may want to use other components, directives, or pipes in the component's template. Some of those dependencies might not be marked as standalone, but instead declared and exported by an existing NgModule. In this case, you can import the NgModule directly into the standalone component:

```typescript
@Component({
  standalone: true,
  selector: "photo-gallery",
  // an existing module is imported directly into a standalone component
  imports: [MatButtonModule],
  template: `
    ...
    <button mat-button>Next Page</button>
  `,
})
export class PhotoGalleryComponent {
  // logic
}
```

You can use standalone components with existing NgModule-based libraries or dependencies in your template. Standalone components can take full advantage of the existing ecosystem of Angular libraries.

Using standalone components in NgModule-based applications

Standalone components can also be imported into existing NgModules-based contexts. This allows existing applications (which are using NgModules today) to incrementally adopt the new, standalone style of component.

You can import a standalone component (or directive, or pipe) just like you would an NgModule - using NgModule.imports:

```typescript
@NgModule({
  declarations: [AlbumComponent],
  exports: [AlbumComponent],
  imports: [PhotoGalleryComponent],
})
export class AlbumModule {}
```

Bootstrapping an application using a standalone component

An Angular application can be bootstrapped without any NgModule by using a standalone component as the application's root component. This is done using the bootstrapApplication API:

```typescript
// in the main.ts file
import { bootstrapApplication } from "@angular/platform-browser";
import { PhotoAppComponent } from "./app/photo.app.component";

bootstrapApplication(PhotoAppComponent);
```

Configuring dependency injection

When bootstrapping an application, often you want to configure Angular’s dependency injection and provide configuration values or services for use throughout the application. You can pass these as providers to bootstrapApplication:

```typescript
bootstrapApplication(PhotoAppComponent, {
  providers: [
    { provide: BACKEND_URL, useValue: "https://photoapp.looknongmodules.com/api" },
    // ...
  ],
});
```

## Author

_Dominque L.D. Cox_ - [GitHub](https://github.com/larohndale)
