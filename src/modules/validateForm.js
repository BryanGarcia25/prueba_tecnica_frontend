import * as yup from 'yup'

export const validate = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().length(10),
    references: yup.string()
})