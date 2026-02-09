'use client';

import { useRef, useState, useEffect, MouseEvent, TouchEvent } from 'react';

interface SignatureCanvasProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  backgroundColor?: string;
  className?: string;
  onSignatureChange?: (isEmpty: boolean) => void;
}

export default function SignatureCanvas({
  width = 500,
  height = 300,
  strokeWidth = 2,
  strokeColor = '#000000',
  backgroundColor = '#ffffff',
  className = '',
  onSignatureChange,
}: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }, [width, height, backgroundColor]);

  const getCoordinates = (
    event: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>
  ): { x: number; y: number } | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in event) {
      // Touch event
      const touch = event.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    } else {
      // Mouse event
      return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY,
      };
    }
  };

  const startDrawing = (
    event: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>
  ) => {
    event.preventDefault();
    const coords = getCoordinates(event);
    if (!coords) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    setIsDrawing(true);
  };

  const draw = (
    event: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>
  ) => {
    event.preventDefault();
    if (!isDrawing) return;

    const coords = getCoordinates(event);
    if (!coords) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(coords.x, coords.y);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    if (isEmpty) {
      setIsEmpty(false);
      onSignatureChange?.(false);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    setIsEmpty(true);
    onSignatureChange?.(true);
  };

  const exportAsImage = (format: 'png' | 'jpg' = 'png', quality = 0.92): string => {
    const canvas = canvasRef.current;
    if (!canvas) return '';

    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
    return canvas.toDataURL(mimeType, quality);
  };

  const exportAsBlob = async (
    format: 'png' | 'jpg' = 'png',
    quality = 0.92
  ): Promise<Blob | null> => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), mimeType, quality);
    });
  };

  const downloadSignature = (filename = 'firma', format: 'png' | 'jpg' = 'png') => {
    const dataUrl = exportAsImage(format);
    const link = document.createElement('a');
    link.download = `${filename}.${format}`;
    link.href = dataUrl;
    link.click();
  };

  // Expose methods via ref
  useEffect(() => {
    if (canvasRef.current) {
      (canvasRef.current as any).clear = clearCanvas;
      (canvasRef.current as any).exportAsImage = exportAsImage;
      (canvasRef.current as any).exportAsBlob = exportAsBlob;
      (canvasRef.current as any).downloadSignature = downloadSignature;
      (canvasRef.current as any).isEmpty = () => isEmpty;
    }
  }, [isEmpty]);

  return (
    <div className={`inline-block ${className}`}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="touch-none cursor-crosshair border border-gray-300 rounded-lg"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <div className="mt-4 flex gap-2">
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Limpiar
        </button>
        <button
          onClick={() => downloadSignature()}
          disabled={isEmpty}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Descargar
        </button>
      </div>
    </div>
  );
}

// Hook personalizado para usar el componente
export function useSignatureCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const clear = () => {
    (canvasRef.current as any)?.clear?.();
  };

  const exportAsImage = (format: 'png' | 'jpg' = 'png', quality = 0.92): string => {
    return (canvasRef.current as any)?.exportAsImage?.(format, quality) || '';
  };

  const exportAsBlob = async (
    format: 'png' | 'jpg' = 'png',
    quality = 0.92
  ): Promise<Blob | null> => {
    return (canvasRef.current as any)?.exportAsBlob?.(format, quality) || null;
  };

  const downloadSignature = (filename = 'firma', format: 'png' | 'jpg' = 'png') => {
    (canvasRef.current as any)?.downloadSignature?.(filename, format);
  };

  const isEmpty = (): boolean => {
    return (canvasRef.current as any)?.isEmpty?.() ?? true;
  };

  return {
    canvasRef,
    clear,
    exportAsImage,
    exportAsBlob,
    downloadSignature,
    isEmpty,
  };
}
