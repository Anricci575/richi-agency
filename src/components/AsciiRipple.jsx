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

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const gridX = Math.floor(x / cellW);
      const gridY = Math.floor(y / cellH);

      // Agitar una brocha ms grande para que el lquido se mueva ms
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

    // Simulamos un movimiento inicial para que no est esttico
    b1[Math.floor(columns/2) + Math.floor(rows/2) * columns] = 20;

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      handleMouseMove(touch);
    });

    let animationFrameId;

    const render = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${Math.min(cellW, cellH) * 1.2}px monospace`;
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
            ctx.fillText(chars[charIdx], x * cellW + cellW/2, y * cellH + cellH/2);
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
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [columns, rows, chars, color, backgroundColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full cursor-crosshair"
      style={{ display: 'block' }}
    />
  );
};

export default AsciiRipple;
