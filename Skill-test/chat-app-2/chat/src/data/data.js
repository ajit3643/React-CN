import user from "../reducers/user"

export const data = {
    profile: {
        id: 1,
        name: "Abhijeet Kumar",
        image: user.image,

        contacts: [
            {
              id: 2,
              name: "Abhishek",
              image:
                "https://st.depositphotos.com/12982378/52204/i/600/depositphotos_522040706-stock-photo-portrait-bearded-asian-man-stylish.jpg",
              chatlog: [
                {
                  text: "Hi Bro,How are you!",
                  timestamp: "11:21 AM",
                  sender: "user",
                  message_id: 1,
                },
                {
                  text: "I am fine Abhijeet. How are you!",
                  timestamp: "11:22 AM",
                  sender: "me",
                  message_id: 2,
                },
                {
                  text: "I am great, Abhijeet.",
                  timestamp: "10:03 AM",
                  sender: "user",
                  message_id: 3,
                },
                {
                  text: "lets meet",
                  timestamp: "10:04 AM",
                  sender: "user",
                  message_id: 4,
                },
                {
                  text: "Oky Bro !",
                  timestamp: "10:05 AM",
                  sender: "me",
                  message_id: 5,
                },
              ],
            },
            {
              id: 3,
              name: " Antoine",
              image:"https://st.depositphotos.com/12982378/56356/i/600/depositphotos_563563796-stock-photo-young-brunette-man-looking-away.jpg",
                // "https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
              chatlog: [
                {
                  text: "Hi !",
                  timestamp: "10:01 AM",
                  sender: "user",
                  message_id: 1,
                },
                {
                  text: "I am fine Antoine , How are you!",
                  timestamp: "10:02 AM",
                  sender: "me",
                  message_id: 2,
                },
                {
                  text: "I am great,Dear.",
                  timestamp: "10:03 AM",
                  sender: "user",
                  message_id: 3,
                },
                {
                  text: "Or maybe not, let me check something and call you. Give me sometime",
                  timestamp: "10:04 AM",
                  sender: "user",
                  message_id: 4,
                },
                {
                  text: "Where r u ??",
                  timestamp: "10:05 AM",
                  sender: "me",
                  message_id: 5,
                },
              ],
            },
            {
              id: 4,
              name: "Sophie",
              image:
                "https://st3.depositphotos.com/12674628/16943/i/600/depositphotos_169431528-stock-photo-beautiful-student-with-books.jpg",
              chatlog: [
                {
                  text: "Hi, Abhijeet!",
                  timestamp: "10:01 AM",
                  sender: "user",
                  message_id: 1,
                },
                {
                  text: "I am fine Sophie. How are you!",
                  timestamp: "10:02 AM",
                  sender: "me",
                  message_id: 2,
                },
                {
                  text: "I am great ,  Abhijeet.",
                  timestamp: "10:03 AM",
                  sender: "user",
                  message_id: 3,
                },
                {
                  text: "r u busy??",
                  timestamp: "10:04 AM",
                  sender: "user",
                  message_id: 4,
                },
                {
                  text: " no!",
                  timestamp: "10:05 AM",
                  sender: "me",
                  message_id: 5,
                },
              ],
            },
            {
              id: 5,
              name: "Alexander",
              image:
                "https://st3.depositphotos.com/1743476/16188/i/600/depositphotos_161885550-stock-photo-proud-latin-man.jpg",
              chatlog: [],
            },
            {
              id: 6,
              name: "Benjamin",
              image:
                "https://st3.depositphotos.com/11233746/13899/i/600/depositphotos_138998024-stock-photo-handsome-young-man.jpg",
              chatlog: [
                {
                  text: "Hey Benjamin, where is ur Big bro?",
                  timestamp: "10:01 AM",
                  sender: "user",
                  message_id: 1,
                },
                {
                  text: "I don't know anything about that, bro",
                  timestamp: "10:02 AM",
                  sender: "me",
                  message_id: 2,
                },
                {
                  text: "Are you sure,  Abhijeet ?",
                  timestamp: "10:03 AM",
                  sender: "user",
                  message_id: 3,
                },
                {
                  text: "Yes,  I am sure",
                  timestamp: "10:04 AM",
                  sender: "me",
                  message_id: 4,
                },
                {
                  text: "All right Benjamin...",
                  timestamp: "10:05 AM",
                  sender: "me",
                  message_id: 5,
                },
              ],
            },
            {
              id: 7,
              name: "Johannes",
              image:
                "https://st3.depositphotos.com/33359910/37659/i/600/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpghttps://st3.depositphotos.com/33359910/37659/i/600/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpg",
              chatlog: [
                {
                  text: "Where are you bro ? ",
                  timestamp: "10:06 AM",
                  sender: "me",
                  message_id: 1,
                },
                {
                  text: "I'm in Market",
                  timestamp: "10:06 AM",
                  sender: "user",
                  message_id: 2,
                },
                {
                  text: "call me ....",
                  timestamp: "10:07 AM",
                  sender: "me",
                  message_id: 3,
                },
                {
                  text: "ok",
                  timestamp: "10:08 AM",
                  sender: "user",
                  message_id: 4,
                },
                {
                  text: "R u okay??",
                  timestamp: "10:09 AM",
                  sender: "me",
                  message_id: 5,
                },
                {
                  text: "Hmmmmm!",
                  timestamp: "10:09 AM",
                  sender: "user",
                  message_id: 6,
                },
              ],
            },
            {
              id: 8,
              name: "Emma",
              image:"https://st4.depositphotos.com/20363444/28853/i/600/depositphotos_288537332-stock-photo-focused-young-girl-casual-clothes.jpg",
                // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
              chatlog: [],
            },
            {
              id: 9,
              name: "David",
              image:
                "https://st2.depositphotos.com/1273995/8790/i/600/depositphotos_87904862-stock-photo-portrait-of-bearded-man.jpg",
              chatlog: [],
            },
        ],
    }
}