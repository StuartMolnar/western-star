import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = 'Your Default Title';
    };
  }, [title]);
}

export default useDocumentTitle;
