echo "************* [DEVOLVA JÁ] *************"

echo "****** [CHANGELOG CONVENTION] ****** [CONFIGURING PROJECT] ******"
echo "\n"
npm install


echo "****** [API DEPEDENCES] ****** [CONFIGURING PROJECT] ******"
echo "\n"

cd ./api 
cp .env.example .env
adonis key:generate
npm install
cd ..


echo "****** [WEB-APP DEPEDENCES] ****** [CONFIGURING PROJECT] ******"
echo "\n"
cd ./web-app 
npm install
cd ..


echo "****** [DOCKER] ****** [CONFIGURING PROJECT] ******"
echo "\n"

cp docker-compose.example docker-compose.yml

docker-compose up
