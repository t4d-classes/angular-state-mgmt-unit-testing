# Exercise 12

Instructions: Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

## Requirements

**Requirement 1.** In the App module, upgrade the Item List component. Item List should produce output that looks like this:

```html
<ul>
  <li>item 1 <button>X</button></li>
  <li>item 2 <button>X</button></li>
  <li>item 3 <button>X</button></li>
  <li>item 4 <button>X</button></li>
</ul>
```

The list of items should be passed in as an input and the list should have the following structure:

```ts
[
  { id: number, value: string },
  { id: number, value: string },
  { id: number, value: string },
]
```

When the "X" button is clicked the component should output the `id` of the item that was clicked.

**Requirement 2.** Attempt to code the unit test first then code the component. If you cannot do this, then code the component then the unit test. What needs to be unit tested?  Test all of the parts that need to be tested.


Ensure it all works, and please raise your hand when you are done.