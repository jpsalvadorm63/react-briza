# Material Design Lite - The Grid System

The grid system in MDL is quite easy and helps lay out the content for
multiple devices based on different screen sizes. By default, a grid
in MDL has:

* 12 columns for the desktop screen
* 8 for tablets
* 4 for phone sizes
* Cells are laid out sequentially in a row.
* If a cell doesn’t fit in the row in one of the screen sizes, it flows into the following line.
* If a cell has a specified column size equal to or larger than the number of columns for the
current screen size, it takes up the entirety of its row.

## Step 1 - Add Style

```
<!DOCTYPE html>
<html>
<head>
  <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <style>
    .my_cell {
      text-align:center;
      border: 1px solid black;
    }
  </style>
</head>
<body>
    . . .
</body>
</html>
```

## Step 2 - Ther Layout Header and Drawer

```
<!DOCTYPE html>
<html>
<head>
  . . .
</head>
<body>
<div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class = "mdl-layout__header">

    <div class = "mdl-layout__header-row">
      <span class = "mdl-layout-title">SUPERMAIL007</span>
    </div>

    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a class="mdl-layout__tab is-active" href="#scroll-tab-1" >INBOX</a>
      <a class="mdl-layout__tab" href="#scroll-tab-2" >SPAM</a>
      <a class="mdl-layout__tab" href="#scroll-tab-3" >TRASH</a>
    </div>
  </header>
  <div class = "mdl-layout__drawer">
    <span class="mdl-layout-title">SUPERMAIL007</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link is-active" href="">INBOX</a>
      <a class="mdl-navigation__link" href="">SPAM</a>
    </nav>
  </div >

</div>
</body>
</html>
```

## Step 3 - Ther Grids

```
<!DOCTYPE html>
<html>
<head>
  . . .
</head>
<body>
<div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class = "mdl-layout__header">
    . . .
  </header>
  <div class = "mdl-layout__drawer">
    . . .
  </div >

  <main class="mdl-layout__content">

    <section class = "mdl-layout__tab-panel is-active" id="scroll-tab-1">
      <div class = "page-content">
        <div class="mdl-grid">
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 01</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 02</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 03</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 04</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 05</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 06</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 07</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 08</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 09</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 10</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 11</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 12</div>
        </div>
      </div>
    </section>

    <section class="mdl-layout__tab-panel" id="scroll-tab-2">
      <div class="page-content">
        <div class="mdl-grid">
          <div class="my_cell mdl-cell mdl-cell--4-col">Cloud</div>
          <div class="my_cell mdl-cell mdl-cell--4-col">Cloud</div>
          <div class="my_cell mdl-cell mdl-cell--4-col">Cloud</div>
        </div>
      </div>
    </section>

    <section class="mdl-layout__tab-panel" id="scroll-tab-3">
      <div class="page-content">
        <div class="mdl-grid ">
          <div class="my_cell mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">6 (8 tablet)</div>
          <div class="my_cell mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet">4 (6 tablet)</div>
          <div class="my_cell mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2 (4 phone)</div>
        </div>
      </div>
    </section>

  </main>

</div>
</body>
</html>
```

* `mdl-grid`: Identifies the `<div>` as an MDL grid component
* `mdl-cell`: Identifies the `<div>` as an MDL cell
* `mdl-cell--1-col`: Sets the column size for the cell to 1 cell of the 12 cells on a desktop screen
* `mdl-cell--4-col`: Sets the column size for the cell to 4 cells of the 12 cells on a desktop screen
* `mdl-cell--8-col-tablet`: Sets the column size for the cell to 8 cells on a tablet screen
* `mdl-cell--6-col-tablet`: Sets the column size for the cell to 6 cells on a tablet screen
* `mdl-cell--4-col-phone`: Sets the column size for the cell to 4 cells on a phone screen

## Step 3 - Ther Joining All Grids

```
<!DOCTYPE html>
<html>
<head>
  . . .
</head>
<body>
<div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class = "mdl-layout__header">
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      . . .
      <a class="mdl-layout__tab" href="#scroll-tab-all" >ALL</a>
    </div>
  </header>
  <div class = "mdl-layout__drawer">
    . . .
  </div >
  <main class="mdl-layout__content">
    <section class = "mdl-layout__tab-panel is-active" id="scroll-tab-1">
      . . .
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-2">
      . . .
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-3">
      . . .
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-all">
      <div class="page-content">
        <div class="mdl-grid">
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 01</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 02</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 03</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 04</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 05</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 06</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 07</div>
          <div class="my_cell mdl-cell mdl-cell--1-col">Cloud 08</div>
        </div>
        <div class="mdl-grid">
          <div class="my_cell mdl-cell mdl-cell--4-col">Cloud 21</div>
          <div class="my_cell mdl-cell mdl-cell--4-col">Cloud 22</div>
          <div class="my_cell mdl-cell mdl-cell--4-col">Cloud 23</div>
        </div>
        <div class="mdl-grid ">
          <div class="my_cell mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">6 (8 tablet)</div>
          <div class="my_cell mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet">4 (6 tablet)</div>
          <div class="my_cell mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2 (4 phone)</div>
        </div>
      </div>
    </section>

  </main>
</div>
</body>
</html>
```
