FROM node:latest

WORKDIR /tmp

# Install git
RUN apt-get update && apt-get install git -y

# Dev user and workspace parameters
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ARG WORKSPACE=/project

# User uid and gid change
RUN groupmod -g $USER_GID $USERNAME \
    && usermod -u $USER_UID $USERNAME

# Workspace
RUN mkdir ${WORKSPACE} && chown -R ${USER_UID}:${USER_GID} ${WORKSPACE}
WORKDIR ${WORKSPACE}