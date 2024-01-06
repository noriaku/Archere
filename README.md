# Archere

<br />
<p align="center">
  <img src="./images/logoArchereDark.png#gh-dark-mode-only" width="250" alt="logo">
  <img src="./images/logoArchereLight.png#gh-light-mode-only" width="250" alt="logo">
</p>

## Installation

Before we begin, it's essential install it on you Arch Linux OS, because around 60% of the packages are hosted on AUR. You can consult this [guide](https://itsfoss.com/install-yay-arch-linux/) 

## Important

This installer might fail in some cases for desired packages. This CLI uses AUR and we deal with PGP signatures. For that reason before start the script must be desactivated the PGP check variable `SKIPPGPCHECK=1` at `/usr/bin/makepkg`. 

> If you are gonna do this, **please see the list of packages at `archPackages.json`** cause you may fall into security holes. Do it at your own risk.