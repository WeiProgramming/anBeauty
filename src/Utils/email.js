import * as emailjs from 'emailjs-com'

const emailConfig = {
  serviceID: 'gmail',
  templateID: 'Panwei Welcome Template',
  templateParams: '',
  userID: 'user_Pjh3vpOJxtNUhOFycIycr',
}

export const sendEmail = (to) => {
  emailjs.send(
    emailConfig.serviceID,
    emailConfig.templateID,
    {
      to_name: to,
    },
    emailConfig.userID,
  )
}
