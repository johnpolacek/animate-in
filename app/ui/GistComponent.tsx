import React, { useState, useEffect } from 'react';
import Code from '@/components/ui/code';

const GistComponent = ({ gistId, language }: { gistId: string, language: string}) => {
  const [gistContent, setGistContent] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/gists/${gistId}`)
      .then(response => response.json())
      .then(data => {
        // Assuming the Gist has only one file and getting its content
        const fileKey = Object.keys(data.files)[0];
        setGistContent(data.files[fileKey].content);
      })
      .catch(error => console.error('Error fetching Gist:', error));
  }, [gistId]);

  if (!gistContent) return null;

  return (
    <Code code={gistContent} language={language} />
  );
};

export default GistComponent;
