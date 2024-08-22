import { useEffect } from 'react';

interface Props {
  videoWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
  wrapperClassName?: string;
  videoRef: React.MutableRefObject<HTMLCanvasElement | null>;
  className?: string;
  id?: string;
  width?: string;
  height?: string;
}

export const CanvasContainer = ({
  videoWrapperRef,
  wrapperClassName,
  videoRef,
  className,
  id,
  width,
  height
}: Props) => {
  useEffect(() => {
    if (width) {
      videoRef.current?.setAttribute('width', width);
    }
  }, [videoRef, width]);

  useEffect(() => {
    if (height) {
      videoRef.current?.setAttribute('height', height);
    }
  }, [videoRef, height]);

  useEffect(() => {
    if (className) {
      videoRef.current?.setAttribute('className', className);
    }
  }, [videoRef, className]);

  useEffect(() => {
    if (id) {
      videoRef.current?.setAttribute('id', id);
    }
  }, [videoRef, id]);

  return (
    <div className={wrapperClassName} ref={videoWrapperRef}>
      {/* <canvas className="video-canvas" id="video-canvas" width="800" height="600" ref={videoRef} /> */}
    </div>
  );
};
