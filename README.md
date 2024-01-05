# Archere

<br/>
<p align="center">
<img src="./images/logoArchere.png" width=250/>
</p>

## Installation

Before you start, it's imprediscindible install yay in your Arch Linux OS, because saround 60% packages are hosted at AUR. You can check this [guide](https://itsfoss.com/install-yay-arch-linux/) 

## Important

This installer might fail in some cases for desired packages. This CLI uses AUR and we deal with PGP signatures. For that reason before start the script must be desactivated the PGP check variable `SKIPPGPCHECK=1` at `/usr/bin/makepkg`. 

> If you are gonna do this, **please see the list of packages at `archPackages.json`** cause you may fall into security holes. Do it at your own risk.
