import { createPortal } from 'react-dom';
import { usePiPContext } from './context/PiPContext';
import { VideoView } from './VideoView';

export const VideoPiP = () => {
  const { pipWindow } = usePiPContext();

  if (!pipWindow) {
    return null;
  }

  return createPortal(
    <div className="viewport">
      <VideoView isRecieveSharing={false} />;
    </div>,
    pipWindow.document.body
  );
};
