# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.134.1/containers/debian/.devcontainer/base.Dockerfile
FROM node:12

ARG GO_VERSION="1.15.2"


# Install dependencies / dev tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive
RUN apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    && apt-get -y install git iproute2 procps \
    && apt-get install -y curl apt-transport-https lsb-release
RUN curl -sS https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/pubkey.gpg | apt-key add - 2>/dev/null
RUN echo "deb https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install --no-install-recommends yarn



# Install GO
RUN wget -c "https://golang.org/dl/go${GO_VERSION}.linux-amd64.tar.gz" -O - | tar -xz -C /usr/local
ENV PATH=${PATH}:/usr/local/go/bin
ENV GOBIN="$GOPATH/bin"
ENV GOPATH=/workspaces/youtrack-kanban/api


# Install global Node modules
RUN yarn global add tslint typescript firebase-tools


# Install gcloud
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN apt-get update
RUN apt-get -y install --no-install-recommends google-cloud-sdk


# # Install Chrome and Firefox w/ Headless drivers
# RUN echo "deb [arch=amd64]  http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
# RUN apt-get update
# RUN apt-get -y install --no-install-recommends google-chrome-stable default-jdk firefox-esr
# RUN wget https://chromedriver.storage.googleapis.com/2.41/chromedriver_linux64.zip \
#     && unzip chromedriver_linux64 -d /usr/bin \
#     && chmod +x /usr/bin/chromedriver

# RUN wget https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz \
#     && tar -xzf geckodriver* \
#     && mv geckodriver /usr/bin \
#     && chmod +x /usr/bin/geckodriver




ENV DEBIAN_FRONTEND=