import React, { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadBaseMover } from 'tsparticles-move-base';
import { loadCircleShape } from 'tsparticles-shape-circle';
import { loadColorUpdater } from 'tsparticles-updater-color';
import { loadOpacityUpdater } from 'tsparticles-updater-opacity';
import { loadOutModesUpdater } from 'tsparticles-updater-out-modes';
import "./styles.css"

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ children, className = '' }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBaseMover(engine);
    await loadCircleShape(engine);
    await loadColorUpdater(engine);
    await loadOpacityUpdater(engine);
    await loadOutModesUpdater(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Particles loaded', container);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: false,
              },
              onClick: {
                enable: false,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            move: {
              direction: 'bottom-right',
              enable: true,
              outModes: {
                default: 'out',
              },
              random: false,
              speed: 0.5,
              straight: true,
              angle: {
                offset: 45,
                value: 45,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 15,
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 2.5 },
            },
            life: {
              duration: {
                sync: false,
                value: 2,
              },
              count: 1,
            },
            rotate: {
              value: 45,
              direction: 'clockwise',
              animation: {
                enable: false,
              },
            },
            shadow: {
              enable: true,
              color: {
                value: 'rgba(255,255,255,0.8)',
              },
              offset: {
                x: 0,
                y: 0,
              },
              blur: 4,
            },
            links: {
              enable: false,
            },
            trail: {
              enable: true,
              length: 8,
              fillColor: {
                value: 'transparent',
              },
            },
          },
          emitters: {
            direction: 'bottom-right',
            rate: {
              quantity: 1,
              delay: 4,
            },
            position: {
              x: -10,
              y: -10,
            },
            size: {
              width: 0,
              height: 0,
            },
            life: {
              duration: 0,
              count: 0,
            },
          },
          backgroundMask: {
            enable: false,
          },
          smooth: true,
          detectRetina: true,
          fullScreen: {
            enable: false,
            zIndex: -10,
          },
        }}
        className="fixed inset-0 -z-10 pointer-events-none"
      />

      <div 
        className="fixed inset-0 -z-20"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, #0a0a2a 0%, #07071a 60%, #03030f 100%)'
        }}
      />

      <div className="fixed inset-0 -z-15 pointer-events-none">
        {Array.from({ length: 200 }).map((_, i) => {
          const top = (i * 131) % 100;
          const left = (i * 253) % 100;
          const size = 1 + (i % 3);
          const duration = 2 + (i % 4);
          const delay = (i * 0.05) % 5;
          
          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(255,255,255,${0.3 + (i % 5) * 0.1}), rgba(255,255,255,0))`,
                animation: `twinkle ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>

      <div className="fixed inset-0 -z-5 pointer-events-none">
        <div 
          className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0) 70%)',
            animation: 'drift 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0) 70%)',
            animation: 'drift 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;