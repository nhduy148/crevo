import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ContactSection = () => {
  const t = useTranslations();
  return (
    <section className='contact-sa section-padding pt-0'>
      <div className='container'>
        <div className='box'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='info'>
                <div className='sec-head'>
                  <h4>
                    {t('Contact.title')}{' '}
                    <span className='sub-color inline'>
                      {t('Contact.subTitle')}
                    </span>
                  </h4>
                </div>
                <div className='mt-50 md-mb80'>
                  <h6>+84 909 552 099</h6>
                  <span className='d-block sub-color fz-14 mt-10'>
                    Call us for urgent
                  </span>
                  <a
                    href='./contact.html'
                    className='butn butn-md butn-bord butn-rounded mt-50'
                  >
                    <div className='d-flex align-items-center'>
                      <span>Get Direction</span>
                      <span className='icon invert ml-10'>
                        <Image
                          src='/assets/common/imgs/icons/arrow-top-right.svg'
                          alt=''
                          width={44}
                          height={44}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-7 offset-lg-1'>
              <div className='contact-form'>
                <form id='contact-form' method='post' action='contact.php'>
                  <div className='messages'></div>

                  <div className='controls row'>
                    <div className='col-lg-6'>
                      <div className='form-group mb-30'>
                        <label htmlFor='form_name'>
                          {t('Contact.fullName')}
                          <span className='star'>*</span>
                        </label>
                        <input
                          id='form_name'
                          type='text'
                          name='name'
                          placeholder={t('Contact.phFullName')}
                          required
                        />
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div className='form-group mb-30'>
                        <label htmlFor='form_email'>
                          {t('Contact.email')}
                          <span className='star'>*</span>
                        </label>
                        <input
                          id='form_email'
                          type='email'
                          name='email'
                          placeholder={t('Contact.phEmail')}
                          required
                        />
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div className='form-group mb-30'>
                        <label htmlFor='form_subject'>
                          {t('Contact.subject')}
                          <span className='star'>*</span>
                        </label>
                        <input
                          id='form_subject'
                          type='text'
                          name='subject'
                          placeholder={t('Contact.phSubject')}
                          required
                        />
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div className='form-group mb-30'>
                        <label htmlFor='form_budget'>
                          {t('Contact.phone')}{' '}
                          <span className='opt sub-color'>
                            ({t('Contact.optional')})
                          </span>
                        </label>
                        <input
                          id='form_budget'
                          type='text'
                          name='budget'
                          placeholder={t('Contact.phPhone')}
                          required
                        />
                      </div>
                    </div>

                    <div className='col-12'>
                      <div className='form-group'>
                        <label htmlFor='form_message'>
                          {t('Contact.message')}
                        </label>
                        <textarea
                          id='form_message'
                          name='message'
                          placeholder={t('Contact.phMessage')}
                          rows={4}
                          required
                        ></textarea>
                      </div>
                      <div className='mt-60'>
                        <button
                          type='submit'
                          className='butn butn-md butn-bord butn-rounded'
                        >
                          <span className='text'>Send Your Message</span>
                          <span className='icon invert ml-10'>
                            <Image
                              src='/assets/common/imgs/icons/arrow-top-right.svg'
                              alt=''
                              width={44}
                              height={44}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
