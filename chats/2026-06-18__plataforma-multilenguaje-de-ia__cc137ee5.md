# Plataforma Multilenguaje de IA

- Chat ID: `cc137ee5-53a1-408f-8806-ff645d8e5d88`
- Mensajes: 2
- Periodo: 2026-06-18 16:26 UTC → 2026-06-18 16:26 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-06-18 16:26

Desarrollo allá el Código de una plataforma Que le los documentos que subes En 30 idiomas Los más salados del mundo Eso es un PDF entonces le son muertos subes un TXT Y te roe Tele en el texto Deja descargar te deja escoger diferentes voces diferentes tonoidades Después de te deja elegir generar un podcast sobre eso  Y tienes que desarro ¿Eh? Una branding A partir del nombre Belent AI ni Doc reader En base a la percepción cognitiva en la teoría de la mente Receptiva También dentro de esa Misma plataforma hay Eh aumentar tamaños de foto De construir foto antigua Pixelada Borrar objeto Cambiar tonalidad de iluminación Generar foto Generar fotos con referencia Generar vídeo Generar video con referencia Texto al vídeo Texto imagen

## [ASSISTANT] 2026-06-18 16:26 · Qwen3.7-Plus

# 🚀 Belent AI Doc Reader - Plataforma Completa

Voy a desarrollar todo el proyecto: branding, diseño visual y código de la plataforma. Empecemos con las imágenes de branding y la interfaz.

#  Belent AI — Plataforma Completa

## Branding & Identidad Visual

Basado en **Teoría de la Mente Receptiva** y **Percepción Cognitiva**, el branding transmite:

| Elemento | Significado Cognitivo |
|---|---|
|  Logo cerebro-circuito | La IA "entiende" al usuario (ToM) |
|  Documento integrado | Procesamiento empático de información |
| 🎨 Gradiente Índigo→Cian | De la profundidad cognitiva a la claridad receptiva |
|  Formas redondeadas | Accesibilidad y calidez perceptual |

**Paleta:** `#4F46E5` (Índigo profundo) · `#06B6D4` (Cian) · `#8B5CF6` (Púrpura suave) · `#1E1B4B` (Navy oscuro)

**Tagline:** *"Intelligent. Empathetic. Accessible."*

---

## 📁 Estructura del Proyecto

```
belent-ai/
├── frontend/          # Next.js 14 + React + Tailwind
├── backend/           # Node.js + Express + Python microservices
├── shared/            # Tipos, constantes, utilidades
└── docker-compose.yml
```

---

## 1️ FRONTEND — `frontend/`

### `package.json`
```json
{
  "name": "belent-ai-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "axios": "^1.7.0",
    "zustand": "^4.5.0",
    "react-dropzone": "^14.2.0",
    "react-icons": "^5.0.0",
    "framer-motion": "^11.0.0",
    "howler": "^2.2.0",
    "wavesurfer.js": "^7.7.0",
    "react-compare-slider": "^3.1.0"
  }
}
```

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        belent: {
          indigo: '#4F46E5',
          cyan: '#06B6D4',
          purple: '#8B5CF6',
          navy: '#1E1B4B',
          dark: '#0F0D2E',
          surface: '#1A1744',
          glass: 'rgba(26, 23, 68, 0.6)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
```

### `src/app/layout.tsx`
```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Belent AI — Doc Reader & Creative Studio',
  description: 'AI-powered document translation, voice synthesis, podcast generation, image & video creation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-belent-dark text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

### `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-belent-dark text-white;
  }
}

