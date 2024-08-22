import { createPortal } from 'react-dom';
import { usePiPContext } from './context/PiPContext';
import { VideoView } from './VideoView';
import { useRef } from 'react';

export const VideoPiP = () => {
  const { pipWindow } = usePiPContext();

  if (!pipWindow) {
    return null;
  }

  return createPortal(<VideoPiPLayout />, pipWindow.document.body);
};

const VideoPiPLayout = () => {
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <div className="viewport">
      <VideoView videoWrapperRef={videoWrapperRef} videoRef={videoRef} isRecieveSharing={false} />;
    </div>
  );
};
