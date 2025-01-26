import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modal } from '../../../../components/Modal';
import { BaseInput } from '../../../../components/BaseInput';
import { User } from '../../../../types/user';
import { useEditUser } from '../../../../hooks/useEditUser';
import { toast } from 'react-toastify';

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
      id: formData.id || '',
      name: formData.name || '',
      avatar: formData.avatar || '',
      website: formData.website || '',
      description: formData.description || '',
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

  useEffect(() => {
    formik.setValues(initialData as User);
  }, [initialData]);

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
