
import React, { createContext, useState, useContext, ReactNode } from "react";

type Mood = "amazing" | "good" | "neutral" | "bad" | "terrible" | "";

interface DayData {
  date: string;
  mood: Mood;
  note?: string;
}

interface SpecialMoment {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  icon?: string;
}

interface RelationshipContextType {
  startDate: Date;
  daysData: Record<string, DayData>;
  specialMoments: SpecialMoment[];
  timelineEvents: TimelineEvent[];
  setDayMood: (date: string, mood: Mood) => void;
  setDayNote: (date: string, note: string) => void;
  addSpecialMoment: (moment: Omit<SpecialMoment, "id">) => void;
  addTimelineEvent: (event: Omit<TimelineEvent, "id">) => void;
}

const defaultRelationshipContext: RelationshipContextType = {
  startDate: new Date(new Date().getFullYear(), 0, 1), // Default to January 1st of current year
  daysData: {},
  specialMoments: [],
  timelineEvents: [],
  setDayMood: () => {},
  setDayNote: () => {},
  addSpecialMoment: () => {},
  addTimelineEvent: () => {},
};

// Updated sample data with 2 different images from the user's uploaded photos
const sampleSpecialMoments: SpecialMoment[] = [
  {
    id: "1",
    title: "Primer paseo inolvidable",
    date: "2023-02-14",
    description: "Paseamos por el parque y fue un día maravilloso",
    imageUrl: "/lovable-uploads/6d2b02e1-7d0f-461c-806e-6f58fe15a403.png",
  },
  {
    id: "2",
    title: "Cena romántica bajo las estrellas",
    date: "2023-07-10",
    description: "Disfrutamos de una velada mágica llena de amor",
    imageUrl: "/lovable-uploads/c91e3803-56c4-4f3d-a03b-c531adc91012.png",
  },
];

const sampleTimelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Nuestro primer encuentro",
    date: "2023-01-10",
    description: "El día que nuestros caminos se cruzaron por primera vez",
    icon: "heart",
  },
  {
    id: "2",
    title: "Primera cita",
    date: "2023-01-20",
    description: "Café y una larga conversación que duró horas",
    icon: "coffee",
  },
  {
    id: "3",
    title: "Nos hicimos novios",
    date: "2023-02-01",
    description: "El día que comenzó oficialmente nuestra historia de amor",
    icon: "heart",
  },
];

export const RelationshipContext = createContext<RelationshipContextType>(defaultRelationshipContext);

export const RelationshipProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [startDate] = useState<Date>(new Date(2024, 2, 7)); // Month is 0-indexed, so March is 2
  const [daysData, setDaysData] = useState<Record<string, DayData>>({});
  const [specialMoments, setSpecialMoments] = useState<SpecialMoment[]>(sampleSpecialMoments);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(sampleTimelineEvents);

  const setDayMood = (date: string, mood: Mood) => {
    setDaysData((prev) => ({
      ...prev,
      [date]: {
        ...prev[date],
        date,
        mood,
      },
    }));
  };

  const setDayNote = (date: string, note: string) => {
    setDaysData((prev) => ({
      ...prev,
      [date]: {
        ...prev[date],
        date,
        note,
      },
    }));
  };

  const addSpecialMoment = (moment: Omit<SpecialMoment, "id">) => {
    const newMoment: SpecialMoment = {
      ...moment,
      id: crypto.randomUUID(),
    };
    setSpecialMoments((prev) => [...prev, newMoment]);
  };

  const addTimelineEvent = (event: Omit<TimelineEvent, "id">) => {
    const newEvent: TimelineEvent = {
      ...event,
      id: crypto.randomUUID(),
    };
    setTimelineEvents((prev) => [...prev, newEvent]);
  };

  return (
    <RelationshipContext.Provider
      value={{
        startDate,
        daysData,
        specialMoments,
        timelineEvents,
        setDayMood,
        setDayNote,
        addSpecialMoment,
        addTimelineEvent,
      }}
    >
      {children}
    </RelationshipContext.Provider>
  );
};

export const useRelationship = () => useContext(RelationshipContext);
