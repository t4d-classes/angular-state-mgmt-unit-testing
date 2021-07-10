# Color Tool Code

```ts
colors: Color[] = [
  { id: 1, name: 'red', hexcode: 'FF0000' },
  { id: 2, name: 'green', hexcode: '00FF00' },
  { id: 3, name: 'blue', hexcode: '0000FF' },
];
```

```css
form > label {
  display: block;
}
```

```html
<h1>Color Tool</h1>
<ul>
  <li *ngFor="let color of colors">
    {{color.name}} {{color.hexcode}}
  </li>
</ul>
<form [formGroup]="colorForm">
  <label>
    Name:
    <input type="text" formControlName="name">
  </label>
  <label>
    Hexcode:
    <input type="text" formControlName="hexcode">
  </label>
  <button (click)="doAddColor()">Add</button>
</form>
```