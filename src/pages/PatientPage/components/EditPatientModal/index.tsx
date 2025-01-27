import { useFormik } from 'formik';
import { Modal } from '../../../../components/common/Modal';
import { BaseInput } from '../../../../components/common/BaseInput';
import { User } from '../../../../types/user';
import { useEditUser } from '../../../../hooks/useEditUser';
import { validationSchema } from './validations/validationSchema';

interface EditPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: User | Partial<User>;
}

export const EditPatientModal: React.FC<EditPatientModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const { mutate: editUser } = useEditUser('users');

  const formik = useFormik({
    initialValues: {
      id: initialData.id || '',
      name: initialData.name || '',
      avatar: initialData.avatar || '',
      website: initialData.website || '',
      description: initialData.description || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editUser(values as User);
      onClose();
    },
    enableReinitialize: true,
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
          value={formik.values.avatar}
        />
        <div className="col-span-2">
          <BaseInput
            name="description"
            label="Description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Enter patient description"
            error={formik.touched.description && formik.errors.description}
            value={formik.values.description}
          />
        </div>
        <BaseInput
          label="Website"
          name="website"
          onBlur={formik.handleBlur}
          placeholder="Enter website URL"
          onChange={formik.handleChange}
          error={formik.touched.website && formik.errors.website}
          value={formik.values.website}
        />
        <button type="submit" />
      </form>
    </Modal>
  );
};
