# PE05 – Cities with Countries and Currency

## Input
The app collects two pieces of user input through text fields on the AddCountry screen: the country name and its currency. When the user taps "Add Country," both values are read from component state, trimmed, and validated to ensure neither field is empty before proceeding.

## Process
Once validated, a new country object is created with a unique ID (generated using uuid), the country name, and the currency. This object is passed to an `addCountry` function defined in `App.js`, which updates the shared `countries` state array using React's `useState`. Since this state lives in the top-level `App` component and is passed down to both the AddCountry and Countries screens as props, any update triggers both screens to re-render with the latest data, keeping the UI in sync in real time.

## Output
The Countries screen displays the updated list by mapping over the `countries` array and rendering each country's name and currency in a scrollable list. If no countries have been added yet, a "No saved countries!" message is shown instead, matching the same empty-state pattern used by the Cities screen.