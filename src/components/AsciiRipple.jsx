import React, { useEffect, useRef } from 'react';

const AsciiRipple = ({ 
  columns = 80, 
  rows = 40, 
  chars = ' .:-=+*#%@', 
  color = '#90CAF9',
  backgroundColor = '#000000'
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const cellW = width / columns;
    const cellH = height / rows;

    let b1 = new Float32Array(columns * rows);
    let b2 = new Float32Array(columns * rows);

    const handleInteraction = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const currentCellW = width / columns;
      const currentCellH = height / rows;

      const gridX = Math.floor(x / currentCellW);
      const gridY = Math.floor(y / currentCellH);

      // Agitar una brocha más grande para que el líquido se mueva más
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const gx = gridX + dx;
          const gy = gridY + dy;
          if (gx > 0 && gx < columns - 1 && gy > 0 && gy < rows - 1) {
            b1[gx + gy * columns] = 15;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      handleInteraction(e.clientX, e.clientY);
    };

    // Simulamos un movimiento inicial para que no esté estático
    b1[Math.floor(columns/2) + Math.floor(rows/2) * columns] = 20;

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        // e.preventDefault(); // Optional: prevent scrolling while touching canvas
        handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
      }
    });

    // Auto-ripple effect so it doesn't look dead on mobile
    const autoRippleInterval = setInterval(() => {
       const rx = Math.floor(Math.random() * (columns - 4)) + 2;
       const ry = Math.floor(Math.random() * (rows - 4)) + 2;
       for (let dy = -1; dy <= 1; dy++) {
         for (let dx = -1; dx <= 1; dx++) {
           if (rx+dx > 0 && rx+dx < columns-1 && ry+dy > 0 && ry+dy < rows-1) {
             b1[(rx+dx) + (ry+dy) * columns] = 10;
           }
         }
       }
    }, 2000);

    let animationFrameId;

    const render = () => {
      if (width === 0 || height === 0) {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
      }

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      const currentCellW = width / columns;
      const currentCellH = height / rows;

      ctx.font = `${Math.min(currentCellW, currentCellH) * 1.2}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillStyle = color;
      
      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < columns - 1; x++) {
          const idx = x + y * columns;
          
          b2[idx] = (
            b1[idx - 1] + 
            b1[idx + 1] + 
            b1[idx - columns] + 
            b1[idx + columns]
          ) / 2 - b2[idx];
          
          b2[idx] *= 0.92;

          let val = Math.max(0, Math.min(1, Math.abs(b2[idx] / 5)));
          let charIdx = Math.floor(val * (chars.length - 1));
          
          if (charIdx > 0) {
            ctx.fillText(chars[charIdx], x * currentCellW + currentCellW/2, y * currentCellH + currentCellH/2);
          }
        }
      }

      let temp = b1;
      b1 = b2;
      b2 = temp;

      animationFrameId = requestAnimationFrame(render);
    };

    // Intersection Observer to pause when not visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!animationFrameId) render();
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    }, { threshold: 0.1 });

    if (canvas) observer.observe(canvas);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (canvas) observer.unobserve(canvas);
      clearInterval(autoRippleInterval);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [columns, rows, chars, color, backgroundColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full cursor-crosshair"
      style={{ display: 'block', touchAction: 'none' }}
    />
  );
};

export default AsciiRipple;
