import * as Yup from 'yup';

const phoneNumPattern =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;

export const authValidation = Yup.object().shape({
  email: Yup.string().required('Введите почту').email('Некоректная почта'),
  password: Yup.string()
    .required('Необходимо указать пароль')
    .min(6, 'Пароль не может быть меньше 6 символов'),
});

export const regValidation = Yup.object().shape({
  email: Yup.string().required('Введите почту').email('Некоректная почта'),
  password: Yup.string()
    .required('Необходимо указать пароль')
    .min(6, 'Пароль не может быть меньше 6 символов'),
  first_name: Yup.string().required('Введите имя'),
  role: Yup.string(),
  organization: Yup.string().when('role', {
    is: (role) => role === 'non-profit' || role === 'commercial',
    then: Yup.string().required('Введите наименование организации'),
    otherwise: Yup.string(),
  }),
  phone: Yup.string().test(
    'empty-check',
    'Некорректный номер телефона',
    (number) => !number || phoneNumPattern.test(number)
  ),
});

export const createTaskValidation = Yup.object().shape({
  title: Yup.string().required('Введите название'),
  description: Yup.string().required('Введите описание'),
  deadline: Yup.string().required('Укажите дату окончания'),
  CategoryId: Yup.string().required('Выберите категорию'),
  startDate: Yup.string().required('Укажите дату начала'),
});
