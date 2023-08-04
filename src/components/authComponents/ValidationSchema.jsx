import { object, string } from "yup";

export const LoginSchema = object({

  email: string().required("email zorunludur"),
  password: string().required("password zorunludur"),

});

export const RegisterSchema = object({
  name: string().required("full name zorunludur"),
  email: string().required("email zorunludur"),
  password1: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});

export const PasswordSchema = object({
  password_new1: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  password_new2: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});
