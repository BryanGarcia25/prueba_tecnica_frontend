import * as yup from 'yup'

// Validando los formularios de que tengan todos sus campos llenos con la ayuda de yup de la libreria vee-validate
export const validate = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().length(10),
    references: yup.string()
})