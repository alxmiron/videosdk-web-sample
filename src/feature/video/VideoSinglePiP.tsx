import { createPortal } from 'react-dom';
import { usePiPContext } from './context/PiPContext';
import { VideoSingleView } from './VideoSingleView';

export const VideoSinglePiP = () => {
  const { pipWindow } = usePiPContext();

  if (!pipWindow) {
    return null;
  }

  return createPortal(
    <div className="viewport">
      <VideoSingleView isRecieveSharing={false} />;
    </div>,
    pipWindow.document.body
  );
};
