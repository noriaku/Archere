# AUTHOR: @noriaku
# |===| tokens & data
[[ -f ~/.zshrc_tokens ]] && source ~/.zshrc_tokens
export ZSH="$HOME/.oh-my-zsh"


# |===| starship
eval "$(starship init zsh)";


# |===| software
# colorls
source $(dirname $(gem which colorls))/tab_complete.sh;
plugins=(
    git
    zsh-256color

)
source $ZSH/oh-my-zsh.sh


# |===| initial conf
autoload -U colors && colors;
HISTSIZE=10000;
SAVEHIST=10000;
HISTFILE=~/.cache/zsh/history;
# postexec() {
#     print -P "\n%F{240}${(l:COLUMNS::─:)}%f"
# }
setopt promptsubst
PS1=$'%F{0}${(r:$COLUMNS::\u2500:)}%f'$PS1


# |===| export conf
export BAT_CONFIG_PATH="$HOME/.config/bat/bat.conf";
export STARSHIP_CONFIG=~/.config/starship/starship.toml
export GEM_HOME="$(ruby -e 'puts Gem.user_dir')";
export PATH="$PATH:$GEM_HOME/bin";
export PATH=$PATH:$HOME/.cargo/bin
export PATH="$HOME/.local/bin/:$PATH"
export PATH=~/.npm-global/bin:$PATH


# |===| aliases
alias cfz="nvim ~/.dotfiles/zsh/zshrc.zsh";
alias btw="neofetch";
alias n="nvim";
alias tree="alder --sizes";
alias ls='exa --icons -F -H --group-directories-first --git -1';
alias sys="systemctl suspend";
alias hyexit="hyperctl dispatch exit";
alias gom="git push -u origin main";
alias gis="git status";
alias bat='bat --theme="Catppuccin-mocha"';
alias gits="git status";
alias gita="git add";
alias gitc="git commit -m";
alias gitd="git diff";
alias bhub="cd ~/rootbox/repo-hub/"
alias note="mdbook serve --open"
alias lv="$HOME/.local/bin/lvim"


# |===| keybinding
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word


# |===| codes zsh
export GREP_COLOR='1;33'