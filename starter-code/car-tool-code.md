# Car Tool Code

```ts
export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export type NewCar = Omit<Car, "id">;
```

```ts
cars: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2017, color: 'red', price: 120000 },
];
```

```html
<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Color</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let car of cars">
      <tr class="app-car-view-row" [car]="car" *ngIf="editCarId !== car.id"
        (deleteCar)="doDeleteCar($event)" (editCar)="doEditCar($event)"></tr>
      <tr class="app-car-edit-row" [car]="car" *ngIf="editCarId === car.id"
        (saveCar)="doSaveCar($event)" (cancelCar)="doCancelCar($event)"></tr>
    </ng-container>
  </tbody>
</table>
```

```html
<td>{{car.id}}</td>
<td>{{car.make}}</td>
<td>{{car.model}}</td>
<td>{{car.year}}</td>
<td>{{car.color}}</td>
<td>{{car.price}}</td>
<td>
  <button (click)="doEditCar(car.id)">Edit</button>
  <button (click)="doDeleteCar(car.id)">Delete</button>
</td>
```

```html
<ng-container [formGroup]="editCarForm">
  <td>{{car.id}}</td>
  <td><input type="text" formControlName="make"></td>
  <td><input type="text" formControlName="model"></td>
  <td><input type="number" formControlName="year"></td>
  <td><input type="text" formControlName="color"></td>
  <td><input type="number" formControlName="price"></td>
  <td>
    <button (click)="doSaveCar()">Save</button>
    <button (click)="doCancelCar()">Cancel</button>
  </td>
</ng-container>
```

```ts
this.editCarForm = this.fb.group({
  make: this.car.make,
  model: this.car.model,
  year: this.car.year,
  color: this.car.color,
  price: this.car.price,
});
```

```css
form > label {
  display: block;
}
```

```html
<form [formGroup]="carForm">
  <label>
    Make:
    <input type="text" formControlName="make">
  </label>
  <label>
    Model:
    <input type="text" formControlName="model">
  </label>
  <label>
    Year:
    <input type="number" formControlName="year">
  </label>
  <label>
    Color:
    <input type="text" formControlName="color">
  </label>
  <label>
    Price:
    <input type="number" formControlName="price">
  </label>
  <button (click)="doSubmitCar()">{{buttonText}}</button>
</form>
```

```ts
this.carForm = this.fb.group({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});
```