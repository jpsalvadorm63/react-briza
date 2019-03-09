# Material Design Lite - An Intuitive Page

## Step 1 - The head Section

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Website Using Material Design Lite</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Roboto:400,100,500,300italic,500italic,700italic,900,300'>
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.brown-orange.min.css" />
  <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
    . . .
  </div>
  <script src='https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js'></script>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
</body>
</html>
```

## Step 2 - Create the `style.css` file

```
img {
    max-width: 100%;
    height: auto;
    display: block;
}

ul {
    list-style-type: none;
}
```

## Step 3 - Layout Header

```
<!DOCTYPE html>
<html>
<head>
  . . .
</head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Anirudh Prabhu</span>
    </div>
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#fixed-tab-1" class="mdl-layout__tab is-active">About</a>
      <a href="#fixed-tab-2" class="mdl-layout__tab">Moments</a>
    </div>
  </header>

</div>
</body>
</html>
```

#### the `style.css` part

```
/* HEADER */
.mdl-layout__tab-bar {
    margin: 0 auto;
    max-width: 300px;
}
```

## Step 4 - Layout Drawer

```
<!DOCTYPE html>
<html>
<head>
  . . .
</head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

   <!-- HEADER -->
  <header class="mdl-layout__header">
    . . .
  </header>

  <!-- DRAWER -->
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Anirudh Prabhu</span>
    <div class="avatar">
      <img src="jp.png" alt="jp" class="avatar-img">
    </div>

    <div class="drawer-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officiis animi,
      soluta ab deserunt dolore fugit voluptatem laboriosam, magni. Eligendi quia quasi
      qui cupiditate optio fugit vel, suscipit harum illum.
    </div>
  </div>

</div>
</body>
</html>
```

#### the `style.css` part

```
/* DRAWER */
.mdl-layout__drawer-button,
.mdl-layout__drawer-button i {
    color: white;
}
@media (max-width: 900px) {
  .mdl-layout__drawer-button {
    width: 100%;
    margin: 0;
    background-color: transparent;
  }
}
.avatar {
  height: 200px;
  width: 200px;
  margin: 0 auto 2em;
}
.avatar-img {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border-radius: 50%;
}
.drawer-text {
  padding: 1em;
  text-align: center;
}
```

## Step 5 - Main Structure

```
<!DOCTYPE html>
<html>
<head>
  . . .
</head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

   <!-- HEADER -->
  <header class="mdl-layout__header"> . . . </header>

  <!-- DRAWER -->
  <div class="mdl-layout__drawer"> . . . </div>


  <main class="mdl-layout__content">
    <!-- TAB 1 -->
    <div class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
      <div class="page-content">
        . . . TAB 1
      </div>
    </div>

    <!-- TAB 2 -->
    <div class="mdl-layout__tab-panel" id="fixed-tab-2">
      <div class="page-content">
        . . . TAB 2
      </div>
    </div>

    <!-- CONTACT -->
    <div class="mdl-grid mdl-grid--no-spacing">
      <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone contact-panel form-panel mdl-color--brown-50">
        . . . CONTACT
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="mdl-mini-footer mdl-color--brown-200">
      <div class="mdl-mini-footer__left-section">
        . . . FOOTER
      </div>
    </footer>

  </main>
</div>
</body>
</html>
```

## Step 6 - TAB 1

### Step 6.1 - HERO SECTION

```
<!DOCTYPE html>
<html>
<head> . . . </head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

   <!-- HEADER -->

  <!-- DRAWER -->

  <main class="mdl-layout__content">
    <!-- TAB 1 -->
    <div class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
      <div class="page-content">
        <!-- HERO SECTION -->
        <div class="hero-section">
          <div class="hero-text mdl-typography--text-center">
            <h1 class="mdl-typography--display-2">I'm Anirudh Prabhu</h1>
            <p class="mdl-typography--display-1">I'm a passionate mobile photographer</p>
            <a class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--accent kitty-hero__text-button" href="#intro">
              <i class="material-icons">keyboard_arrow_down</i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2 -->

    <!-- CONTACT -->

    <!-- FOOTER -->
  </main>
