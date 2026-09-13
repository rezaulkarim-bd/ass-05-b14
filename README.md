
Project Name :
Dev Stack Explorer

Description :
An interactive web application built for modern developers to discover, evaluate, and curate their ideal technology stack seamlessly from a structured local dataset.


Technologies Used :

React.js & TypeScript

Tailwind CSS

Vite

React-Toastify

Local JSON Data

Core Features :

Dynamic Technology Catalog: Browse through a responsive grid of technologies complete with ratings, difficulty tags, and custom category badges loaded dynamically from a JSON file.

Interactive Stack Manager: Add or remove items instantly to your custom sidebar stack with built-in duplicate prevention and clean state handling.

Real-time Feedback System: Integrated with React-Toastify to deliver crisp notification alerts for all user actions, including successful additions, duplicate warnings, and item removals.



What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that lets us write HTML-like markup right inside our JS code. We use it because it makes UI code much cleaner, more readable, and easier to visualize compared to raw JavaScript DOM manipulation.

What is the difference between props and state?
Props (short for properties) are passed down from a parent component to a child and are completely read-only for that child. State, on the other hand, is managed locally within the component and can change over time based on user interactions, which triggers a re-render.

What does the useState hook do, and where did you use it in this project?
useState allows functional components to hold and update state. In our project, we used it in TechnologiesPage to manage the selected technologies list (const [stack, setStack] = useState(...)) whenever someone clicks "Add to Stack".

What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect handles side effects like fetching data or setting up subscriptions after a component renders. We needed it to asynchronously fetch technologies.json from the public folder when the page first loads, ensuring the data loads smoothly without blocking the initial UI render.

Why does every item in a .map() list need a unique key prop?
React uses keys to track individual items in a list. When items are added, removed, or reordered, keys help React figure out exactly which specific item changed, optimizing rendering performance instead of refreshing the whole list.

What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is a way to render different UI elements based on specific conditions, usually using ternary operators or logical expressions. In StackPanel, we used it to display either the list of selected tech items or a fallback message saying "No technologies selected" if the stack array is empty:/