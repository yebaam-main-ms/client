// import React, { useState, useEffect } from 'react';
// import { translations, Translate } from '../language';



// export const isChecked = () => {
//     setIsAcceptTerms(!isAcceptTerms)
//     if (!isAcceptTerms) {
//         setError(prevError => ({
//             ...prevError,
//             ["checkTermsOfService"]: Translate('isAcceptTerms', 'es')
//         }));
//     }

//     else {
//         setError(prevError => ({
//             ...prevError,
//             ["checkTermsOfService"]: ''
//         }));
//     }
// }

// export const isFocused = (e) => {
//     const { name, placeholder, value } = e.target;
//     setError(prevError => ({
//         ...prevError,
//         [name]: ''
//     }));
// }

// export const isEmpty = (e) => {
//     const { name, placeholder, value } = e.target;
//     console.log(name)
//     if (value.length == 0) {
//         setError(prevError => ({
//             ...prevError,
//             [name]: Translate ('missingField', 'es') + placeholder
//         }));
//     }
//     if (value.length != 0) {
//         if (name == "password" || name == "confirmPassword") {
//             if (value.length < 8) {
//                 setError(prevError => ({
//                     ...prevError,
//                     [name]: Translate ('passwordToShort', 'es')  
//                 }));
//             }

//             if (value.length > 32) {
//                 setError(prevError => ({
//                     ...prevError,
//                     [name]:  Translate ('passwordToLong', 'es') 
//                 }));
//             }

//         }

//         else {
//             setError(prevError => ({
//                 ...prevError,
//                 [name]: ''
//             }));
//         }

//         if (name == "confirmPassword") {
//             console.log(password, confirmPassword)
//             if (password != confirmPassword) {
//                 setError(prevError => ({
//                     ...prevError,
//                     [name]: Translate ('passwordNoMatch', 'es') 
//                 }));
//             }
//         }

//         if (name == "email") {
//             if ((value.includes("@") && value.includes(".")) == false) {
//                 setError(prevError => ({
//                     ...prevError,
//                     [name]: Translate ('invalidEmail', 'es')
//                 }));
//             }

//         }
//     }

// }