</div>
</body>
</html>
```

#### the `style.css` part

```
/* HERO SECTION */
.hero-section {
    height: 100vh;
    /* IE11 doesn't like min-height */
    width: 100%;
    padding: 0;
    background-color: rgba(121,85,72, 0.6);
    background-image: -webkit-linear-gradient(rgba(121,85,72, 0.3), rgba(121,85,72, 0.3)), url(https://pacdn.500px.org/2185509/e9a80e8a5bb01d46da6830d55a34c6c61146d27d/cover_2048.jpg?2);
    background-image: linear-gradient(rgba(121,85,72, 0.3), rgba(121,85,72, 0.3)), url(https://pacdn.500px.org/2185509/e9a80e8a5bb01d46da6830d55a34c6c61146d27d/cover_2048.jpg?2);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: auto;
}

.hero-text {
    color: white;
    margin: auto;
}

@media screen and (max-width: 580px) {
    .hero-text p {
        color: red;
        white-space: pre-line;
    }
}

.kitty-hero__text-button, .mdl-button--fab.kitty-hero__text-button  {
    position: absolute;
    bottom: -28px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
```

### Step 6.2 - INTRO SECTION

```
<!DOCTYPE html>
<html>
<head> . . . </head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

   <!-- HEADER -->

  <!-- DRAWER -->

  <main class="mdl-layout__content">
    <!-- TAB 1 -->
    <div class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
      <div class="page-content">
        <!-- HERO SECTION -->

        <!-- INTRO SECTION -->
        <div id="intro" class="mdl-grid intro-section">
          <div class="about-kitty mdl-cell mdl-cell--12-col">
            <p class="mdl-typography--headline">
              Welcome to my web page! I wish to display my mobile photography thru this web page.
            </p>
          </div>

          <div class="about-kitty mdl-cell mdl-cell--12-col">
            <p>
              Various mobiles and gadgets with which i have performed photography.
            </p>
          </div>

          <div class="about-kitty mdl-cell mdl-cell--5-col mdl-cell--1-col-tablet mdl-cell--hide-phone">
            <div class="circle-container">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>

          <div class="about-kitty mdl-cell mdl-cell--7-col mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div class="topics-container">
              <div class="topic">Xiaomi MI3</div>
              <div class="topic">OnePlus 2</div>
              <div class="topic">Sony DSC QX100</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2 -->

    <!-- CONTACT -->

    <!-- FOOTER -->
  </main>
</div>
</body>
</html>
```

#### the `style.css` part

```css
/* INTRO SECTION */
.intro-section, .cards-section {
    max-width: 960px;
}
.about-kitty p {
    max-width: 640px;
    margin: auto;
}
.circle-container {
    width: 100%;
    min-height: 100px;
    padding: 2em 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}
.circle-container .circle {
    height: 16px;
    width: 16px;
    background-color: #c51162;
    border-radius: 50%;
    margin: 0 3px 9px;
}
.topics-container {
    padding: 2em 0;
}
.topics-container .topic {
    font-size: 20px;
    margin: 0 2px 5px;
}
@media screen and (max-width: 480px) {
    .topics-container .topic {
        margin-bottom: 0.5em;
    }
}
```

### Step 6.3 - TESTIMONIAL SECTION

```
<!DOCTYPE html>
<html>
<head> . . . </head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

   <!-- HEADER -->

  <!-- DRAWER -->

  <main class="mdl-layout__content">
    <!-- TAB 1 -->
    <div class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
      <div class="page-content">
        <!-- HERO SECTION -->

        <!-- INTRO SECTION -->

        <!-- TESTIMONIAL SECTION -->
        <div class="mdl-grid mdl-grid--no-spacing fullwidth-panel">
          <div class="mdl-cell mdl-cell--12-col mdl-typography--text-center quote-panel">
            <blockquote>
              <p>
                Taking an image, freezing a moment, reveals how rich reality truly is.
              </p>
              <footer>
                — <cite>Anonymous</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2 -->

    <!-- CONTACT -->

    <!-- FOOTER -->
  </main>
</div>
</body>
</html>
```

#### the `style.css` part

```
/* TESTIMONIAL */
.fullwidth-panel {
    color: white;
    background-color: rgba(156, 39, 176, 0.6);
}
.fullwidth-panel p {
    max-width: 640px;
    margin: auto;
}
.quote-panel {
    background-image: -webkit-linear-gradient(rgba(63, 81, 181, 0.5), rgba(63, 81, 181, 0.5)), url('https://udemy-images.udemy.com/course/750x422/394968_538b_7.jpg');
    background-image: linear-gradient(rgba(63, 81, 181, 0.5), rgba(63, 81, 181, 0.5)), url('https://udemy-images.udemy.com/course/750x422/394968_538b_7.jpg');
    background-position: center 5%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4em 2em 2em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-line-pack: start;
    align-content: flex-start;
}
@media screen and (min-width: 800px) {
    .quote-panel {
        background-position: center 0;
        padding: 6em 2em;
    }
}
@media screen and (min-width: 1200px) {
    .quote-panel {
        background-position: center 8%;
        padding: 10em 2em 8em;
    }
}
```

## Step 7 - TAB 2

```
<!DOCTYPE html>
<html>
<head> . . . </head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

   <!-- HEADER -->

  <!-- DRAWER -->

  <main class="mdl-layout__content">
    <!-- TAB 1 -->

    <!-- TAB 2 -->
    <div class="mdl-layout__tab-panel" id="fixed-tab-2">
      <div class="page-content">
        <!-- CARDS  -->
        <div class="mdl-grid cards-section">
          <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-card mdl-shadow--2dp home-bringing-card">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Roses everywhere</h2>
            </div>
            <div class="mdl-card__supporting-text">
              Roses everywhere in flower market
            </div>
          </div>

          <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp play-card">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Random flower</h2>
            </div>
            <div class="mdl-card__supporting-text">
              Random flower
            </div>
          </div>

          <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp litter-card">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Lilac</h2>
            </div>
            <div class="mdl-card__supporting-text">
              Lilacs are a beloved, fragrant shrub that produce clusters of light-purple flowers.
            </div>
          </div>

          <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp diet-card">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Beautiful sunset at aguada beach</h2>
            </div>
            <div class="mdl-card__supporting-text">
              Beautiful sunset at aguada beach in Goa
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTACT -->

    <!-- FOOTER -->
  </main>
</div>
</body>
</html>
```

#### the `style.css` part

```
/* CARDS SECTION */
.cards-section {
    padding: 5em;
}
.mdl-card__title {
    min-height: 300px;
}
.mdl-card__title > .mdl-card__title-text {
    color: white ;
}
.home-bringing-card .mdl-card__title {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://drscdn.500px.org/photo/210599845/q%3D80_h%3D300/v2?webp=true&sig=94f8683780d7d009224f477342bf4c34740920b5b75576cb8793ff52e7229b1a') center / cover;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://drscdn.500px.org/photo/210599845/q%3D80_h%3D300/v2?webp=true&sig=94f8683780d7d009224f477342bf4c34740920b5b75576cb8793ff52e7229b1a') center / cover;
}
.play-card .mdl-card__title {
    background: url('https://drscdn.500px.org/photo/225478901/q%3D80_h%3D450/v2?webp=true&sig=ddd21866e9502c5f56aef387adf4cc0553513de4582ed30a5bc57ba817f43b06') center / cover;
}
.image-card {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/234228/image-card.jpg') center / cover;
}
.image-card > .mdl-card__actions {
    height: 52px;
    padding: 16px;
    background: rgba(0, 0, 0, 0.6);
}
.image-card__title {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
}
.litter-card .mdl-card__title {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://drscdn.500px.org/photo/187345183/q%3D80_h%3D450/v2?webp=true&sig=883a5a5734775d4b4084bd4f5fe7cd7ac9728bf0b6fc5d4ee91a522444023e6e') center / cover;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://drscdn.500px.org/photo/187345183/q%3D80_h%3D450/v2?webp=true&sig=883a5a5734775d4b4084bd4f5fe7cd7ac9728bf0b6fc5d4ee91a522444023e6e') center / cover;
}
.diet-card .mdl-card__title {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://drscdn.500px.org/photo/109883725/q%3D80_h%3D450/v2?webp=true&sig=29611a8077b1b73ce190f28e138ed7147973317e15ba8c9ed418a4f797683df8') center / cover;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://drscdn.500px.org/photo/109883725/q%3D80_h%3D450/v2?webp=true&sig=29611a8077b1b73ce190f28e138ed7147973317e15ba8c9ed418a4f797683df8') center / cover;
}
.card-small {
    min-height: auto;
}
.card-small > .mdl-card__title {
    color: rgba(0, 0, 0, 0.87);
    height: auto;
    min-height: auto;
}
.card-small .mdl-card__title-text {
    font-size: 16px;
}
.card-small .mdl-card__title-text:before {
    content: "";
    display: inline-block;
    margin-right: 0.5em;
    width: 18px;
    height: 18px;
    background-color: #c51162;
    border-radius: 50%;
}
```

## Step 8 - The Contact and the Social

```
<!DOCTYPE html>
<html>
<head> . . . </head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

   <!-- HEADER -->

  <!-- DRAWER -->

  <main class="mdl-layout__content">
    <!-- TAB 1 -->

    <!-- TAB 2 -->

    <!-- CONTACT and SOCIAL-->
    <div class="mdl-grid mdl-grid--no-spacing">
      <!-- CONTACT -->
      <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone contact-panel form-panel mdl-color--brown-50">
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="name">
            <label class="mdl-textfield__label" for="name">Your name</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="email" id="email">
            <label class="mdl-textfield__label" for="email">Your email</label>
          </div>
          <div class="button-container clearfix">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent subscribe-button">
              Join my fans
            </button>
          </div>
        </form>
      </div>

      <!-- SOCIAL-->
      <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone contact-panel address-panel mdl-typography--text-center mdl-color--brown-100">
        <p class="mdl-typography--title-color-contrast mdl-typography--text-nowrap mdl-typography--font-thin">
          <i class="material-icons">email</i> <a href="mailto:info@amp.com">info@amp.com</a>
        </p>

        <p class="mdl-typography--title-color-contrast mdl-typography--text-nowrap mdl-typography--font-thin">
          <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" href="twitter.com">twitter</a>
          <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" href="plus.google.com">Google+</a>
          <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" href="facebook.com">Facebook</a>
        </p>
      </div>
    </div>

    <!-- FOOTER -->
  </main>
</div>
</body>
</html>
```

#### the `style.css` part

```
/* CONTACT */
.contact-panel {
    padding: 6em 4em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: auto;
}
.mdl-textfield {
    display: block;
    width: 100%;
    padding: 20px 0;
}
@media screen and (min-width: 800px) {
    .subscribe-button {
        float: right;
    }
}
.contact-intro {
    color: rgba(255, 255, 255, 0.87);
}
.contact-panel {
    padding: 6em 4em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: auto;
}
.mdl-textfield {
    display: block;
    width: 100%;
    padding: 20px 0;
}

@media screen and (min-width: 800px) {
    .subscribe-button {
        float: right;
    }
}
```

* THANK YOU !!!
