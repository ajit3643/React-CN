# Introduction of project
This is the 3rd React Skill test project assigned by Coding Ninjas.
Project Name: Chat App 2

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Hosted On`
open [https://abhithakur7080-chat-app-2.netlify.app/](https://abhithakur7080-chat-app-2.netlify.app/) to view it in your browser.

## Tasks
### Functionality

#### Assume you are a dummy logged in user.

#### Use a json file to load some dummy data in the project.

#### `Search`
###### conversations should be searchable by contact name.

#### Left sidebar:
###### Show all the conversations created here
###### Each conversation should have the contact name and some text of the last message in the chat
#### Create conversation button
###### On clicking this open a pop up and load all the contacts (from the dummy data.json/js file).
###### On clicking the contact should start a new conversation (if no conversation was previously started). Or open the existing conversation for that contact.
#### Right side view
###### Show the current selected conversation messages
###### Send a message in the conversation
#### Handle errors and success alerts and show appropriate Alert/Notification.
#### You have to use react-router.
#### You have to use react hooks ONLY.
#### Bonus feature: Make the redux data persistent such that after refresh, the messages and conversations are intact.


## Features

All the featuere works on temporary which is SEARCH, SEND MESSAGE, NEW CONSEVATION and MESSAGE UPDATE.


#### `SEARCH`
On search on the contact list available in json sort and view updated list

#### `NEW CONSERVATION`
On clicking `+` icon see all the consevation on floating window and view all contacts.

#### `SEND MESSAGE`
On entering text on input box and sent to dummy message temporary

#### `MESSAGE UPDATE`
After sending gives updated chats on message box.

#### `NO CONSEVATION`
If no any contact will started show `No consevation started yet.` also.

#### `NO CONSEVATION`
If not any message sent to user also show `No message` also.

