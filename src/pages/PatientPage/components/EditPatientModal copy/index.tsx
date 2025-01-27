import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modal } from '../../../../components/common/Modal';
import { BaseInput } from '../../../../components/common/BaseInput';
import { User } from '../../../../types/user';
import { useEditUser } from '../../../../hooks/useEditUser';

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
  const [formData, setFormData] = useState<User | Partial<User>>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const formik = useFormik({
    initialValues: {
      name: formData.name || '',
      description: formData.description || '',
      website: formData.website || '',
      avatar: formData.avatar || '',
      id: formData.id || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
      website: Yup.string().url('Invalid URL').nullable(),
      avatar: Yup.string().url('Invalid URL').nullable(),
    }),
    onSubmit: (values) => {
      editUser(values as User);
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
          value={formik.values.avatar || initialData.avatar || ''}
        />
        <div className="col-span-2">
          <BaseInput
            name="description"
            label="Description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Enter patient description"
            error={formik.touched.description && formik.errors.description}
            value={formik.values.description || initialData.description || ''}
          />
        </div>
        <BaseInput
          label="Website"
          name="website"
          onBlur={formik.handleBlur}
          placeholder="Enter website URL"
          onChange={formik.handleChange}
          error={formik.touched.website && formik.errors.website}
          value={formik.values.website || initialData.website || ''}
        />
        <button type="submit" />
      </form>
    </Modal>
  );
};
