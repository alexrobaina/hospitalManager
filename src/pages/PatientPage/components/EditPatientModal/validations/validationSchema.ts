import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  website: Yup.string().url('Invalid URL').nullable(),
  avatar: Yup.string().url('Invalid URL').nullable(),
});
