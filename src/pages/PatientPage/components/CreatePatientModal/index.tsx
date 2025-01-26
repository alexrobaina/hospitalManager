import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modal } from '../../../../components/Modal';
import { BaseInput } from '../../../../components/BaseInput';
import { User } from '../../../../types/user';
import { useCreateUser } from '../../../../hooks/useCreateUser';

interface CreatePatientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePatientModal: React.FC<CreatePatientModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { mutate: createUser } = useCreateUser();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      website: '',
      avatar: '',
      id: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
      website: Yup.string().url('Invalid URL').nullable(),
      avatar: Yup.string().url('Invalid URL').nullable(),
    }),
    onSubmit: (values) => {
      createUser(values as User);
      onClose();
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Patient"
      submitText="Save Changes"
      onSubmit={formik.handleSubmit}
    >
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
        <BaseInput
          name="name"
          label="Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Enter patient name"
          error={formik.touched.name && formik.errors.name}
          value={formik.values.name}
        />
        <BaseInput
          name="avatar"
          label="Avatar URL"
          onBlur={formik.handleBlur}
          placeholder="Enter avatar URL"
          onChange={formik.handleChange}
          error={formik.touched.avatar && formik.errors.avatar}
          value={formik.values.avatar || ''}
        />
        <div className="col-span-2">
          <BaseInput
            name="description"
            label="Description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Enter patient description"
            error={formik.touched.description && formik.errors.description}
            value={formik.values.description || ''}
          />
        </div>
        <BaseInput
          label="Website"
          name="website"
          onBlur={formik.handleBlur}
          placeholder="Enter website URL"
          onChange={formik.handleChange}
          error={formik.touched.website && formik.errors.website}
          value={formik.values.website || ''}
        />
        <button type="submit" />
      </form>
    </Modal>
  );
};
