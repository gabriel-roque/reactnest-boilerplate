echo "************* [REACT-DONIS-STARTER] *************"

echo "****** [CHANGELOG CONVENTION] ****** [CONFIGURING PROJECT] ******"
npm install


echo "****** [API DEPENDENCIES] ****** [CONFIGURING PROJECT] ******"

cd ./api 
cp .env.example .env
npx adonis key:generate
npm install
cd ..


echo "****** [WEB-APP DEPENDENCIES] ****** [CONFIGURING PROJECT] ******"
cd ./web-app 
npm install
cd ..


echo "****** [DOCKER] ****** [CONFIGURING PROJECT] ******"

cp docker-compose.dev.example docker-compose.yml

docker-compose up -d && cd ./web-app && npm start
