// aca de va a guardar la informacion de los users
import "dotenv/config.js"
import '../../config/database.js'
import User from '../User.js'


const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "hashed_password_1",
      photo: "photo_url_1",
      role: 1
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "hashed_password_2",
      photo: "photo_url_2",
      role: 2
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      password: "hashed_password_3",
      photo: "photo_url_3",
      role: 1
    },
    {
      name: "Lisa Johnson",
      email: "lisa.johnson@example.com",
      password: "hashed_password_4",
      photo: "photo_url_4",
      role: 2
    },
    {
      name: "David White",
      email: "david.white@example.com",
      password: "hashed_password_5",
      photo: "photo_url_5",
      role: 3
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      password: "hashed_password_6",
      photo: "photo_url_6",
      role: 1
    },
    {
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      password: "hashed_password_7",
      photo: "photo_url_7",
      role: 2
    },
    {
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      password: "hashed_password_8",
      photo: "photo_url_8",
      role: 1
    },
    {
      name: "Lucas Anderson",
      email: "lucas.anderson@example.com",
      password: "hashed_password_9",
      photo: "photo_url_9",
      role: 3
    },
    {
      name: "Sophia Harris",
      email: "sophia.harris@example.com",
      password: "hashed_password_10",
      photo: "photo_url_10",
      role: 1
    },
    {
      name: "Daniel Clark",
      email: "daniel.clark@example.com",
      password: "hashed_password_11",
      photo: "photo_url_11",
      role: 2
    }
  ];

  User.insertMany(users)