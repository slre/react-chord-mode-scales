import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Datos de los modos para cada nota
  const modesData = {
    "C": {
      "Ionian": ["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7♭5"],
      "Dorian": ["Cm7", "Dm7", "E♭maj7", "F7", "Gm7", "Am7♭5", "B♭maj7"],
      "Phrygian": ["Cm7", "D♭maj7", "E♭m7", "Fm7", "G7♭5", "A♭maj7", "B♭m7"],
      "Lydian": ["Cmaj7", "D7", "Em7", "F♯m7♭5", "Gmaj7", "Am7", "Bm7"],
      "Mixolydian": ["C7", "Dm7", "Em7♭5", "Fmaj7", "Gm7", "Am7", "B♭maj7"],
      "Aeolian": ["Cm7", "Dm7♭5", "E♭maj7", "Fm7", "Gm7", "A♭maj7", "B♭7"],
      "Locrian": ["Cm7♭5", "D♭maj7", "E♭m7", "Fm7", "G♭7", "A♭maj7", "B♭m7"]
    },
    "C#": {
      "Ionian": ["C#maj7", "D#m7", "Fm7", "F#maj7", "G#7", "A#m7", "Cm7♭5"],
      "Dorian": ["C#m7", "D#m7", "Emaj7", "F#7", "G#m7", "A#m7♭5", "Bmaj7"],
      "Phrygian": ["C#m7", "Dmaj7", "Em7", "F#m7", "G#7♭5", "Amaj7", "Bm7"],
      "Lydian": ["C#maj7", "D#7", "Fm7", "Gm7♭5", "G#maj7", "A#m7", "Cm7"],
      "Mixolydian": ["C#7", "D#m7", "Fm7♭5", "F#maj7", "G#m7", "A#m7", "Bmaj7"],
      "Aeolian": ["C#m7", "D#m7♭5", "Emaj7", "F#m7", "G#m7", "Amaj7", "B7"],
      "Locrian": ["C#m7♭5", "Dmaj7", "Em7", "F#m7", "G7", "Amaj7", "Bm7"]
    },
    "D": {
      "Ionian": ["Dmaj7", "Em7", "F#m7", "Gmaj7", "A7", "Bm7", "C#m7♭5"],
      "Dorian": ["Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7♭5", "Cmaj7"],
      "Phrygian": ["Dm7", "E♭maj7", "Fm7", "Gm7", "A7♭5", "B♭maj7", "Cm7"],
      "Lydian": ["Dmaj7", "E7", "F#m7", "G#m7♭5", "Amaj7", "Bm7", "C#m7"],
      "Mixolydian": ["D7", "Em7", "F#m7♭5", "Gmaj7", "Am7", "Bm7", "Cmaj7"],
      "Aeolian": ["Dm7", "Em7♭5", "Fmaj7", "Gm7", "Am7", "B♭maj7", "C7"],
      "Locrian": ["Dm7♭5", "E♭maj7", "Fm7", "Gm7", "A♭7", "B♭maj7", "Cm7"]
    },
    "D#": {
      "Ionian": ["D#maj7", "Fm7", "Gm7", "G#maj7", "A#7", "Cm7", "Dm7♭5"],
      "Dorian": ["D#m7", "Fm7", "F#maj7", "G#7", "A#m7", "Cm7♭5", "C#maj7"],
      "Phrygian": ["D#m7", "Emaj7", "F#m7", "G#m7", "A#7♭5", "Bmaj7", "C#m7"],
      "Lydian": ["D#maj7", "F7", "Gm7", "Am7♭5", "A#maj7", "Cm7", "Dm7"],
      "Mixolydian": ["D#7", "Fm7", "Gm7♭5", "G#maj7", "A#m7", "Cm7", "C#maj7"],
      "Aeolian": ["D#m7", "Fm7♭5", "F#maj7", "G#m7", "A#m7", "Bmaj7", "C#7"],
      "Locrian": ["D#m7♭5", "Emaj7", "F#m7", "G#m7", "A7", "Bmaj7", "C#m7"]
    },
    "E": {
      "Ionian": ["Emaj7", "F#m7", "G#m7", "Amaj7", "B7", "C#m7", "D#m7♭5"],
      "Dorian": ["Em7", "F#m7", "Gmaj7", "A7", "Bm7", "C#m7♭5", "Dmaj7"],
      "Phrygian": ["Em7", "Fmaj7", "Gm7", "Am7", "B7♭5", "Cmaj7", "Dm7"],
      "Lydian": ["Emaj7", "F#7", "G#m7", "A#m7♭5", "Bmaj7", "C#m7", "D#m7"],
      "Mixolydian": ["E7", "F#m7", "G#m7♭5", "Amaj7", "Bm7", "C#m7", "Dmaj7"],
      "Aeolian": ["Em7", "F#m7♭5", "Gmaj7", "Am7", "Bm7", "Cmaj7", "D7"],
      "Locrian": ["Em7♭5", "Fmaj7", "Gm7", "Am7", "B♭7", "Cmaj7", "Dm7"]
    },
    "F": {
      "Ionian": ["Fmaj7", "Gm7", "Am7", "B♭maj7", "C7", "Dm7", "Em7♭5"],
      "Dorian": ["Fm7", "Gm7", "A♭maj7", "B♭7", "Cm7", "Dm7♭5", "E♭maj7"],
      "Phrygian": ["Fm7", "G♭maj7", "A♭m7", "B♭m7", "C7♭5", "D♭maj7", "E♭m7"],
      "Lydian": ["Fmaj7", "G7", "Am7", "Bm7♭5", "Cmaj7", "Dm7", "Em7"],
      "Mixolydian": ["F7", "Gm7", "Am7♭5", "B♭maj7", "Cm7", "Dm7", "E♭maj7"],
      "Aeolian": ["Fm7", "Gm7♭5", "A♭maj7", "B♭m7", "Cm7", "D♭maj7", "E♭7"],
      "Locrian": ["Fm7♭5", "G♭maj7", "A♭m7", "B♭m7", "C♭7", "D♭maj7", "E♭m7"]
    },
    "F#": {
      "Ionian": ["F#maj7", "G#m7", "A#m7", "Bmaj7", "C#7", "D#m7", "Fm7♭5"],
      "Dorian": ["F#m7", "G#m7", "Amaj7", "B7", "C#m7", "D#m7♭5", "Emaj7"],
      "Phrygian": ["F#m7", "Gmaj7", "Am7", "Bm7", "C#7♭5", "Dmaj7", "Em7"],
      "Lydian": ["F#maj7", "G#7", "A#m7", "Cm7♭5", "C#maj7", "D#m7", "Fm7"],
      "Mixolydian": ["F#7", "G#m7", "A#m7♭5", "Bmaj7", "C#m7", "D#m7", "Emaj7"],
      "Aeolian": ["F#m7", "G#m7♭5", "Amaj7", "Bm7", "C#m7", "Dmaj7", "E7"],
      "Locrian": ["F#m7♭5", "Gmaj7", "Am7", "Bm7", "C7", "Dmaj7", "Em7"]
    },
    "G": {
      "Ionian": ["Gmaj7", "Am7", "Bm7", "Cmaj7", "D7", "Em7", "F#m7♭5"],
      "Dorian": ["Gm7", "Am7", "B♭maj7", "C7", "Dm7", "Em7♭5", "Fmaj7"],
      "Phrygian": ["Gm7", "A♭maj7", "B♭m7", "Cm7", "D7♭5", "E♭maj7", "Fm7"],
      "Lydian": ["Gmaj7", "A7", "Bm7", "C#m7♭5", "Dmaj7", "Em7", "F#m7"],
      "Mixolydian": ["G7", "Am7", "Bm7♭5", "Cmaj7", "Dm7", "Em7", "Fmaj7"],
      "Aeolian": ["Gm7", "Am7♭5", "B♭maj7", "Cm7", "Dm7", "E♭maj7", "F7"],
      "Locrian": ["Gm7♭5", "A♭maj7", "B♭m7", "Cm7", "D♭7", "E♭maj7", "Fm7"]
    },
    "G#": {
      "Ionian": ["G#maj7", "A#m7", "Cm7", "C#maj7", "D#7", "Fm7", "Gm7♭5"],
      "Dorian": ["G#m7", "A#m7", "Bmaj7", "C#7", "D#m7", "Fm7♭5", "F#maj7"],
      "Phrygian": ["G#m7", "Amaj7", "Bm7", "C#m7", "D#7♭5", "Emaj7", "F#m7"],
      "Lydian": ["G#maj7", "A#7", "Cm7", "Dm7♭5", "D#maj7", "Fm7", "Gm7"],
      "Mixolydian": ["G#7", "A#m7", "Cm7♭5", "C#maj7", "D#m7", "Fm7", "F#maj7"],
      "Aeolian": ["G#m7", "A#m7♭5", "Bmaj7", "C#m7", "D#m7", "Emaj7", "F#7"],
      "Locrian": ["G#m7♭5", "Amaj7", "Bm7", "C#m7", "D7", "Emaj7", "F#m7"]
    },
    "A": {
      "Ionian": ["Amaj7", "Bm7", "C#m7", "Dmaj7", "E7", "F#m7", "G#m7♭5"],
      "Dorian": ["Am7", "Bm7", "Cmaj7", "D7", "Em7", "F#m7♭5", "Gmaj7"],
      "Phrygian": ["Am7", "B♭maj7", "Cm7", "Dm7", "E7♭5", "Fmaj7", "Gm7"],
      "Lydian": ["Amaj7", "B7", "C#m7", "D#m7♭5", "Emaj7", "F#m7", "G#m7"],
      "Mixolydian": ["A7", "Bm7", "C#m7♭5", "Dmaj7", "Em7", "F#m7", "Gmaj7"],
      "Aeolian": ["Am7", "Bm7♭5", "Cmaj7", "Dm7", "Em7", "Fmaj7", "G7"],
      "Locrian": ["Am7♭5", "B♭maj7", "Cm7", "Dm7", "E♭7", "Fmaj7", "Gm7"]
    },
    "A#": {
      "Ionian": ["A#maj7", "Cm7", "Dm7", "E♭maj7", "F7", "Gm7", "Am7♭5"],
      "Dorian": ["A#m7", "Cm7", "C#maj7", "E♭7", "Fm7", "Gm7♭5", "G#maj7"],
      "Phrygian": ["A#m7", "Bmaj7", "C#m7", "E♭m7", "F7♭5", "F#maj7", "G#m7"],
      "Lydian": ["A#maj7", "C7", "Dm7", "Em7♭5", "Fmaj7", "Gm7", "Am7"],
      "Mixolydian": ["A#7", "Cm7", "Dm7♭5", "E♭maj7", "Fm7", "Gm7", "G#maj7"],
      "Aeolian": ["A#m7", "Cm7♭5", "C#maj7", "E♭m7", "Fm7", "F#maj7", "G#7"],
      "Locrian": ["A#m7♭5", "Bmaj7", "C#m7", "E♭m7", "E7", "F#maj7", "G#m7"]
    },
    "B": {
      "Ionian": ["Bmaj7", "C#m7", "D#m7", "Emaj7", "F#7", "G#m7", "A#m7♭5"],
      "Dorian": ["Bm7", "C#m7", "Dmaj7", "E7", "F#m7", "G#m7♭5", "Amaj7"],
      "Phrygian": ["Bm7", "Cmaj7", "Dm7", "Em7", "F#7♭5", "Gmaj7", "Am7"],
      "Lydian": ["Bmaj7", "C#7", "D#m7", "Fm7♭5", "F#maj7", "G#m7", "A#m7"],
      "Mixolydian": ["B7", "C#m7", "D#m7♭5", "Emaj7", "F#m7", "G#m7", "Amaj7"],
      "Aeolian": ["Bm7", "C#m7♭5", "Dmaj7", "Em7", "F#m7", "Gmaj7", "A7"],
      "Locrian": ["Bm7♭5", "Cmaj7", "Dm7", "Em7", "F7", "Gmaj7", "Am7"]
    }
  };

 // Nombres de las notas en español
 const noteNames = {
  "C": "Do",
  "C#": "Do#/Reb",
  "D": "Re",
  "D#": "Re#/Mib",
  "E": "Mi",
  "F": "Fa",
  "F#": "Fa#/Solb",
  "G": "Sol",
  "G#": "Sol#/Lab",
  "A": "La",
  "A#": "La#/Sib",
  "B": "Si"
};

