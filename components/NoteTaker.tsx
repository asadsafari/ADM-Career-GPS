
import React, { useState, useEffect } from 'react';
import { getNote, saveNote } from '../utils/storage';
import { useDebounce } from '../hooks/useDebounce';

interface NoteTakerProps {
  noteKey: string;
}

type SaveStatus = 'idle' | 'saving' | 'saved';

export const NoteTaker: React.FC<NoteTakerProps> = ({ noteKey }) => {
  const [note, setNote] = useState<string>(() => getNote(noteKey));
  const [isEditing, setIsEditing] = useState<boolean>(!note);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');

  const debouncedNote = useDebounce(note, 700);

  // Effect to save the note to localStorage when the debounced value changes.
  useEffect(() => {
    if (debouncedNote !== getNote(noteKey)) {
      setSaveStatus('saving');
      saveNote(noteKey, debouncedNote);
      const timer = setTimeout(() => setSaveStatus('saved'), 500);
      const idleTimer = setTimeout(() => setSaveStatus('idle'), 2500);

      return () => {
        clearTimeout(timer);
        clearTimeout(idleTimer);
      };
    }
  }, [debouncedNote, noteKey]);
  
  // Effect to reset state when the key changes (user selects a new skill)
  useEffect(() => {
      const existingNote = getNote(noteKey);
      setNote(existingNote);
      setIsEditing(!existingNote);
      setSaveStatus('idle');
  }, [noteKey]);


  const getStatusText = () => {
    switch (saveStatus) {
      case 'saving': return 'در حال ذخیره...';
      case 'saved': return 'ذخیره شد ✓';
      default: return null;
    }
  };

  return (
    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-inner" dir="rtl">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-sm text-yellow-900">یادداشت‌های شخصی شما</h4>
        <span className="text-xs text-yellow-800 italic transition-opacity duration-300 h-4">
          {getStatusText()}
        </span>
      </div>
      {isEditing ? (
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onBlur={() => setIsEditing(note.trim().length === 0)}
          placeholder="یادداشت‌ها، بازخوردها یا موارد اقدام خود را اینجا اضافه کنید. یادداشت‌ها به صورت خودکار ذخیره می‌شوند."
          className="w-full h-28 p-2 bg-white border border-yellow-300 rounded-md focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 text-sm text-text-secondary transition text-right"
          aria-label="یادداشت‌های شخصی"
          autoFocus
        />
      ) : (
        <div 
          onClick={() => setIsEditing(true)} 
          className="w-full min-h-[7rem] p-2 text-sm text-text-secondary cursor-pointer whitespace-pre-wrap rounded-md border border-transparent hover:border-yellow-300 transition-all bg-white/50"
        >
          {note}
        </div>
      )}
    </div>
  );
};
