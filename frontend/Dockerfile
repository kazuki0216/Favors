FROM node:18:alpine

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .

RUN npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios/assets
RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

EXPOSE 3000

# Start the app
CMD ["npx", "react-native", "start"]