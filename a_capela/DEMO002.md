# Material Design Lite - Layout with fixed header with scrollable tabs

## Step 1 - The Layout

```
<body>
<div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
  . . . living thing . . .
</div>
</body>
```

## Step 2 - Layout Header

```
<body>
<div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class = "mdl-layout__header">

    <!-- TITLE -->

    <div class = "mdl-layout__header-row">
      <span class = "mdl-layout-title">SUPERMAIL007</span>
    </div>

    <!-- TAB BAR -->

    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a class="mdl-layout__tab is-active" href="#scroll-tab-1">INBOX</a>
      <a class="mdl-layout__tab" href="#scroll-tab-2" >SPAM</a>
      <a class="mdl-layout__tab" href="#scroll-tab-3" >TRASH</a>
    </div>

  </header>

</div>
</body>
```

## Step 3 - Layout drawer

```
<body>
<div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class = "mdl-layout__header">
    . . .
  </header>

  <!-- DRAWER -->

  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">SUPERMAIL007</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href = "">INBOX</a>
      <a class="mdl-navigation__link" href = "">SPAM</a>
      <a class="mdl-navigation__link" href = "">TRASH</a>
    </nav>
  </div>

</div>
</body>
```

For a fixed drawer, all you need to do is to introduce the `mdl-layout--fixed-drawer` class to the
first `<div>` within which the whole functional markup is defined. The `<div>` line of code looks
like this:

```
<div class="mdl-layoutmdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
   . . .
</div>
```

## Step 4 - Tab Sections

```
<body>
<div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
  . . .
</div>
<main class="mdl-layout__content">

  <section class = "mdl-layout__tab-panel is-active" id="scroll-tab-1">
    <div class = "page-content">
      <p>Lorem ipsum 1 dolor sit amet... (content)</p>
    </div>
  </section>

  <section class="mdl-layout__tab-panel" id="scroll-tab-2">
    <div class="page-content">
      <p>Lorem ipsum 2 dolor sit amet... (content)</p>
    </div>
  </section>

  <section class="mdl-layout__tab-panel" id="scroll-tab-3">
    <div class="page-content">
      <p>Lorem ipsum 3 dolor sit amet... (content)</p>
    </div>
  </section>

</main>
</body>
```
