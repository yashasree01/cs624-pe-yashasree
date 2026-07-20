# Input

The user provides input through a text field labeled "Which course did you like?"
This is a controlled `TextInput` component whose value is tied to a piece of
React state, `favoriteCourse`. As the user types, each keystroke triggers the
`onChangeText` handler, updating the state in real time.

# Process

The app processes two things. First, three hardcoded arrays — `coreCourses`,
`depthCourses`, and a single `capstoneCourse` string — are mapped over using
`.map()` to dynamically generate a `Text` component for each course, avoiding
repetitive JSX. Second, the `useState` hook manages the favorite-course input:
every change to the text field re-renders the component, and a conditional
check (`favoriteCourse !== ''`) determines whether to display the confirmation
text below the input.

# Output

The app renders a scrollable screen (`ScrollView`) containing an icon image,
a course header, the full list of MSCS core, depth-of-study, and capstone
courses grouped under styled section headers, the text input field, and,
once the user types something, a line confirming their favorite course
selection.