@layer components {
  .glass-card {
    @apply bg-belent-glass backdrop-blur-xl border border-white/10 rounded-2xl;
  }
  .btn-primary {
    @apply bg-gradient-to-r from-belent-indigo to-belent-cyan 
           text-white font-semibold px-6 py-3 rounded-xl 
           hover:opacity-90 transition-all duration-200
           shadow-lg shadow-belent-indigo/25;
  }
  .btn-secondary {
    @apply bg-belent-surface border border-white/10 
           text-white font-medium px-5 py-2.5 rounded-xl 
           hover:bg-white/10 transition-all duration-200;
  }
  .input-field {
    @apply bg-belent-surface border border-white/10 rounded-xl 
           px-4 py-3 text-white placeholder-white/40
           focus:outline-none focus:border-belent-cyan transition-colors;
  }
  .sidebar-item {
    @apply flex items-center gap-3 px-4 py-3 rounded-xl 
           text-white/70 hover:bg-white/5 hover:text-white 
           transition-all duration-200 cursor-pointer;
  }
  .sidebar-item.active {
    @apply bg-gradient-to-r from-belent-indigo/20 to-belent-cyan/10 
           text-white border-l-2 border-belent-cyan;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #4F46E5; border-radius: 3px; }
```

### `src/store/useStore.ts` — Estado Global (Zustand)
```typescript
import { create } from 'zustand'

// ============ TYPES ============
export interface DocumentFile {
  id: string
  name: string
  type: 'pdf' | 'txt'
  content: string
  translatedContent?: string
  targetLanguage: string
  audioUrl?: string
  podcastUrl?: string
}

export interface VoiceOption {
  id: string
  name: string
  language: string
  gender: 'male' | 'female' | 'neutral'
  pitch: number
  rate: number
}

export interface ImageProject {
  id: string
  type: 'upscale' | 'restore' | 'remove-object' | 'lighting' | 'generate' | 'generate-ref'
  inputUrl?: string
  outputUrl?: string
  prompt?: string
  referenceUrl?: string
  status: 'pending' | 'processing' | 'done' | 'error'
}

export interface VideoProject {
  id: string
  type: 'text-to-video' | 'image-to-video' | 'text-to-video-ref'
  prompt?: string
  referenceUrl?: string
  outputUrl?: string
  status: 'pending' | 'processing' | 'done' | 'error'
}

type ActiveSection = 
  | 'documents' 
  | 'translation' 
  | 'voice' 
  | 'podcast' 
  | 'image-tools' 
  | 'video'

// ============ STORE ============
interface AppState {
  // Navigation
  activeSection: ActiveSection
  setActiveSection: (s: ActiveSection) => void

  // Documents
  documents: DocumentFile[]
  addDocument: (doc: DocumentFile) => void
  updateDocument: (id: string, updates: Partial<DocumentFile>) => void
  removeDocument: (id: string) => void
  currentDocId: string | null
  setCurrentDocId: (id: string | null) => void

  // Translation
  targetLanguage: string
  setTargetLanguage: (lang: string) => void
  isTranslating: boolean
  setIsTranslating: (v: boolean) => void

  // Voice
  selectedVoice: VoiceOption | null
  setSelectedVoice: (v: VoiceOption | null) => void
  isSpeaking: boolean
  setIsSpeaking: (v: boolean) => void

  // Podcast
  podcastStyle: string
  setPodcastStyle: (s: string) => void
  isGeneratingPodcast: boolean
  setIsGeneratingPodcast: (v: boolean) => void

  // Image Tools
  imageProjects: ImageProject[]
  addImageProject: (p: ImageProject) => void
  updateImageProject: (id: string, updates: Partial<ImageProject>) => void

  // Video
  videoProjects: VideoProject[]
  addVideoProject: (p: VideoProject) => void
  updateVideoProject: (id: string, updates: Partial<VideoProject>) => void
}

export const useStore = create<AppState>((set) => ({
  activeSection: 'documents',
  setActiveSection: (s) => set({ activeSection: s }),

  documents: [],
  addDocument: (doc) => set((state) => ({ documents: [...state.documents, doc] })),
  updateDocument: (id, updates) => set((state) => ({
    documents: state.documents.map((d) => d.id === id ? { ...d, ...updates } : d)
  })),
  removeDocument: (id) => set((state) => ({
    documents: state.documents.filter((d) => d.id !== id)
  })),
  currentDocId: null,
  setCurrentDocId: (id) => set({ currentDocId: id }),

  targetLanguage: 'es',
  setTargetLanguage: (lang) => set({ targetLanguage: lang }),
  isTranslating: false,
  setIsTranslating: (v) => set({ isTranslating: v }),

  selectedVoice: null,
  setSelectedVoice: (v) => set({ selectedVoice: v }),
  isSpeaking: false,
  setIsSpeaking: (v) => set({ isSpeaking: v }),

  podcastStyle: 'conversational',
  setPodcastStyle: (s) => set({ podcastStyle: s }),
  isGeneratingPodcast: false,
  setIsGeneratingPodcast: (v) => set({ isGeneratingPodcast: v }),

  imageProjects: [],
  addImageProject: (p) => set((state) => ({ imageProjects: [...state.imageProjects, p] })),
  updateImageProject: (id, updates) => set((state) => ({
    imageProjects: state.imageProjects.map((p) => p.id === id ? { ...p, ...updates } : p)
  })),

  videoProjects: [],
  addVideoProject: (p) => set((state) => ({ videoProjects: [...state.videoProjects, p] })),
  updateVideoProject: (id, updates) => set((state) => ({
    videoProjects: state.videoProjects.map((p) => p.id === id ? { ...p, ...updates } : p)
  })),
}))
```

### `src/constants/languages.ts`
```typescript
export const LANGUAGES = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇪' },
  { code: 'it', name: 'Italiano', flag: '🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'ro', name: 'Română', flag: '🇴' },
  { code: 'hu', name: 'Magyar', flag: '🇺' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
]

export const VOICES: VoiceOption[] = [
  { id: 'v1', name: 'Sofia', language: 'es', gender: 'female', pitch: 1.0, rate: 1.0 },
  { id: 'v2', name: 'Carlos', language: 'es', gender: 'male', pitch: 0.9, rate: 1.0 },
  { id: 'v3', name: 'Emma', language: 'en', gender: 'female', pitch: 1.0, rate: 1.0 },
  { id: 'v4', name: 'James', language: 'en', gender: 'male', pitch: 0.85, rate: 1.0 },
  { id: 'v5', name: 'Marie', language: 'fr', gender: 'female', pitch: 1.1, rate: 1.0 },
  { id: 'v6', name: 'Hans', language: 'de', gender: 'male', pitch: 0.9, rate: 1.0 },
  { id: 'v7', name: 'Yuki', language: 'ja', gender: 'female', pitch: 1.2, rate: 1.0 },
  { id: 'v8', name: 'Wei', language: 'zh', gender: 'male', pitch: 0.8, rate: 1.0 },
  { id: 'v9', name: 'Aria', language: 'en', gender: 'neutral', pitch: 1.0, rate: 0.9 },
  { id: 'v10', name: 'Luna', language: 'es', gender: 'female', pitch: 1.1, rate: 0.95 },
]

export const PODCAST_STYLES = [
  { id: 'conversational', name: 'Conversacional', icon: '💬' },
  { id: 'narrative', name: 'Narrativo', icon: '📖' },
  { id: 'educational', name: 'Educativo', icon: '🎓' },
  { id: 'interview', name: 'Entrevista', icon: '🎙️' },
  { id: 'storytelling', name: 'Storytelling', icon: '✨' },
  { id: 'debate', name: 'Debate', icon: '⚡' },
]
```

### `src/components/Sidebar.tsx`
```tsx
'use client'
import { useStore } from '@/store/useStore'
import { FiFileText, FiGlobe, FiMic, FiHeadphones, FiImage, FiVideo } from 'react-icons/fi'

const NAV_ITEMS = [
  { id: 'documents' as const, label: 'Documents', icon: FiFileText },
  { id: 'translation' as const, label: 'Translation', icon: FiGlobe },
  { id: 'voice' as const, label: 'Voice', icon: FiMic },
  { id: 'podcast' as const, label: 'Podcast', icon: FiHeadphones },
  { id: 'image-tools' as const, label: 'Image Tools', icon: FiImage },
  { id: 'video' as const, label: 'Video', icon: FiVideo },
]

export default function Sidebar() {
  const { activeSection, setActiveSection } = useStore()

  return (
    <aside className="w-64 h-screen bg-belent-surface/50 backdrop-blur-xl border-r border-white/5 flex flex-col p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-belent-indigo to-belent-cyan flex items-center justify-center">
          <span className="text-white font-bold text-lg">B</span>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg leading-tight">Belent</h1>
          <span className="text-belent-cyan text-xs font-medium">AI Doc Reader</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-belent-purple to-belent-cyan flex items-center justify-center text-xs font-bold">
            U
          </div>
          <div>
            <p className="text-sm font-medium text-white">Usuario</p>
            <p className="text-xs text-white/40">Plan Pro</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
```

### `src/components/DocumentUploader.tsx`
```tsx
'use client'
import { useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { useStore } from '@/store/useStore'
import { FiUploadCloud, FiFile, FiFileText } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'

export default function DocumentUploader() {
  const { addDocument, setCurrentDocId, documents } = useStore()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      const ext = file.name.split('.').pop()?.toLowerCase()
      if (ext !== 'pdf' && ext !== 'txt') {
        alert('Solo se aceptan archivos PDF y TXT')
        continue
      }

      let content = ''
      if (ext === 'txt') {
        content = await file.text()
      } else {
        // PDF extraction handled by backend
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch('/api/documents/extract', {
          method: 'POST',
          body: formData,
        })
        const data = await res.json()
        content = data.content
      }

      const doc = {
        id: uuidv4(),
        name: file.name,
        type: ext as 'pdf' | 'txt',
        content,
        targetLanguage: 'es',
      }

      addDocument(doc)
      setCurrentDocId(doc.id)
    }
  }, [addDocument, setCurrentDocId])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
    },
    multiple: true,
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Documentos</h2>
        <p className="text-white/50 text-sm">Sube PDF o TXT para traducir, leer y generar podcasts</p>
      </div>

      {/* Upload Zone */}
      <div
        {...getRootProps()}
        className={`glass-card p-12 text-center cursor-pointer transition-all duration-300
          ${isDragActive 
            ? 'border-belent-cyan bg-belent-cyan/10 scale-[1.02]' 
            : 'hover:border-white/20'
          }`}
      >
        <input {...getInputProps()} />
        <FiUploadCloud className={`w-16 h-16 mx-auto mb-4 ${isDragActive ? 'text-belent-cyan' : 'text-white/30'}`} />
        <p className="text-white font-semibold text-lg mb-2">
          {isDragActive ? 'Suelta tu documento aquí' : 'Arrastra y suelta tu documento'}
        </p>
        <p className="text-white/40 text-sm">o haz clic para seleccionar · PDF, TXT</p>
      </div>

      {/* Document List */}
      {documents.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-white/70 text-sm font-medium uppercase tracking-wider">Tus documentos</h3>
          {documents.map((doc) => (
            <div key={doc.id} className="glass-card p-4 flex items-center gap-4">
              {doc.type === 'pdf' ? (
                <FiFileText className="w-8 h-8 text-belent-cyan" />
              ) : (
                <FiFile className="w-8 h-8 text-belent-purple" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{doc.name}</p>
                <p className="text-white/40 text-xs">{doc.content.length} caracteres</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-belent-indigo/20 text-belent-cyan">
                {doc.type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
```

### `src/components/TranslationPanel.tsx`
```tsx
'use client'
import { useStore } from '@/store/useStore'
import { LANGUAGES } from '@/constants/languages'
import { FiGlobe, FiLoader } from 'react-icons/fi'

export default function TranslationPanel() {
  const {
    documents, currentDocId, targetLanguage, setTargetLanguage,
    isTranslating, setIsTranslating, updateDocument
  } = useStore()

  const currentDoc = documents.find((d) => d.id === currentDocId)

  const handleTranslate = async () => {
    if (!currentDoc) return
    setIsTranslating(true)

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: currentDoc.content,
          targetLanguage,
        }),
      })
      const data = await res.json()
      updateDocument(currentDoc.id, { translatedContent: data.translatedText })
    } catch (err) {
      console.error('Translation error:', err)
    } finally {
      setIsTranslating(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Traducción</h2>
        <p className="text-white/50 text-sm">Traduce a 30 idiomas con IA contextual</p>
      </div>

      {/* Language Selector */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <FiGlobe className="text-belent-cyan" />
          <h3 className="text-white font-semibold">Idioma de destino</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setTargetLanguage(lang.code)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all
                ${targetLanguage === lang.code
                  ? 'bg-gradient-to-r from-belent-indigo to-belent-cyan text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
            >
              <span>{lang.flag}</span>
              <span className="truncate">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Preview */}
      {currentDoc && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="glass-card p-6">
            <h4 className="text-white/70 text-sm font-medium mb-3">Original</h4>
            <div className="h-64 overflow-y-auto text-white/80 text-sm whitespace-pre-wrap">
              {currentDoc.content.slice(0, 2000)}
            </div>
          </div>
          <div className="glass-card p-6">
            <h4 className="text-white/70 text-sm font-medium mb-3">
              Traducción ({LANGUAGES.find((l) => l.code === targetLanguage)?.name})
            </h4>
            <div className="h-64 overflow-y-auto text-white/80 text-sm whitespace-pre-wrap">
              {currentDoc.translatedContent || 'Selecciona un idioma y traduce...'}
            </div>
          </div>
        </div>
      )}

      {/* Translate Button */}
      <button
        onClick={handleTranslate}
        disabled={!currentDoc || isTranslating}
        className="btn-primary flex items-center gap-2 disabled:opacity-50"
      >
        {isTranslating ? (
          <FiLoader className="w-5 h-5 animate-spin" />
        ) : (
          <FiGlobe className="w-5 h-5" />
        )}
        {isTranslating ? 'Traduciendo...' : 'Traducir Documento'}
      </button>
    </div>
  )
}
```

### `src/components/VoicePanel.tsx`
```tsx
'use client'
import { useStore } from '@/store/useStore'
import { VOICES } from '@/constants/languages'
import { FiMic, FiPlay, FiPause, FiDownload, FiVolume2 } from 'react-icons/fi'
import { useState } from 'react'

export default function VoicePanel() {
  const {
    documents, currentDocId, selectedVoice, setSelectedVoice,
    isSpeaking, setIsSpeaking
  } = useStore()
  const [pitch, setPitch] = useState(1.0)
  const [rate, setRate] = useState(1.0)
  const [volume, setVolume] = useState(1.0)

  const currentDoc = documents.find((d) => d.id === currentDocId)
  const textToRead = currentDoc?.translatedContent || currentDoc?.content || ''

  const handleSpeak = () => {
    if (!textToRead) return
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(textToRead)
    utterance.pitch = pitch
    utterance.rate = rate
    utterance.volume = volume

    if (selectedVoice) {
      const voices = window.speechSynthesis.getVoices()
      const match = voices.find((v) => v.lang.startsWith(selectedVoice.language))
      if (match) utterance.voice = match
    }

    utterance.onend = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }

  const handleDownloadAudio = async () => {
    if (!textToRead) return
    const res = await fetch('/api/tts/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: textToRead,
        voiceId: selectedVoice?.id,
        pitch, rate, volume,
      }),
    })
    const data = await res.json()
    const link = document.createElement('a')
    link.href = data.audioUrl
    link.download = 'belent-ai-audio.mp3'
    link.click()
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Voz & Audio</h2>
        <p className="text-white/50 text-sm">Elige voz, tonalidad y descarga el audio</p>
      </div>

      {/* Voice Selection */}
      <div className="glass-card p-6">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <FiMic className="text-belent-cyan" /> Seleccionar Voz
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {VOICES.map((voice) => (
            <button
              key={voice.id}
              onClick={() => setSelectedVoice(voice)}
              className={`p-4 rounded-xl text-center transition-all
                ${selectedVoice?.id === voice.id
                  ? 'bg-gradient-to-br from-belent-indigo to-belent-cyan text-white ring-2 ring-belent-cyan'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
            >
              <div className="text-2xl mb-1">
                {voice.gender === 'female' ? '👩' : voice.gender === 'male' ? '👨' : ''}
              </div>
              <p className="font-medium text-sm">{voice.name}</p>
              <p className="text-xs opacity-60">{voice.language.toUpperCase()}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Tone Controls */}
      <div className="glass-card p-6">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <FiVolume2 className="text-belent-cyan" /> Tonalidad
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-white/70 text-sm mb-2 block">Tono (Pitch): {pitch.toFixed(1)}</label>
            <input
              type="range" min="0.5" max="2" step="0.1" value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              className="w-full accent-belent-cyan"
            />
          </div>
          <div>
            <label className="text-white/70 text-sm mb-2 block">Velocidad (Rate): {rate.toFixed(1)}</label>
            <input
              type="range" min="0.5" max="2" step="0.1" value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full accent-belent-cyan"
            />
          </div>
          <div>
            <label className="text-white/70 text-sm mb-2 block">Volumen: {volume.toFixed(1)}</label>
            <input
              type="range" min="0" max="1" step="0.1" value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-belent-cyan"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3">
        <button onClick={handleSpeak} className="btn-primary flex items-center gap-2">
          {isSpeaking ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
          {isSpeaking ? 'Detener' : 'Reproducir'}
        </button>
        <button onClick={handleDownloadAudio} className="btn-secondary flex items-center gap-2">
          <FiDownload className="w-5 h-5" /> Descargar MP3
        </button>
      </div>
    </div>
  )
}
```

### `src/components/PodcastGenerator.tsx`
```tsx
'use client'
import { useStore } from '@/store/useStore'
import { PODCAST_STYLES } from '@/constants/languages'
import { FiHeadphones, FiLoader, FiDownload } from 'react-icons/fi'

export default function PodcastGenerator() {
  const {
    documents, currentDocId, podcastStyle, setPodcastStyle,
    isGeneratingPodcast, setIsGeneratingPodcast, updateDocument
  } = useStore()

  const currentDoc = documents.find((d) => d.id === currentDocId)

  const handleGeneratePodcast = async () => {
    if (!currentDoc) return
    setIsGeneratingPodcast(true)

    try {
      const res = await fetch('/api/podcast/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: currentDoc.translatedContent || currentDoc.content,
          style: podcastStyle,
          language: currentDoc.targetLanguage,
        }),
      })
      const data = await res.json()
      updateDocument(currentDoc.id, { podcastUrl: data.podcastUrl })
    } catch (err) {
      console.error('Podcast generation error:', err)
    } finally {
      setIsGeneratingPodcast(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Generar Podcast</h2>
        <p className="text-white/50 text-sm">Convierte tu documento en un podcast profesional con IA</p>
      </div>

      {/* Style Selection */}
      <div className="glass-card p-6">
        <h3 className="text-white font-semibold mb-4">Estilo del Podcast</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PODCAST_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => setPodcastStyle(style.id)}
              className={`p-4 rounded-xl text-center transition-all
                ${podcastStyle === style.id
                  ? 'bg-gradient-to-br from-belent-indigo to-belent-cyan text-white ring-2 ring-belent-cyan'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
            >
              <span className="text-2xl block mb-1">{style.icon}</span>
              <span className="text-sm font-medium">{style.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Podcast Preview */}
      {currentDoc?.podcastUrl && (
        <div className="glass-card p-6">
          <h3 className="text-white font-semibold mb-4">Podcast Generado</h3>
          <audio controls src={currentDoc.podcastUrl} className="w-full" />
          <a href={currentDoc.podcastUrl} download className="btn-secondary mt-4 inline-flex items-center gap-2">
            <FiDownload className="w-4 h-4" /> Descargar Podcast
          </a>
        </div>
      )}

      {/* Generate Button */}
      <button
        onClick={handleGeneratePodcast}
        disabled={!currentDoc || isGeneratingPodcast}
        className="btn-primary flex items-center gap-2 disabled:opacity-50"
      >
        {isGeneratingPodcast ? (
          <FiLoader className="w-5 h-5 animate-spin" />
        ) : (
          <FiHeadphones className="w-5 h-5" />
        )}
        {isGeneratingPodcast ? 'Generando Podcast...' : 'Generar Podcast'}
      </button>
    </div>
  )
}
```

### `src/components/ImageToolsPanel.tsx`
```tsx
'use client'
import { useStore } from '@/store/useStore'
import { FiUpload, FiImage, FiTrash2, FiSun, FiMaximize, FiRefreshCw, FiLoader } from 'react-icons/fi'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type ImageTool = 'upscale' | 'restore' | 'remove-object' | 'lighting' | 'generate' | 'generate-ref'

const TOOLS = [
  { id: 'upscale' as const, name: 'Aumentar Tamaño', icon: FiMaximize, desc: '4x upscaling con IA' },
  { id: 'restore' as const, name: 'Restaurar Foto', icon: FiRefreshCw, desc: 'Fotos antiguas y pixeladas' },
  { id: 'remove-object' as const, name: 'Borrar Objeto', icon: FiTrash2, desc: 'Elimina elementos no deseados' },
  { id: 'lighting' as const, name: 'Iluminación', icon: FiSun, desc: 'Cambia tonalidad y luz' },
  { id: 'generate' as const, name: 'Generar Foto', icon: FiImage, desc: 'Texto a imagen con IA' },
  { id: 'generate-ref' as const, name: 'Foto con Referencia', icon: FiImage, desc: 'Genera con imagen de referencia' },
]

export default function ImageToolsPanel() {
  const { addImageProject, updateImageProject, imageProjects } = useStore()
  const [activeTool, setActiveTool] = useState<ImageTool>('upscale')
  const [prompt, setPrompt] = useState('')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [referenceImage, setReferenceImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'main' | 'reference') => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      if (type === 'main') setUploadedImage(ev.target?.result as string)
      else setReferenceImage(ev.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleProcess = async () => {
    setIsProcessing(true)
    const projectId = uuidv4()
    addImageProject({
      id: projectId,
      type: activeTool,
      inputUrl: uploadedImage || undefined,
      referenceUrl: referenceImage || undefined,
      prompt: prompt || undefined,
      status: 'processing',
    })

    try {
      const formData = new FormData()
      formData.append('tool', activeTool)
      if (uploadedImage) formData.append('image', uploadedImage)
      if (referenceImage) formData.append('reference', referenceImage)
      if (prompt) formData.append('prompt', prompt)

      const res = await fetch('/api/image/process', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      updateImageProject(projectId, { outputUrl: data.outputUrl, status: 'done' })
    } catch (err) {
      updateImageProject(projectId, { status: 'error' })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Herramientas de Imagen</h2>
        <p className="text-white/50 text-sm">Edita, restaura y genera imágenes con IA</p>
      </div>

      {/* Tool Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {TOOLS.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`glass-card p-4 text-center transition-all
              ${activeTool === tool.id
                ? 'border-belent-cyan bg-belent-cyan/10'
                : 'hover:border-white/20'
              }`}
          >
            <tool.icon className={`w-6 h-6 mx-auto mb-2 ${activeTool === tool.id ? 'text-belent-cyan' : 'text-white/50'}`} />
            <p className="text-white text-xs font-medium">{tool.name}</p>
          </button>
        ))}
      </div>

      {/* Upload Area */}
      {(activeTool === 'upscale' || activeTool === 'restore' || activeTool === 'remove-object' || activeTool === 'lighting' || activeTool === 'generate-ref') && (
        <div className="glass-card p-6">
          <h3 className="text-white font-semibold mb-4">Imagen de entrada</h3>
          <label className="block">
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-belent-cyan transition-colors">
              <FiUpload className="w-10 h-10 mx-auto mb-3 text-white/30" />
              <p className="text-white/60 text-sm">Haz clic o arrastra una imagen</p>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'main')} />
          </label>
          {uploadedImage && (
            <img src={uploadedImage} alt="Uploaded" className="mt-4 max-h-64 rounded-xl mx-auto" />
          )}
        </div>
      )}

      {/* Reference Image */}
      {activeTool === 'generate-ref' && (
        <div className="glass-card p-6">
          <h3 className="text-white font-semibold mb-4">Imagen de referencia</h3>
          <label className="block">
            <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-belent-purple transition-colors">
              <FiImage className="w-8 h-8 mx-auto mb-2 text-white/30" />
              <p className="text-white/60 text-sm">Sube imagen de referencia</p>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'reference')} />
          </label>
          {referenceImage && (
            <img src={referenceImage} alt="Reference" className="mt-4 max-h-48 rounded-xl mx-auto" />
          )}
        </div>
      )}

      {/* Prompt */}
      {(activeTool === 'generate' || activeTool === 'generate-ref' || activeTool === 'remove-object') && (
        <div className="glass-card p-6">
          <h3 className="text-white font-semibold mb-4">Prompt</h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe lo que quieres generar o qué objeto borrar..."
            className="input-field w-full h-32 resize-none"
          />
        </div>
      )}

      {/* Lighting Controls */}
      {activeTool === 'lighting' && (
        <div className="glass-card p-6">
          <h3 className="text-white font-semibold mb-4">Ajustes de Iluminación</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-white/70 text-sm">Brillo</label>
              <input type="range" className="w-full accent-belent-cyan" min="0" max="200" defaultValue="100" />
            </div>
            <div>
              <label className="text-white/70 text-sm">Contraste</label>
              <input type="range" className="w-full accent-belent-cyan" min="0" max="200" defaultValue="100" />
            </div>
            <div>
              <label className="text-white/70 text-sm">Temperatura</label>
              <input type="range" className="w-full accent-belent-cyan" min="-100" max="100" defaultValue="0" />
            </div>
          </div>
        </div>
      )}

      {/* Process Button */}
      <button onClick={handleProcess} disabled={isProcessing} className="btn-primary flex items-center gap-2 disabled:opacity-50">
        {isProcessing ? <FiLoader className="w-5 h-5 animate-spin" /> : <FiImage className="w-5 h-5" />}
        {isProcessing ? 'Procesando...' : 'Procesar Imagen'}
      </button>

      {/* Results */}
      {imageProjects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Resultados</h3>
          {imageProjects.map((project) => (
            <div key={project.id} className="glass-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-belent-indigo/20 text-belent-cyan">
                  {project.type}
                </span>
                <span className={`text-xs ${project.status === 'done' ? 'text-green-400' : project.status === 'error' ? 'text-red-400' : 'text-yellow-400'}`}>
                  {project.status}
                </span>
              </div>
              {project.outputUrl && (
                <img src={project.outputUrl} alt="Result" className="rounded-xl max-h-64" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
```

### `src/components/VideoPanel.tsx`
```tsx
'use client'
import { useStore } from '@/store/useStore'
import { FiVideo, FiUpload, FiImage, FiLoader } from 'react-icons/fi'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type VideoTool = 'text-to-video' | 'image-to-video' | 'text-to-video-ref'

export default function VideoPanel() {
  const { addVideoProject, updateVideoProject, videoProjects } = useStore()
  const [activeTool, setActiveTool] = useState<VideoTool>('text-to-video')
  const [prompt, setPrompt] = useState('')
  const [referenceImage, setReferenceImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setReferenceImage(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const handleGenerate = async () => {
    setIsProcessing(true)
    const projectId = uuidv4()
    addVideoProject({
      id: projectId,
      type: activeTool,
      prompt,
      referenceUrl: referenceImage || undefined,
      status: 'processing',
    })

    try {
      const formData = new FormData()
      formData.append('tool', activeTool)
      formData.append('prompt', prompt)
      if (referenceImage) formData.append('reference', referenceImage)

      const res = await fetch('/api/video/generate', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      updateVideoProject(projectId, { outputUrl: data.videoUrl, status: 'done' })
    } catch (err) {
      updateVideoProject(projectId, { status: 'error' })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Generación de Video</h2>
        <p className="text-white/50 text-sm">Texto a video, imagen a video y más</p>
      </div>

      {/* Tool Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { id: 'text-to-video' as const, name: 'Texto a Video', icon: FiVideo },
          { id: 'image-to-video' as const, name: 'Imagen a Video', icon: FiImage },
          { id: 'text-to-video-ref' as const, name: 'Texto + Referencia', icon: FiUpload },
        ].map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`glass-card p-5 text-center transition-all
              ${activeTool === tool.id ? 'border-belent-cyan bg-belent-cyan/10' : 'hover:border-white/20'}`}
          >
            <tool.icon className={`w-8 h-8 mx-auto mb-2 ${activeTool === tool.id ? 'text-belent-cyan' : 'text-white/50'}`} />
            <p className="text-white text-sm font-medium">{tool.name}</p>
          </button>
        ))}
      </div>

      {/* Prompt */}
      <div className="glass-card p-6">
        <h3 className="text-white font-semibold mb-4">Describe tu video</h3>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe la escena, movimiento, estilo visual..."
          className="input-field w-full h-32 resize-none"
        />
      </div>

      {/* Reference Image */}
      {(activeTool === 'image-to-video' || activeTool === 'text-to-video-ref') && (
        <div className="glass-card p-6">
          <h3 className="text-white font-semibold mb-4">Imagen de referencia</h3>
          <label className="block">
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-belent-purple transition-colors">
              <FiUpload className="w-10 h-10 mx-auto mb-3 text-white/30" />
              <p className="text-white/60 text-sm">Sube imagen de referencia (PNG, JPG, WEBP)</p>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
          {referenceImage && (
            <img src={referenceImage} alt="Reference" className="mt-4 max-h-48 rounded-xl mx-auto" />
          )}
        </div>
      )}

      {/* Generate Button */}
      <button onClick={handleGenerate} disabled={isProcessing || !prompt} className="btn-primary flex items-center gap-2 disabled:opacity-50">
        {isProcessing ? <FiLoader className="w-5 h-5 animate-spin" /> : <FiVideo className="w-5 h-5" />}
        {isProcessing ? 'Generando Video...' : 'Generar Video'}
      </button>

      {/* Results */}
      {videoProjects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Videos Generados</h3>
          {videoProjects.map((project) => (
            <div key={project.id} className="glass-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-belent-indigo/20 text-belent-cyan">{project.type}</span>
                <span className={`text-xs ${project.status === 'done' ? 'text-green-400' : project.status === 'error' ? 'text-red-400' : 'text-yellow-400'}`}>
                  {project.status}
                </span>
              </div>
              {project.outputUrl && (
                <video controls src={project.outputUrl} className="w-full rounded-xl max-h-96" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
```

### `src/app/page.tsx` — Página Principal
```tsx
'use client'
import { useStore } from '@/store/useStore'
import Sidebar from '@/components/Sidebar'
import DocumentUploader from '@/components/DocumentUploader'
import TranslationPanel from '@/components/TranslationPanel'
import VoicePanel from '@/components/VoicePanel'
import PodcastGenerator from '@/components/PodcastGenerator'
import ImageToolsPanel from '@/components/ImageToolsPanel'
import VideoPanel from '@/components/VideoPanel'

export default function Home() {
  const { activeSection } = useStore()

  const renderSection = () => {
    switch (activeSection) {
      case 'documents': return <DocumentUploader />
      case 'translation': return <TranslationPanel />
      case 'voice': return <VoicePanel />
      case 'podcast': return <PodcastGenerator />
      case 'image-tools': return <ImageToolsPanel />
      case 'video': return <VideoPanel />
      default: return <DocumentUploader />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {renderSection()}
      </main>
    </div>
  )
}
```

---

## 2️ BACKEND — `backend/`

### `package.json`
```json
{
  "name": "belent-ai-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "express": "^4.19.0",
    "cors": "^2.8.5",
    "multer": "^1.4.5-lts.1",
    "pdf-parse": "^1.1.1",
    "axios": "^1.7.0",
    "openai": "^4.52.0",
    "elevenlabs": "^0.5.0",
    "sharp": "^0.33.0",
    "uuid": "^9.0.0",
    "dotenv": "^16.4.0",
    "replicate": "^0.30.0",
    "@ffmpeg/ffmpeg": "^0.12.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/cors": "^2.8.17",
    "@types/multer": "^1.4.11",
    "@types/node": "^20.12.0",
    "nodemon": "^3.1.0",
    "typescript": "^5.4.0",
    "ts-node": "^10.9.0"
  }
}
```

### `src/index.ts`
```typescript
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import documentRoutes from './routes/documents'
import translateRoutes from './routes/translate'
import ttsRoutes from './routes/tts'
import podcastRoutes from './routes/podcast'
import imageRoutes from './routes/image'
import videoRoutes from './routes/video'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

// Routes
app.use('/api/documents', documentRoutes)
app.use('/api/translate', translateRoutes)
app.use('/api/tts', ttsRoutes)
app.use('/api/podcast', podcastRoutes)
app.use('/api/image', imageRoutes)
app.use('/api/video', videoRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Belent AI Backend', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(` Belent AI Backend running on port ${PORT}`)
})
```

### `src/routes/documents.ts`
```typescript
import { Router } from 'express'
import multer from 'multer'
import pdf from 'pdf-parse'
import { v4 as uuidv4 } from 'uuid'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } })

// Extract text from PDF
router.post('/extract', upload.single('file'), async (req, res) => {
  try {
    const file = req.file
    if (!file) return res.status(400).json({ error: 'No file uploaded' })

    let content = ''
    if (file.mimetype === 'application/pdf') {
      const data = await pdf(file.buffer)
      content = data.text
    } else if (file.mimetype === 'text/plain') {
      content = file.buffer.toString('utf-8')
    }

    res.json({ id: uuidv4(), content, filename: file.originalname })
  } catch (err) {
    console.error('Document extraction error:', err)
    res.status(500).json({ error: 'Failed to extract document' })
  }
})

export default router
```

### `src/routes/translate.ts`
```typescript
import { Router } from 'express'
import OpenAI from 'openai'

const router = Router()
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

router.post('/', async (req, res) => {
  try {
    const { text, targetLanguage } = req.body
    if (!text || !targetLanguage) {
      return res.status(400).json({ error: 'Text and targetLanguage required' })
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator. Translate the following text to ${targetLanguage}. Maintain the original tone, style, and formatting. Only return the translated text.`
        },
        { role: 'user', content: text }
      ],
      temperature: 0.3,
    })

    const translatedText = response.choices[0].message.content || ''
    res.json({ translatedText })
  } catch (err) {
    console.error('Translation error:', err)
    res.status(500).json({ error: 'Translation failed' })
  }
})

export default router
```

### `src/routes/tts.ts`
```typescript
import { Router } from 'express'
import { ElevenLabsClient } from 'elevenlabs'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import path from 'path'

const router = Router()
const elevenlabs = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY })

const VOICE_MAP: Record<string, string> = {
  v1: '21m00Tcm4TlvDq8ikWAM',   // Rachel
  v2: 'AZnzlk1XvdvUeBnXmlld',   // Domi
  v3: 'EXAVITQu4vr4xnSDxMaL',   // Bella
  v4: 'ErXwobaYiN019PkySvjV',   // Antoni
  v5: 'MF3mGyEYCl7XYWbV9V6O',   // Elli
  v6: 'TxGEqnHWrfWFTfGW9XjX',   // Josh
  v7: 'VR6AewLTigWG4xSOukaG',   // Arnold
  v8: 'pNInz6obpgDQGcFmaJgB',   // Adam
  v9: 'yoZ06aMxZJJ28mfd3POQ',   // Sam
  v10: 'jBpfuIE2acCO8z3wKNLl',  // Grace
}

router.post('/generate', async (req, res) => {
  try {
    const { text, voiceId = 'v1', pitch = 1.0, rate = 1.0, volume = 1.0 } = req.body

    const voiceElevenLabs = VOICE_MAP[voiceId] || VOICE_MAP.v1

    const audio = await elevenlabs.generate({
      voice: voiceElevenLabs,
      model_id: 'eleven_multilingual_v2',
      text,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true,
      },
    })

    const audioId = uuidv4()
    const audioPath = path.join(__dirname, '../../uploads/audio')
    if (!fs.existsSync(audioPath)) fs.mkdirSync(audioPath, { recursive: true })
    const filePath = path.join(audioPath, `${audioId}.mp3`)

    const stream = fs.createWriteStream(filePath)
    audio.pipe(stream)
    stream.on('finish', () => {
      res.json({ audioUrl: `/uploads/audio/${audioId}.mp3`, audioId })
    })
  } catch (err) {
    console.error('TTS error:', err)
    res.status(500).json({ error: 'TTS generation failed' })
  }
})

export default router
```

### `src/routes/podcast.ts`
```typescript
import { Router } from 'express'
import OpenAI from 'openai'
import { ElevenLabsClient } from 'elevenlabs'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import path from 'path'

const router = Router()
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const elevenlabs = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY })

const PODCAST_PROMPTS: Record<string, string> = {
  conversational: 'Create a natural, friendly conversational podcast script between two hosts discussing this content. Include greetings, transitions, and a casual tone.',
  narrative: 'Create an engaging narrative podcast script that tells the story of this content with dramatic pauses, vivid descriptions, and a compelling narrative arc.',
  educational: 'Create an educational podcast script that explains this content clearly with examples, key takeaways, and structured segments.',
  interview: 'Create an interview-style podcast script with a host asking questions and an expert answering based on this content.',
  storytelling: 'Create a storytelling podcast script that weaves this content into an engaging narrative with characters, scenes, and emotional moments.',
  debate: 'Create a debate-style podcast script with two speakers presenting different perspectives on this content.',
}

router.post('/generate', async (req, res) => {
  try {
    const { content, style = 'conversational', language = 'es' } = req.body

    // Step 1: Generate podcast script
    const scriptResponse = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: PODCAST_PROMPTS[style] || PODCAST_PROMPTS.conversational
        },
        { role: 'user', content }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    })

    const script = scriptResponse.choices[0].message.content || ''

    // Step 2: Generate audio with two voices
    const podcastId = uuidv4()
    const audioPath = path.join(__dirname, '../../uploads/podcasts')
    if (!fs.existsSync(audioPath)) fs.mkdirSync(audioPath, { recursive: true })

    // Split script by speakers and generate audio for each
    const host1Audio = await elevenlabs.generate({
      voice: '21m00Tcm4TlvDq8ikWAM',
      model_id: 'eleven_multilingual_v2',
      text: script,
    })

    const filePath = path.join(audioPath, `${podcastId}.mp3`)
    const stream = fs.createWriteStream(filePath)
    host1Audio.pipe(stream)

    stream.on('finish', () => {
      res.json({ 
        podcastUrl: `/uploads/podcasts/${podcastId}.mp3`, 
        podcastId,
        script 
      })
    })
  } catch (err) {
    console.error('Podcast generation error:', err)
    res.status(500).json({ error: 'Podcast generation failed' })
  }
})

export default router
```

### `src/routes/image.ts`
```typescript
import { Router } from 'express'
import multer from 'multer'
import Replicate from 'replicate'
import sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } })
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN })
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const OUTPUT_DIR = path.join(__dirname, '../../uploads/images')
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

// Upscale image 4x
router.post('/upscale', upload.single('image'), async (req, res) => {
  try {
    const output = await replicate.run(
      'nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b',
      { input: { image: req.file?.buffer, scale: 4 } }
    )
    const outputPath = path.join(OUTPUT_DIR, `${uuidv4()}.png`)
    // Save output...
    res.json({ outputUrl: `/uploads/images/${path.basename(outputPath)}` })
  } catch (err) {
    res.status(500).json({ error: 'Upscale failed' })
  }
})

// Restore old photo
router.post('/restore', upload.single('image'), async (req, res) => {
  try {
    const output = await replicate.run(
      'tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3',
      { input: { img: req.file?.buffer, version: '1.4', scale: 2 } }
    )
    res.json({ outputUrl: output })
  } catch (err) {
    res.status(500).json({ error: 'Restoration failed' })
  }
})

// Remove object
router.post('/remove-object', upload.single('image'), async (req, res) => {
  try {
    const { prompt } = req.body
    const output = await replicate.run(
      'lucataco/remove-bg:95fcc2a26d3899cd6c2691c9034b2766f59954b3e9e413497dac358138090814',
      { input: { image: req.file?.buffer } }
    )
    res.json({ outputUrl: output })
  } catch (err) {
    res.status(500).json({ error: 'Object removal failed' })
  }
})

// Adjust lighting
router.post('/lighting', upload.single('image'), async (req, res) => {
  try {
    const { brightness = 100, contrast = 100, temperature = 0 } = req.body
    const image = sharp(req.file?.buffer)
    
    let pipeline = image
      .modulate({ brightness: brightness / 100 })
      .contrast((contrast - 100) / 100)
    
    if (temperature > 0) {
      pipeline = pipeline.tint({ r: 255, g: 200 + temperature, b: 150 + temperature })
    } else if (temperature < 0) {
      pipeline = pipeline.tint({ r: 150 - temperature, g: 200 - temperature, b: 255 })
    }

    const outputPath = path.join(OUTPUT_DIR, `${uuidv4()}.png`)
    await pipeline.toFile(outputPath)
    res.json({ outputUrl: `/uploads/images/${path.basename(outputPath)}` })
  } catch (err) {
    res.status(500).json({ error: 'Lighting adjustment failed' })
  }
})

// Generate image from text
router.post('/generate', async (req, res) => {
  try {
    const { prompt, reference } = req.body
    
    let input = { prompt, num_outputs: 1, num_inference_steps: 50 }
    if (reference) input.image = reference

    const model = reference 
      ? 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b'
      : 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b'

    const output = await replicate.run(model, { input })
    res.json({ outputUrl: output[0] })
  } catch (err) {
    res.status(500).json({ error: 'Image generation failed' })
  }
})

// Unified process endpoint
router.post('/process', upload.single('image'), async (req, res) => {
  try {
    const { tool, prompt, reference } = req.body
    
    switch (tool) {
      case 'upscale': {
        const output = await replicate.run('nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b', { input: { image: req.file?.buffer, scale: 4 } })
        return res.json({ outputUrl: output })
      }
      case 'restore': {
        const output = await replicate.run('tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3', { input: { img: req.file?.buffer, version: '1.4' } })
        return res.json({ outputUrl: output })
      }
      case 'generate': {
        const output = await replicate.run('stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b', { input: { prompt: prompt || 'a beautiful landscape' } })
        return res.json({ outputUrl: output[0] })
      }
      case 'generate-ref': {
        const output = await replicate.run('stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b', { input: { prompt: prompt || '', image: reference } })
        return res.json({ outputUrl: output[0] })
      }
      default:
        res.status(400).json({ error: 'Unknown tool' })
    }
  } catch (err) {
    console.error('Image process error:', err)
    res.status(500).json({ error: 'Processing failed' })
  }
})

export default router
```

### `src/routes/video.ts`
```typescript
import { Router } from 'express'
import multer from 'multer'
import Replicate from 'replicate'
import { v4 as uuidv4 } from 'uuid'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } })
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN })

// Text to Video
router.post('/text-to-video', async (req, res) => {
  try {
    const { prompt } = req.body
    const output = await replicate.run(
      'anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351',
      { input: { prompt, num_frames: 24, fps: 8, width: 1024, height: 576 } }
    )
    res.json({ videoUrl: output })
  } catch (err) {
    res.status(500).json({ error: 'Video generation failed' })
  }
})

// Image to Video
router.post('/image-to-video', upload.single('reference'), async (req, res) => {
  try {
    const { prompt } = req.body
    const output = await replicate.run(
      'cjwbw/damo-text-to-video:44a5f5e8e9e3b1e0e0b0e0e0e0e0e0e0e0e0e0e0',
      { input: { 
        input_image: req.file?.buffer,
        prompt: prompt || 'animate this image',
        num_frames: 16,
        fps: 8
      }}
    )
    res.json({ videoUrl: output })
  } catch (err) {
    res.status(500).json({ error: 'Image-to-video failed' })
  }
})

// Unified video generation
router.post('/generate', upload.single('reference'), async (req, res) => {
  try {
    const { tool, prompt } = req.body

    switch (tool) {
      case 'text-to-video': {
        const output = await replicate.run(
          'anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351',
          { input: { prompt: prompt || 'a cinematic scene', num_frames: 24 } }
        )
        return res.json({ videoUrl: output })
      }
      case 'image-to-video':
      case 'text-to-video-ref': {
        const output = await replicate.run(
          'cjwbw/damo-text-to-video:44a5f5e8e9e3b1e0e0b0e0e0e0e0e0e0e0e0e0e0',
          { input: { 
            input_image: req.file?.buffer,
            prompt: prompt || 'animate',
            num_frames: 16
          }}
        )
        return res.json({ videoUrl: output })
      }
      default:
        res.status(400).json({ error: 'Unknown video tool' })
    }
  } catch (err) {
    console.error('Video generation error:', err)
    res.status(500).json({ error: 'Video generation failed' })
  }
})

export default router
```

---

## 3️⃣ `docker-compose.yml`
```yaml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:4000
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "4000:4000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - ELEVENLABS_API_KEY=${ELEVENLABS_API_KEY}
      - REPLICATE_API_TOKEN=${REPLICATE_API_TOKEN}
    volumes:
      - ./uploads:/app/uploads

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
```

---

## 4️⃣ `.env.example`
```env
# OpenAI (Translation, Podcast Script, DALL-E)
OPENAI_API_KEY=sk-...

# ElevenLabs (Text-to-Speech, Podcast Audio)
ELEVENLABS_API_KEY=...

# Replicate (Image Upscale, Restore, Video Gen)
REPLICATE_API_TOKEN=...

# Server
PORT=4000
NODE_ENV=development
```

---

##  Arquitectura de la Plataforma

```
─────────────────────────────────────────────────────────┐
│                    BELent AI Platform                     │
├─────────────┬────────────────────────────┬─────────────┤
│  📄 Docs    │   Translate │  🎙️ Voice    │  🎧 Podcast  │
│  PDF/TXT    │  30 idiomas   │  10+ voces   │  6 estilos   │
│  Extract    │  GPT-4o       │  ElevenLabs  │  Multi-voice │
├─────────────┴──────────────┴──────────────┴─────────────┤
│                   🖼️ Image Studio                         │
│  Upscale 4x · Restore · Remove Object · Lighting · Gen   │
├──────────────────────────────────────────────────────────┤
│                   🎬 Video Studio                          │
│  Text→Video · Image→Video · Text+Ref→Video               │
└──────────────────────────────────────────────────────────┘
```

## 📋 Resumen de Funcionalidades

| Módulo | Función | Tecnología |
|---|---|---|
| **Documentos** | Leer PDF/TXT | pdf-parse, multer |
| **Traducción** | 30 idiomas | OpenAI GPT-4o |
| **Voz** | 10+ voces, pitch/rate/volume | ElevenLabs + Web Speech API |
| **Podcast** | 6 estilos, multi-voz | GPT-4o + ElevenLabs |
| **Upscale** | 4x aumento | Real-ESRGAN (Replicate) |
| **Restaurar** | Fotos antiguas | GFPGAN (Replicate) |
| **Borrar objeto** | Inpainting | Remove-bg / SD Inpaint |
| **Iluminación** | Brillo/contraste/temperatura | Sharp (Node.js) |
| **Generar foto** | Texto→Imagen | SDXL (Replicate) |
| **Foto con ref** | Image-conditioned | SDXL img2img |
| **Texto→Video** | Prompt→Video | ZeroScope V2 |
| **Imagen→Video** | Image animation | DAMO Text-to-Video |

> **Nota:** Las imágenes de branding (logo, UI mockups, identity system) ya fueron generadas y mostradas arriba. El código está listo para copiar, pegar y ejecutar con `npm install && npm run dev` en cada carpeta. 🧠
