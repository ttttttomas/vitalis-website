# Componente de Firma Digital - SignatureCanvas

## Descripción

Componente Next.js que implementa un canvas para firmas digitales con funcionalidad de dibujo y exportación a formato de imagen.

## Archivos Creados

1. **`src/components/SignatureCanvas.tsx`** - Componente principal de firma digital
2. **`src/app/signature-example/page.tsx`** - Página de ejemplo de uso

## Características

### Funcionalidades del Componente

- ✅ **Dibujo en Canvas**: Soporte para mouse y touch (dispositivos móviles)
- ✅ **Limpieza de Firma**: Botón para borrar y empezar de nuevo
- ✅ **Exportación a PNG/JPG**: Conversión de la firma a formato de imagen
- ✅ **Exportación como Data URL**: Para envío directo a APIs
- ✅ **Exportación como Blob**: Para envío como FormData
- ✅ **Descarga Local**: Permite descargar la firma como archivo
- ✅ **Personalización**: Colores, tamaños y estilos configurables
- ✅ **Validación**: Detecta si la firma está vacía

### Props del Componente

```tsx
interface SignatureCanvasProps {
  width?: number;              // Ancho del canvas (default: 500)
  height?: number;             // Alto del canvas (default: 300)
  strokeWidth?: number;        // Grosor del trazo (default: 2)
  strokeColor?: string;        // Color del trazo (default: '#000000')
  backgroundColor?: string;    // Color de fondo (default: '#ffffff')
  className?: string;          // Clases CSS adicionales
  onSignatureChange?: (isEmpty: boolean) => void; // Callback cuando cambia la firma
}
```

## Uso Básico

### Opción 1: Componente Directo

```tsx
import SignatureCanvas from '@/components/SignatureCanvas';

export default function MyPage() {
  return (
    <SignatureCanvas
      width={600}
      height={300}
      strokeWidth={2}
      strokeColor="#000000"
      backgroundColor="#ffffff"
    />
  );
}
```

### Opción 2: Con Hook Personalizado (Recomendado)

```tsx
'use client';

import SignatureCanvas, { useSignatureCanvas } from '@/components/SignatureCanvas';

export default function MyPage() {
  const {
    canvasRef,
    clear,
    exportAsImage,
    exportAsBlob,
    isEmpty
  } = useSignatureCanvas();

  const handleSave = async () => {
    if (isEmpty()) {
      alert('La firma está vacía');
      return;
    }

    // Obtener como data URL
    const imageData = exportAsImage('png');
    console.log(imageData);

    // O como blob para enviar a API
    const blob = await exportAsBlob('png');
    // ... enviar blob a API
  };

  return (
    <div>
      <SignatureCanvas ref={canvasRef} />
      <button onClick={clear}>Limpiar</button>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}
```

## Integración con API Externa

### Ejemplo con FormData

```tsx
const handleSendToAPI = async () => {
  // Exportar como blob
  const blob = await exportAsBlob('png');

  if (!blob) {
    console.error('Error al exportar la firma');
    return;
  }

  // Crear FormData
  const formData = new FormData();
  formData.append('signature', blob, 'firma.png');
  formData.append('userId', '123'); // Otros campos si es necesario

  // Enviar a API
  try {
    const response = await fetch('https://tu-api.com/upload-signature', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer tu-token', // Si es necesario
      },
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Firma enviada exitosamente:', result);
    }
  } catch (error) {
    console.error('Error al enviar:', error);
  }
};
```

### Ejemplo con Base64

```tsx
const handleSendAsBase64 = async () => {
  // Exportar como data URL
  const dataUrl = exportAsImage('png');

  // Extraer solo la parte base64 (sin el prefijo "data:image/png;base64,")
  const base64 = dataUrl.split(',')[1];

  // Enviar como JSON
  try {
    const response = await fetch('https://tu-api.com/save-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        signature: base64,
        format: 'png',
      }),
    });

    const result = await response.json();
    console.log('Respuesta:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Métodos Disponibles (con useSignatureCanvas)

| Método | Descripción | Retorno |
|--------|-------------|---------|
| `clear()` | Limpia el canvas | `void` |
| `exportAsImage(format, quality)` | Exporta como data URL | `string` |
| `exportAsBlob(format, quality)` | Exporta como Blob | `Promise<Blob \| null>` |
| `downloadSignature(filename, format)` | Descarga el archivo | `void` |
| `isEmpty()` | Verifica si está vacío | `boolean` |

## Página de Ejemplo

Visita `/signature-example` en tu aplicación para ver una demostración completa del componente con todas sus funcionalidades.

## Personalización Avanzada

```tsx
<SignatureCanvas
  width={800}
  height={400}
  strokeWidth={3}
  strokeColor="#1e40af"
  backgroundColor="#f3f4f6"
  className="shadow-lg"
  onSignatureChange={(isEmpty) => {
    console.log('Firma vacía:', isEmpty);
  }}
/>
```

## Notas Técnicas

- El componente usa `'use client'` para renderizado en el cliente (necesario para canvas)
- Compatible con dispositivos táctiles y mouse
- Los trazos son suavizados con `lineCap: 'round'` y `lineJoin: 'round'`
- El canvas mantiene la proporción correcta en diferentes resoluciones
- La exportación usa el método nativo `toDataURL` y `toBlob` del canvas

## Soporte de Formatos

- **PNG**: Transparencia, mejor calidad
- **JPG**: Menor tamaño de archivo, sin transparencia

## Compatibilidad

- Next.js 14+
- React 18+
- Navegadores modernos con soporte de Canvas API
- Dispositivos móviles con soporte táctil
