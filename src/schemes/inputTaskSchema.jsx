import * as Yup from 'yup';

const inputTaskSchema = Yup.object().shape({ task: Yup.string().required('Required field').min(5, 'Enter at least 5 characters') });

export default inputTaskSchema;