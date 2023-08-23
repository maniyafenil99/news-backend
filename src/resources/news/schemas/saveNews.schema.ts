import * as yup from "yup";

export default yup.object({
  body: yup.object({
    type: yup.string().required(),
  }),
});
