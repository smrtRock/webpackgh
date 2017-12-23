# UpStarMusic
Starter Repo for a Webpack course on Udemy

You can download this repository by using the green `Clone or Download` button on the right hand side of this page.  This will present you with the option to either clone the repository using Git, or to download it as a zip file.

If you want to download it using git, copy paste the link that is presented to you, then run the following at your terminal:

```
git clone https://github.com/StephenGrider/WebpackProject.git
cd WebpackProject
npm install
```

Deploy app with Surge

```npm and surge deployment
npm run build
surge -p dist
```

Deploy app to Github pages

1. Go to your Github account and create a repository

```git
git remote add origin https://github.com/smrtRock/webpackgh.git   
git checkout -b gh-pages
git subtree push --prefix dist origin gh-pages
```