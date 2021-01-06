echo "************* [REACTNEST] *************"

echo "****** [CHANGELOG CONVENTION] ****** [CONFIGURING PROJECT] ******"
npm install


echo "****** [API DEPENDENCIES] ****** [CONFIGURING PROJECT] ******"

cd ./api 
cp .env.example .env
npm install
cd ..


echo "****** [WEB-APP DEPENDENCIES] ****** [CONFIGURING PROJECT] ******"
cd ./web-app
cp .env.example .env
npm install
cd ..


echo "****** [DOCKER] ****** [CONFIGURING PROJECT] ******"

cp docker-compose.dev.example docker-compose.yml

docker-compose up -d && cd ./web-app && npm start
