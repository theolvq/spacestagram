# Tests for spacestagram app

## Data fetching

- length of the array received
- dates of each object line up
- when loading, spinner is visible
- when bottom of page is reached, more data is loaded
- if error error message pops up

## User interaction

### like

- click on like/unlike + 1 added to like counter

### comment

- comment input
  - clicking on comment button focuses the input
  - typing in comment input renders
  - pressing enter and or clicking on post button publishes the comment
- emoji
  - clicking on emoji icon opens the emoji menu
  - selecting emoji adds it to the comment input and closes the emoji menu
  - clicking anywhere else closes the emoji menu

### bookmark

- clicking on bookmark button fills up the svg icon

### navigation

- clicking on random icon navigates to /random
- once in /random random pictures are loaded
