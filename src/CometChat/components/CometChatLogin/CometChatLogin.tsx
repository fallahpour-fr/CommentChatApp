/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from 'react';
// import '../../styles/CometChatLogin/CometChatLogin.css';
// import cometChatLogo from '../../assets/cometchat_logo.svg';
// import cometChatLogoDark from '../../assets/cometchat_logo_dark.svg';
// import { CometChatUIKit } from '@cometchat/chat-uikit-react';
// import { sampleUsers } from './sampledata';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// type User = {
//   name: string;
//   uid: string;
//   avatar: string;
// };

// type UserJson = {
//   users: User[];
// };

// const CometChatLogin = () => {
//   // const [defaultUsers, setDefaultUsers] = useState<User[]>([]);
//   // const [uid, setUid] = useState('');
//   // const [selectedUid, setSelectedUid] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const isDarkMode = document.querySelector('[data-theme="dark"]') ? true : false;

//   // async function login(uid: string) {
//   //   setSelectedUid(uid);
//   //   try {
//   //     CometChatUIKit.login(uid)?.then((loggedInUser) => {
//   //       console.log('Login successful, loggedInUser:', loggedInUser);
//   //     });
//   //   } catch (error) {
//   //     console.error('login failed', error);
//   //   }
//   // }

//   // async function handleLoginWithUidFormSubmit(e: React.FormEvent<HTMLFormElement>) {
//   //   e.preventDefault();
//   //   try {
//   //     await login(uid);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://localhost/dashboard/api/auth/login', {
//         email,
//         password
//       });

//       console.log('Server response:', response.data);
//       setMessage('Success! You are login.');

//       const accessToken = response.data.data.accessToken;
//       localStorage.setItem('accessToken', accessToken);

//       const user = await axios.get("https://localhost/dashboard/api/auth/me",
//         {
//           headers: {
//             accessToken: accessToken,
//           }
//         })

//       const userData = user.data.data.user;
//       localStorage.setItem('authState', JSON.stringify(userData)); // Save user info

//       // navigate('/chat');

//     } catch (error) {
//       console.error('Error:', error);
//       if (axios.isAxiosError(error)) {
//         console.error('Axios error response:', error.response);
//       }
//       navigate('/landing');
//       setMessage('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="cometchat-login__container">
//       <div className="cometchat-login__logo">
//         {isDarkMode ? <img src={cometChatLogoDark} alt="" /> : <img src={cometChatLogo} alt="" />}
//       </div>
//       <div className="cometchat-login__content">
//         <div className="cometchat-login__custom-login">
//           <form onSubmit={handleSubmit} className="cometchat-login__form">
//             <div className="cometchat-login__input-group">
//               <label className="input-label cometchat-login__input-label" htmlFor="email">
//                 Email:
//               </label>
//               <input
//                 className="cometchat-login__input"
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Enter your Email:"
//               />


//               <label className="input-label cometchat-login__input-label" htmlFor="email">
//                 Password:
//               </label>
//               <input
//                 className="cometchat-login__input"
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Enter your password"
//               />

//             </div>

//             <button className="cometchat-login__submit-button">Login</button>
//           </form>
//         </div>
//       </div >
//     </div >
//   );
// };

// export default CometChatLogin;
export {}; 
