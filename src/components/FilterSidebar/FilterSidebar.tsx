import { Formik } from 'formik';

export function FilterSidebar() {
  const validate = () => {
    return {};
  };

  return (
    <Formik
      enableReinitialize
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      validate={validate}
      initialValues={{ priceMin: '', priceMax: '' }}
      onSubmit={function () {
        throw new Error('Function not implemented.');
      }}
    ></Formik>
  );
}
