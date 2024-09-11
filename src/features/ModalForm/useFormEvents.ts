import { useEffect } from 'react';

export const useFormEvents = (formRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const formElement = formRef.current;

    if (!formElement) return;

    const handleEvent = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      const label = target.previousElementSibling as HTMLLabelElement;

      if (!label) return;

      if (e.type === 'keyup') {
        if (target.value === '') {
          label.classList.remove('active', 'highlight');
        } else {
          label.classList.add('active', 'highlight');
        }
      } else if (e.type === 'blur') {
        if (target.value === '') {
          label.classList.remove('active', 'highlight');
        } else {
          label.classList.remove('highlight');
        }
      } else if (e.type === 'focus') {
        if (target.value === '') {
          label.classList.remove('highlight');
        } else if (target.value !== '') {
          label.classList.add('highlight');
        }
      }
    };

    const inputs = formElement.querySelectorAll('input, textarea');

    inputs.forEach((input) => {
      input.addEventListener('keyup', handleEvent);
      input.addEventListener('blur', handleEvent);
      input.addEventListener('focus', handleEvent);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('keyup', handleEvent);
        input.removeEventListener('blur', handleEvent);
        input.removeEventListener('focus', handleEvent);
      });
    };
  }, [formRef]);
};
