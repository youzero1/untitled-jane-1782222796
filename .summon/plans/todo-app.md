---
status: building
title: Todo App
---

1. Create /app/src/styles/global.css with `@import "tailwindcss";` as the first line, plus any base resets needed.

2. Create /app/src/types/todo.ts defining a Todo type with fields: id (string), text (string), completed (boolean), createdAt (Date).

3. Create /app/src/hooks/useTodos.ts — a custom hook that manages the todo list state. It must:
   - Store todos in localStorage so they persist across page refreshes.
   - Expose functions to add a new todo, toggle a todo's completed state, and delete a todo.
   - Expose the current list of todos and a filter value (all / active / completed).
   - Expose a function to change the filter.
   - Expose a function to clear all completed todos at once.

4. Create /app/src/components/TodoInput.tsx — a text input bar at the top of the app where the user types a new task and presses Enter (or clicks an Add button) to add it. It should be disabled when the input is empty.

5. Create /app/src/components/TodoItem.tsx — a single row showing one task. It must include:
   - A checkbox to toggle completed state (completed tasks show strikethrough text).
   - The task text.
   - A delete (trash) button that appears on hover.

6. Create /app/src/components/TodoList.tsx — renders the filtered list of TodoItem rows. Shows a friendly empty-state message when there are no tasks matching the current filter.

7. Create /app/src/components/TodoFooter.tsx — a footer bar below the list showing:
   - Count of remaining (active) tasks.
   - Three filter buttons: All, Active, Completed (the active filter is visually highlighted).
   - A "Clear completed" button that only appears when there is at least one completed task.

8. Create /app/src/pages/TodoPage.tsx — the main page that composes TodoInput, TodoList, and TodoFooter together. Centers the app on screen with a max-width card, a heading ("My Todos"), and a clean light background.

9. Update /app/src/main.tsx to import global.css and render TodoPage as the root component.

10. Verify /app/index.html has the correct Vite entry point pointing to /app/src/main.tsx.
