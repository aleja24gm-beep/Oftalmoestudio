import React, { useState, useEffect } from 'react';
import { 
  Key, 
  Eye, 
  EyeOff, 
  Save, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Sparkles, 
  X, 
  Trash2,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';
import { getStoredApiKey, setStoredApiKey } from '../services/geminiService';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeySaved?: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onKeySaved }) => {
  const [apiKey, setApiKey] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [hasServerKey, setHasServerKey] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const stored = getStoredApiKey();
      setApiKey(stored);
      setTestResult(null);
      setSaveSuccess(false);

      // Check server key status
      fetch('/api/gemini/key-status')
        .then((r) => r.json())
        .then((data) => setHasServerKey(Boolean(data?.hasServerKey)))
        .catch(() => setHasServerKey(false));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    const trimmed = apiKey.trim();
    setStoredApiKey(trimmed);
    setSaveSuccess(true);
    setTestResult(null);
    if (onKeySaved) onKeySaved();
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleClear = () => {
    setStoredApiKey('');
    setApiKey('');
    setTestResult(null);
    setSaveSuccess(false);
    if (onKeySaved) onKeySaved();
  };

  const handleTestKey = async () => {
    const keyToTest = apiKey.trim();
    if (!keyToTest) {
      setTestResult({
        success: false,
        message: 'Por favor ingresa una API Key antes de probar la conexión.'
      });
      return;
    }

    setIsTesting(true);
    setTestResult(null);

    try {
      // 1. Try local server endpoint if available
      let backendTested = false;
      try {
        const res = await fetch('/api/gemini/test-key', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'x-gemini-api-key': keyToTest
          },
          body: JSON.stringify({ apiKey: keyToTest })
        });

        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const data = await res.json();
          backendTested = true;
          if (res.ok && data.success) {
            setTestResult({
              success: true,
              message: '¡Conexión exitosa! La API de Gemini está lista y respondiendo correctamente.'
            });
            setStoredApiKey(keyToTest);
            if (onKeySaved) onKeySaved();
            return;
          } else {
            setTestResult({
              success: false,
              message: data.error || 'No se pudo verificar la API Key. Comprueba que sea válida en aistudio.google.com.'
            });
            return;
          }
        }
      } catch {
        // Backend not available (static host like GitHub Pages or Vercel static)
        backendTested = false;
      }

      // 2. Direct client-side test against Google Gemini API (ideal for GitHub Pages / Vercel SPA)
      if (!backendTested) {
        const googleRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(keyToTest)}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: 'Responde únicamente OK.' }] }]
            })
          }
        );

        const googleData = await googleRes.json();
        if (googleRes.ok && googleData?.candidates?.[0]?.content) {
          setTestResult({
            success: true,
            message: '¡Conexión exitosa con Google Gemini! Clave verificada y lista para usarse.'
          });
          setStoredApiKey(keyToTest);
          if (onKeySaved) onKeySaved();
        } else {
          const errMsg = googleData?.error?.message || 'Clave API no válida o sin permisos. Verifica tu clave en aistudio.google.com.';
          setTestResult({
            success: false,
            message: errMsg
          });
        }
      }
    } catch (err: any) {
      setTestResult({
        success: false,
        message: 'Error de red al conectar con Google Gemini. Revisa tu conexión a internet.'
      });
    } finally {
      setIsTesting(false);
    }
  };

  const isConfigured = Boolean(apiKey.trim().length > 10);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-teal-700 via-cyan-800 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 text-amber-300">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold">Configuración de Gemini API</h2>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  Google AI
                </span>
              </div>
              <p className="text-xs text-teal-100/80">
                Conecta tu clave para consultas avanzadas con modelos Gemini
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[80vh]">
          {/* Status Badge */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="text-slate-600 font-medium">Estado de la conexión:</span>
            {isConfigured ? (
              <span className="inline-flex items-center space-x-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Clave guardada en tu navegador</span>
              </span>
            ) : hasServerKey ? (
              <span className="inline-flex items-center space-x-1.5 text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <span>Usando clave predeterminada del servidor</span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1.5 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Motor clínico integrado activo</span>
              </span>
            )}
          </div>

          {/* Secure Input Field */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
              Gemini API Key (Google AI Studio)
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Pega aquí tu clave: AIzaSy..."
                className="w-full pl-3.5 pr-20 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all font-mono placeholder:text-slate-400 text-slate-900"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                  title={showPassword ? 'Ocultar clave' : 'Mostrar clave'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                {apiKey && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Borrar clave"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>La clave se guarda únicamente en tu navegador (LocalStorage) de forma privada.</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 min-w-[180px] inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Guardar la clave en el navegador</span>
            </button>

            <button
              type="button"
              onClick={handleTestKey}
              disabled={isTesting || !apiKey.trim()}
              className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-4 h-4 ${isTesting ? 'animate-spin text-teal-600' : ''}`} />
              <span>{isTesting ? 'Probando...' : 'Probar conexión'}</span>
            </button>
          </div>

          {/* Save Success Alert */}
          {saveSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Clave API guardada correctamente en el almacenamiento local de tu navegador.</span>
            </div>
          )}

          {/* Test Result Alert */}
          {testResult && (
            <div className={`p-3 rounded-xl text-xs flex items-start space-x-2 border animate-in fade-in duration-200 ${
              testResult.success 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}>
              {testResult.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span className="leading-relaxed">{testResult.message}</span>
            </div>
          )}

          {/* Help Box with Step-by-Step Instructions */}
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                  ¿Cómo obtener tu API Key gratuita de Gemini?
                </h4>
              </div>
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center space-x-1 hover:underline"
              >
                <span>Abrir Google AI Studio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <ol className="text-xs text-slate-700 space-y-2.5 list-none pl-0">
              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div className="leading-relaxed">
                  Entrar a{' '}
                  <a 
                    href="https://aistudio.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-teal-800 font-bold underline hover:text-teal-950 inline-flex items-center space-x-0.5"
                  >
                    <span>aistudio.google.com</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5 inline" />
                  </a>.
                </div>
              </li>

              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div className="leading-relaxed">
                  Iniciar sesión con tu cuenta de <strong>Google</strong>.
                </div>
              </li>

              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div className="leading-relaxed">
                  Hacer clic en la opción <strong>Get API key</strong> en el menú lateral o superior.
                </div>
              </li>

              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  4
                </span>
                <div className="leading-relaxed">
                  Presionar <strong>Create API key</strong> y copiar el código generado.
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={() => {
              handleSave();
              onClose();
            }}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors shadow-xs"
          >
            Guardar y Listo
          </button>
        </div>
      </div>
    </div>
  );
};