// Descripciones de los modos
const modeDescriptions = {
  "Ionian": "El modo jónico (escala mayor) tiene un sonido brillante y alegre. Es la base de la música tonal occidental.",
  "Dorian": "El modo dórico tiene un sonido menor con un sexto grado elevado. Muy usado en jazz, rock y música folk.",
  "Phrygian": "El modo frigio tiene un sonido español o flamenco, con su segundo grado rebajado.",
  "Lydian": "El modo lidio suena dreamy y etéreo, con su cuarto grado elevado. Usado en música cinematográfica.",
  "Mixolydian": "El modo mixolidio es similar al mayor pero con séptima menor. Esencial en blues, rock y funk.",
  "Aeolian": "El modo eólico (escala menor natural) tiene un sonido melancólico y triste.",
  "Locrian": "El modo locrio es el más inestable, con quinta disminuida. Poco usado en música tradicional."
};

// Nombres de los modos en español
const modeNames = {
  "Ionian": "Jónico",
  "Dorian": "Dórico",
  "Phrygian": "Frigio",
  "Lydian": "Lidio",
  "Mixolydian": "Mixolidio",
  "Aeolian": "Eólico",
  "Locrian": "Locrio"
};


  // Estado para la nota y modo seleccionados
  const [selectedNote, setSelectedNote] = useState("C");
  const [selectedMode, setSelectedMode] = useState("Ionian");
  const [isMobile, setIsMobile] = useState(false);

  // Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Ejecutar al montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para convertir números a romanos
  const getRomanNumeral = (num) => {
    const romanNumerals = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII' };
    return romanNumerals[num] || num;
  };

  // Obtener los acordes actuales
  const currentChords = modesData[selectedNote][selectedMode];

  // Calcular columnas para la cuadrícula de acordes
  const getGridColumns = () => {
    if (isMobile) {
      return window.innerWidth < 480 ? 2 : 3;
    }
    return 7;
  };

  return (
    <div className="app-container">
      <div className="app">
        <h1>Selector de Modos Musicales</h1>
        
        <div className="controls">
          <div className="control-group">
            <label htmlFor="note-selector">Selecciona una nota:</label>
            <select 
              id="note-selector" 
              value={selectedNote}
              onChange={(e) => {
                setSelectedNote(e.target.value);
                // Resetear el modo al cambiar de nota para evitar combinaciones inválidas
                setSelectedMode("Ionian");
              }}
              className="custom-select"
            >
              {Object.keys(modesData).map(note => (
                <option key={note} value={note}>
                  {note} ({noteNames[note]})
                </option>
              ))}
            </select>
          </div>
          
          <div className="control-group">
            <label htmlFor="mode-selector">Selecciona un modo:</label>
            <select 
              id="mode-selector" 
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="custom-select"
            >
              {Object.keys(modesData[selectedNote]).map(mode => (
                <option key={mode} value={mode}>
                  {modeNames[mode]}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="result-container">
          <div className="selected-mode">{modeNames[selectedMode]}</div>
          <div className="selected-note">de {selectedNote} ({noteNames[selectedNote]})</div>
          
          <div 
            className="chords-grid"
            style={{ 
              gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
              transition: 'grid-template-columns 0.3s ease'
            }}
          >
            {currentChords.map((chord, index) => (
              <div key={index} className="chord-card">
                <div className="chord">{chord}</div>
                <div className="degree">{getRomanNumeral(index + 1)}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mode-info">
          <strong>Información del modo:</strong>
          <div className="mode-description">{modeDescriptions[selectedMode]}</div>
        </div>
      </div>
    </div>
  );
};

export default App;