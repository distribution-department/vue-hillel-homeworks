import * as yup from 'yup'

const validationSchema = yup.object().shape({
    title: yup.string().min(3).required('Title is necessary'),
    description: yup.string().min(3).required('Description is necessary'),
    status: yup.string().min(3).required('Status is necessary'),
});

export default validationSchema;