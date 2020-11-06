Now UI Kit React is a free Bootstrap 4, React, React Hooks and Reactstrap UI Kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates.

Now UI Kit is one of the most popular UI Kits online, provided in PSD and Sketch formats by Invision. We wanted to find a way for developers worldwide to benefit from using it. So, in collaboration with Invision, we are launching the React version for it!

Create awesome, lifelike prototypes with InVision and Now so your users can experience and give feedback on your vision!

To get the PSD and Sketch files, please visit [Invision](https://www.invisionapp.com/inside-design/design-resources/now/?ref=creativetim). We used 100 Icons from our friends from Nucleo Icons, check their [12.000 icons here](https://nucleoapp.com/?ref=1712).

### React Hooks support

Now UI Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports React Hooks.


### Bootstrap 4 support

Now UI Kit React is built on top of Bootstrap 4 using React, React Hooks, create-react-app and Reactstrap. This makes starting a new project very simple. It also provides benefits if you are already working on a Bootstrap 4, React or Reactstrap project; you can just import the Now UI Kit React style over it. Most of the elements have been redesigned; but if you are using an element we have not touched, it will fall back to the Bootstrap default.


### Examples

Now UI Kit React contains some pages already designed and implemented. Here is the list with the pages available. We are also working on more example pages, that you will be able to access no matter the version you download.


* [Landing Page](https://demos.creative-tim.com/now-ui-kit-react/#/landing-page?ref=nukr-github-readme)
* [Register](https://demos.creative-tim.com/now-ui-kit-react/#/register-page?ref=nukr-github-readme)
* [Profile Page](https://demos.creative-tim.com/now-ui-kit-react/#/profile-page?ref=nukr-github-readme)

Tutorial and components

Once you download the archive, you will be able find a tutorial page inside it explaining how to start using it. You can also check the [documentation online](https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-github-readme).


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

| HTML | Angular | React | Vue |
| --- | --- | --- | --- |
| [![Now UI Kit HTML](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit/opt_nuk_thumbnail.jpg)](https://www.creative-tim.com/product/now-ui-kit?ref=nukr-github-readme)  | [![Now UI Kit Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit-angular/opt_nuk_angular_thumbnail.jpg)](https://www.creative-tim.com/product/now-ui-kit-angular?ref=nukr-github-readme)  | [![Now UI Kit React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit-react/opt_nuk_react_thumbnail.jpg)](https://www.creative-tim.com/product/now-ui-kit-react?ref=nukr-github-readme)  | [![Vue Now UI Kit](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-kit/vue-now-ui-kit.jpg)](https://www.creative-tim.com/product/now-ui-kit-react?ref=nukr-github-readme)  

| Login Page | Landing Page | Profile Page  |
| --- | --- | ---  |
| [![Login Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit-react/login.png)](https://demos.creative-tim.com/now-ui-kit-react/#/login-page?ref=nukr-github-readme)  | [![Landing Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit-react/landing.png)](https://demos.creative-tim.com/now-ui-kit-react/#/landing-page?ref=nukr-github-readme)  | [![Profile Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit-react/profile.png)](https://demos.creative-tim.com/now-ui-kit-react/#/profile-page?ref=nukr-github-readme)  

[View More](https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-github-readme)

## Quick start

1.  Download the project's zip
2.  Make sure you have node.js (<https://nodejs.org/en/?ref=creativetim>) installed
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located
4.  You will find all the branding colors inside `src/assets/scss/now-ui-kit/_variables.scss`. You can change them with a `HEX` value or with other predefined variables.
5.  Run in terminal `npm start`.

## Documentation
The documentation for the Now UI Kit React is hosted at our [website](https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-github-readme).


## File Structure

Within the download you'll find the following directories and files:
```
now-ui-kit-react
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   │   ├── flags
    │   │   └── nucleo-logo.svg
    │   └── scss
    │       ├── now-ui-kit
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── now-ui-kit
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── now-ui-kit.scss
    ├── components
    │   ├── Footers
    │   │   ├── DarkFooter.js
    │   │   ├── DefaultFooter.js
    │   │   └── TransparentFooter.js
    │   ├── Headers
    │   │   ├── IndexHeader.js
    │   │   ├── LandingPageHeader.js
    │   │   └── ProfilePageHeader.js
    │   └── Navbars
    │       ├── ExamplesNavbar.js
    │       └── IndexNavbar.js
    ├── index.js
    └── views
        ├── Index.js
        ├── NucleoIcons.js
        ├── examples
        │   ├── LandingPage.js
        │   ├── LoginPage.js
        │   └── ProfilePage.js
        └── index-sections
            ├── BasicElements.js
            ├── Carousel.js
            ├── CompleteExamples.js
            ├── Download.js
            ├── Examples.js
            ├── Images.js
            ├── Javascript.js
            ├── Navbars.js
            ├── Notifications.js
            ├── NucleoIcons.js
            ├── Pagination.js
            ├── SignUp.js
            ├── Tabs.js
            └── Typography.js
```
