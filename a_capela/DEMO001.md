# Material Design Lite - Layout

## Step 1 - main template and CDN

```
<!DOCTYPE html>
<html>
<head>
  <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
  ...
</body>
</html>
```

## Step 2 - Layout

```
<body>
   <div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">

   </div>
</body>
```

* **mdl-layout** .- identifies the container as an MDL component and is part of the outer container element

* **mdl-js-layout** .- adds MDL behavior to the layout and is part of the outer container element

* **mdl-layout--fixed-header** .- makes the header always visible, even on small screens

## Step 3 - Layout Header

```
<body>
   <div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
       <header class = "mdl-layout__header">
         <div class = "mdl-layout__header-row">
           <span class = "mdl-layout-title">SUPERMAIL007 . . .</span >
           <div class = "mdl-layout-spacer"></div>
           <!-- Navigation -->
           <nav class = "mdl-navigation">
             <a class = "mdl-navigation__link" href = "" style = "color:yellow">INBOX</a>
             <a class = "mdl-navigation__link" href = "" style = "color:yellow">SPAM</a>
             <a class = "mdl-navigation__link" href = "" style = "color:yellow">TRASH</a>
           </nav>
         </div>
       </header>
   </div>
</body>
```

* header **.mdl-layout__header** .- MDL class for header tag
* span **.mdl-layout-title** .- the title
* div **.mdl-layout-spacer** .- the space
* nav **.mdl-navigation** .- the navigator
* a. **.mdl-navigation__link** .- item link

## Step 4 - Layout Drawer

```
<body>
   <div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">
       <header class = "mdl-layout__header">
         . . .
       </header>
       <div class = "mdl-layout__drawer">
         <span class = "mdl-layout-title">
           SUPERMAIL007
         </span>
         <nav class = "mdl-navigation">
           <a class = "mdl-navigation__link" href = "">INBOX</a>
           <a class = "mdl-navigation__link" href = "">SPAM</a>
           <a class = "mdl-navigation__link" href = "">TRASH</a>
         </nav>
      </div>
   </div>

</body>
```

* div **.mdl-layout__drawer** .- MDL class for drawer div tag
* span **.mdl-layout-title** .- the title
* nav **.mdl-navigation** .- the navigator
* a. **.mdl-navigation__link** .- item link

For a **fixed drawer**, all you need to do is to introduce the
`mdl-layout--fixed-drawer` class to the first <div> within which the
whole functional markup is defined

```
<body>
  <div class = "mdl-layout mdl-js-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
  . . .
  </div>
</body>
```

## Step 5 - layout Content

```
<body>
  <div class = "mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <header class = "mdl-layout__header"> . . . </header>

    <div class = "mdl-layout__drawer"> . . .  </div>

    <main class = "mdl-layout__content">
      <div class = "page-content">
        <p>Come Undone ...</p>
      </div>
    </main>

  </div>
</body>
```

* main **.mdl-layout__content** .-  tag to define the layout's primary
content and assign the `mdl-layout__content` class to it.
`mdl-layout__content` class is mandatory for defining the container as
the MDL layout content.

<br/>

## Installing Material Design Lite

### Using CDN

```
<head>
  . . .
  <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  . . .
</head>
```

### Installing locally

[download](https://getmdl.io/started/index.html#download)

### Using npm command

```
npm install material-design-lite --save
```

### Customizing CSS

[Customizing & download](https://getmdl.io/customize/index.html)
