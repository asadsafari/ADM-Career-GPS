const NOTES_STORAGE_KEY = 'admCareerGpsNotes';

type Notes = { [key: string]: string };

export const getNotes = (): Notes => {
  try {
    const notesJson = localStorage.getItem(NOTES_STORAGE_KEY);
    return notesJson ? JSON.parse(notesJson) : {};
  } catch (error) {
    console.error("Error reading notes from localStorage", error);
    return {};
  }
};

export const getNote = (key: string): string => {
  const notes = getNotes();
  return notes[key] || '';
};

export const saveNote = (key:string, content: string) => {
  try {
    const notes = getNotes();
    notes[key] = content;
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Error saving note to localStorage", error);
  }
};
