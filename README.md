# Mentoring Ivan progress

## Personality

### Start point

- Base: ? (has to be estimated)
- Magento 2: LESS, XML, PHTML
- Vue: —
- React: —

### Expected result point

- Base: 
    - JS usage
    - TS will be a plus
- Magento 2: 
    - jQuery widgets
    - Knockout templates
    - UI components
- Vue: 
    - Editing on component-template level
    - Composables will be a plus
    - Store manager will be a plus
- React
    - Editing on component-template level
    - Custom hooks will be a plus
    - Store manager will be a plus

## Mentoring

### Interaction keys

What I have to do as a mentor:
- Providing a list of useful links to docs, examples, and videos
- Prepare simple tasks (mainly ideas, but probably with start code templates) which have to be solved
- Code review

### Expected tools

Which tool could be used during the mentoring:
- A public board to track progress
- A public GitHub repo
    - Public GitHub Wiki pages to collect useful links
    - PRs to provide code review comments
- Stackblitz or Codepen to store code examples as a starter kit for tasks (only for complex ones)
- Codewars to solve basic tasks
- Warden for local purposes to install and interact with Magento 2 project

### Languages

- Belarusian + Ukrainian:
    - Internal communication
    - Explanation
    - Studying materials
        - Videos
        - Magento guide (restricted to share with anyone else)
- English
    - GitHub repo 
        - Tasks description on board
        - Wiki pages
        - Code review comments
    - Studying materials
        - Videos
        - Documentation

## Roadmap

1. **Phase 1** — Estimate JS knowledge
    1. Start with base JS usage:
        1. Array manipulations
        2. Dynamic rendering
        3. Events listener
2. **Phase 2** — Intensive JS practice
    1. Local Storage — JS data storing.
    2. Event loop — asynchronous operations
    3. Fetch and render data
    4. Write books app with searchable listing, pagination and details page
3. **Phase 3** — Jumping to libraries
    1. Knockout.js
        1. Template usage
        2. Directives: if, ifnot, foreach
        3. Bindings: attr, style, css, click, submit, etc
        4. Observables (primitives, arrays, objects)
        5. Trigger re-rendering for object observables
        6. Write books app with searchable listing, pagination and details page
    2. Vue
        1. Template usage
        2. Bindings: v-if, v-for, class, click, submit, change
        3. Ref, Reactive, shallow
        4. Props
        5. Models
        6. Share dynamic data between components
        7. Lifecycle hooks: onBeforeMount, onMounted, onUnmounted, etc
        8. Context
        9. Pinia (optional)
        10. Write books app with searchable listing, pagination and details page
    3. React
        1. Template JSX usage
        2. Directives: if, map
        3. Bindings: style, onClick, onSubmit
        4. useState
        5. Props
        6. Share dynamic data between components
        7. Multi-functional lifecycle hooks: useEffect, useLayoutEffect
        8. useCallback
        9. useContext
        10. Redux (optional)
        11. Write books app with searchable listing, pagination and details page
4. **Phase 4** — Magento 2
    1. Difference between Knockout.js library and integrated Knockout.js in Magento 2
    2. Templates usage
    3. Calling view model from PHTML
    4. Provide data to Knockout HTML templates
    5. Playing with the data context
    6. Render dynamic components
    7. Share dynamic data between components
    8. Mixin components
    9. Reassign templates via requirejs-config
    10. Move data to XML
    11. Stateful
    12. Write books app with searchable listing, pagination and details page
5. **Last step** — Next steps outside the mentoring process



