# Exercise 13

Instructions: Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

## Requirements

**Requirement 1.** In the App module, upgrade the Item List component. Instead of receiving the items as an input, create a new Items service and inject it into the Item List component. The Items service should receive the items from the REST API. Add some new data to the `db.json` file.

```json
{
  "items": [
    { "id": 1, "value": "item 1" },
    { "id": 1, "value": "item 2" },
    { "id": 1, "value": "item 3" },
    { "id": 1, "value": "item 4" }
  ]
}
```

The Items service should have an `all` method that returns all of the items, and a `remove` method that removes an item by id.

The Items should load from the REST API when the component is first loaded.

**Requirement 2.** Add a "Refresh" button above the list. When the button is clicked, the list is refreshed from the REST API.

```html
<button>Refresh</button>
<ul>
  <li>item 1 <button>X</button></li>
  <li>item 2 <button>X</button></li>
  <li>item 3 <button>X</button></li>
  <li>item 4 <button>X</button></li>
</ul>
```

**Requirement 3.** Attempt to code the unit test first then code the component. If you cannot do this, then code the component then the unit test. What needs to be unit tested? Test all of the parts that need to be tested.


Ensure it all works, and please raise your hand when you are done.