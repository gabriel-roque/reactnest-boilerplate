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
cp .env.production.example .env 
npm install
npm run build
cd ..


echo "****** [DOCKER] ****** [CONFIGURING PROJECT] ******"

cp docker-compose.prod.example docker-compose.yml

docker-compose up -d

docker exec -t app-database bash -i -c 'psql -U reactnest_user -d reactnest -c "CREATE SCHEMA IF NOT EXISTS reactnest;"'