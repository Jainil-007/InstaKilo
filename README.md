# InstaKilo

InstaKilo is a fully-functional Instagram clone app built using React and Firebase. This app provides basic features like user signup, login, add caption and the ability to post photos.

<img src="https://user-images.githubusercontent.com/35983749/119927210-1f581800-bfcd-11eb-83c7-76d8cd1001d6.png" width="850" height="550">  

## Features

- User authentication (signup and login)
- Post photo with caption
- View photos in feed
- Mobile responsive design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v16.20.0 or higher)
- A [Firebase](https://firebase.google.com/) project with Firestore and Storage enabled

### Installation

1. Clone the repository
`git clone https://github.com/your-username/instakilo.git`

2. Navigate to the project directory
`cd instakilo`

3. Install the required dependencies
`npm install`

4. Create a `.env` file in the root of the project and add the following Firebase configurations:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
5. Start the development server
`npm start`

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Sign up for an account or log in with an existing account.
2. To post a photo, click on the "Add Post" button, upload an image, and enter a caption.
3. View your feed to see photos from all users.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
