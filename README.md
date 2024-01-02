# NgRoundSlider

docker build . -t slider-storybook-image  -f libs/ng-round-slider/Dockerfile.storybook
docker run -d -p 4400:80 slider-storybook-image:latest