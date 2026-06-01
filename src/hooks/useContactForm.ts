import { useCallback, useState, type FormEvent } from 'react';
import { isFirebaseEnabled } from '../config/firebase';

export type ContactFormFields = {
  name: string;
  phone: string;
  message: string;
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialFields: ContactFormFields = {
  name: '',
  phone: '',
  message: '',
};

async function logInquiryToFirebase(payload: {
  name: string;
  phone: string;
  message: string;
}) {
  const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
  const { getFirebaseDb } = await import('../config/firebase');
  const db = getFirebaseDb();
  if (!db) {
    throw new Error('Firebase unavailable');
  }
  await addDoc(collection(db, 'inquiries'), {
    ...payload,
    createdAt: serverTimestamp(),
    source: 'website',
  });
}

export function useContactForm() {
  const [fields, setFields] = useState<ContactFormFields>(initialFields);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateField = useCallback(
    (key: keyof ContactFormFields, value: string) => {
      setFields((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const resetForm = useCallback(() => {
    setFields(initialFields);
    setStatus('idle');
    setErrorMessage(null);
  }, []);

  const submit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const payload = {
      name: fields.name.trim(),
      phone: fields.phone.trim(),
      message: fields.message.trim(),
    };

    if (!payload.name || !payload.phone || !payload.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (!isFirebaseEnabled()) {
      setStatus('success');
      setFields(initialFields);
      return;
    }

    try {
      await logInquiryToFirebase(payload);
      setStatus('success');
      setFields(initialFields);
    } catch {
      setStatus('error');
      setErrorMessage('Could not save your inquiry. Please contact us on WhatsApp or phone.');
    }
  }, [fields]);

  return {
    fields,
    status,
    errorMessage,
    firebaseEnabled: isFirebaseEnabled(),
    updateField,
    resetForm,
    submit,
  };
}
