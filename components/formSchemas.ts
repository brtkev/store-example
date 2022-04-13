import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string()
    .email('ingrese un email valido')
    .required('ingresa un email'),
  password: yup.string().required("ingresa una contraseña")
    // .string().min(4, 'Password must contain at least 4 characters')
    // .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, "password needs at last 1 number [0-9] and 1 letter [a-Z]"),
});

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numberRegex = /(?=.*\d)/;

export const registerSchema = yup.object().shape({
  name: yup.string().required('ingresa tu nombre completo'),
  email: yup.string()
    .lowercase()
    .email('ingrese un email valido')
    .required('ingresa un email'),
  password: yup.string()
    .min(8, 'la contraseña debe de tener al menos 8 caracteres')
    .matches(lowerCaseRegex, 'la contraseña necesita al menos una minuscula')
    .matches(upperCaseRegex, 'la contraseña necesita al menos una mayuscula')
    .matches(numberRegex, 'la contraseña necesita al menos un numero')
    .required("ingresa una contraseña"),
  passwordConfirm : yup.string()
    .oneOf([yup.ref('password')], 'la contraseña no coincide')
    .required('campo obligatorio'),
  subscription : yup.bool()
})

const checkoutSchema = yup.object().shape({
  fullName : yup.string()
    .required("ingresa tu nombre"),
  address1: yup.string()
    .required("ingresa tu direccion"),
  address2: yup.string(),
  zipCode : yup.number().max(9999).min(1000).required("ingresa el codigo postal"),
  city: yup.string().required("ingresa una ciudad"),
  state: yup.string().required("ingresa un estado/provincia"),
  country: yup.string(),
  phoneNumber : yup.number().required("ingresa tu numero de telefono"),
  termsAndCondition : yup.bool()
})

export const checkoutResolver = () => yupResolver(checkoutSchema);