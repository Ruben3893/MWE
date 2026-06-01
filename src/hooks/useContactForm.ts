import { useCallback, useState, type FormEvent } from 'react';
import { isSupabaseEnabled } from '../config/supabase';

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

async function logInquiryToSupabase(payload: {
  name: string;
  phone: string;
  message: string;
}) {
  const { supabase } = await import('../config/supabase');
  
  const { error } = await supabase.from('inquiries').insert([
    {
      name: payload.name,
      phone: payload.phone,
      message: payload.message,
      source: 'website',
    },
  ]);

  if (error) {
    throw error;
  }
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

    if (!isSupabaseEnabled()) {
      // Fallback state if database credentials aren't present
      setStatus('success');
      setFields(initialFields);
      return;
    }

    try {
      await logInquiryToSupabase(payload);
      setStatus('success');
      setFields(initialFields);
    } catch (err: any) {
      console.error('Supabase save error:', err);
      setStatus('error');
      setErrorMessage('Could not save your inquiry. Please contact us on WhatsApp or phone.');
    }
  }, [fields]);

  return {
    fields,
    status,
    errorMessage,
    databaseEnabled: isSupabaseEnabled(),
    updateField,
    resetForm,
    submit,
  };
}
