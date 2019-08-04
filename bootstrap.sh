#!/usr/bin/env bash

repo_dir="$( cd "$(dirname "${BASH_SOURCE[0]}")" && pwd )"

attach() {
    theme_path="$( find ~/.vscode/extensions -maxdepth 1 -type d -name '*dracula-at-night*' )"
    if [[ "$theme_path" ]]; then
        theme_dir="$( basename "$theme_path" )"
        mkdir -p ~/.vscode/_disabled
        mv "$theme_path" ~/.vscode/_disabled/"$theme_dir"
    fi
    ln -s "$repo_dir" "$theme_path"
}

eject() {
    theme_disabled_path="$( find ~/.vscode/_disabled -maxdepth 1 -type d -name '*dracula-at-night*' )"
    if [ "$theme_disabled_path" ]; then
        theme_dir="$( basename "$theme_disabled_path" )"
        rm ~/.vscode/extensions/"$theme_dir"
        mv "$theme_disabled_path" ~/.vscode/extensions/"$theme_dir"
        rm -r ~/.vscode/_disabled
    fi
}

case "$1" in
    attach)
        attach
        ;;
    eject)
        eject
        ;;
esac
