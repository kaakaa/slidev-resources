FROM mcr.microsoft.com/vscode/devcontainers/universal:2-linux

# ** [Optional] Uncomment this section to install additional packages. **
USER root
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends fonts-noto-cjk

USER codespace