import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils';

const getFormFields = (content: string): string[] | undefined => {
  const matches = content.match(/\{(.*?)\}/g);

  // Extract the text from matches
  if (matches) {
    const fields: string[] = [];
    matches.map(match => {
      fields.push(match.slice(1, -1));
    });
    return Array.from(new Set(fields));
  }
};

const getFileContent = (file: File, cb: (data: string[]) => void) => {
  try {
    const url = URL.createObjectURL(file);
    PizZipUtils.getBinaryContent(url, (error: Error, data: string) => {
      if (error) {
        console.log(error);
      }
      const zip = new PizZip(data);
      const doc = new Docxtemplater().loadZip(zip).getFullText();
      const fields = getFormFields(doc);
      if (fields) cb(fields);
    });
  } catch (error) {
    console.log(error);
  }
};

export default {getFileContent, getFormFields};
