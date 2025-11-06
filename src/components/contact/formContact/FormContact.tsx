import Image from 'next/image'
import styles from './formContact.module.css'
import { useEffect, useState } from 'react';
import json from "@/utils/languagesForm.json";
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function FormContact() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const regex = /^[+]?[\d\s()-]{7,}$/;
    return regex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const errorMessages = {
      es: {
        nameRequired: 'El nombre es obligatorio',
        lastnameRequired: 'El apellido es obligatorio',
        emailRequired: 'El correo es obligatorio',
        emailInvalid: 'El correo no es válido',
        phoneRequired: 'El teléfono es obligatorio',
        phoneInvalid: 'El teléfono no es válido',
        messageRequired: 'El mensaje es obligatorio',
        messageShort: 'El mensaje debe tener al menos 10 caracteres'
      },
      en: {
        nameRequired: 'Name is required',
        lastnameRequired: 'Last name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Email is not valid',
        phoneRequired: 'Phone is required',
        phoneInvalid: 'Phone is not valid',
        messageRequired: 'Message is required',
        messageShort: 'Message must be at least 10 characters'
      }
    };

    const msg = errorMessages[language];

    if (!formData.name.trim()) {
      newErrors.name = msg.nameRequired;
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = msg.lastnameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = msg.emailRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = msg.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = msg.phoneRequired;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = msg.phoneInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = msg.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = msg.messageShort;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(
        language === 'es' 
          ? 'Por favor corrige los errores en el formulario' 
          : 'Please correct the errors in the form'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulación exitosa
      toast.success(
        language === 'es'
          ? '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.'
          : 'Message sent successfully! We will contact you soon.'
      );

      // Limpiar formulario
      setFormData({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      toast.error(
        language === 'es'
          ? 'Hubo un error al enviar el mensaje. Intenta nuevamente.'
          : 'There was an error sending the message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.container} formContact-container`}>
      {/* Columna izquierda */}
      <div className={`${styles.info} formContact-info`}>
        <div>
          <h2>{language === 'es' ? json.es.title : json.en.title}</h2>
          <div className={styles.contactItem}>
            <Image src="/resources/contact/phone.svg" alt="Teléfono" width={25} height={25} />
            <p>+57 310 8108728</p>
          </div>
          <div className={styles.contactItem}>
            <Image src="/resources/contact/email.svg" alt="Correo" width={20} height={20} />
            <p>info@liceomanantial.com</p>
          </div>
          <div className={styles.contactItem}>
            <Image src="/resources/contact/location.svg" alt="Ubicación" width={20} height={20} />
            <p>Calle 37 sur # 52–35</p>
          </div>
        </div>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/yosoyliceomanantial/?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <Image src="/resources/contact/fb.svg" alt="Facebook" width={26} height={26} />
          </a>
          <a href="https://www.instagram.com/liceomanantial/?hl=es-la" target='_blank' rel="noopener noreferrer">
            <Image src="/resources/contact/ig.svg" alt="Instagram" width={26} height={26} />
          </a>
        </div>
      </div>

      {/* Columna derecha */}
      <div className={`${styles.formContainer} formContact-formContainer`}>
        <form className={`${styles.form} formContact-form`} onSubmit={handleSubmit}>
          <div className={`${styles.field} formContact-field`}>
            <label>{language === 'es' ? json.es.labels.name : json.en.labels.name}</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={language === 'es' ? json.es.placeholders.name : json.en.placeholders.name}
              className={errors.name ? styles.error : ''}
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>
          <div className={styles.field}>
            <label>{language === 'es' ? json.es.labels.lastname : json.en.labels.lastname}</label>
            <input 
              type="text" 
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder={language === 'es' ? json.es.placeholders.lastname : json.en.placeholders.lastname}
              className={errors.lastname ? styles.error : ''}
            />
            {errors.lastname && <span className={styles.errorMessage}>{errors.lastname}</span>}
          </div>
          <div className={styles.field}>
            <label>{language === 'es' ? json.es.labels.email : json.en.labels.email}</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={language === 'es' ? json.es.placeholders.email : json.en.placeholders.email}
              className={errors.email ? styles.error : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>
          <div className={styles.field}>
            <label>{language === 'es' ? json.es.labels.phone : json.en.labels.phone}</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={language === 'es' ? json.es.placeholders.phone : json.en.placeholders.phone}
              className={errors.phone ? styles.error : ''}
            />
            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
          </div>
          <div className={styles.field} style={{ gridColumn: 'span 2' }}>
            <label>{language === 'es' ? json.es.labels.message : json.en.labels.message}</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={language === 'es' ? json.es.placeholders.message : json.en.placeholders.message}
              className={errors.message ? styles.error : ''}
            ></textarea>
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>
          <div className={`${styles.buttonWrapper} formContact-buttonWrapper`}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting 
                ? (language === 'es' ? 'Enviando...' : 'Sending...') 
                : (language === 'es' ? json.es.button : json.en.button)
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}