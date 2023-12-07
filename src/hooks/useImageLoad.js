import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setImageLoaded } from '../store/slices/imageLoading';

export const useImageLoad = () => {
  const dispatch = useDispatch();
  const imgRef = useRef();

  const handleImageLoad = () => {
    dispatch(setImageLoaded(true));
  };

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleImageLoad();
    } else {
      dispatch(setImageLoaded(false));
    }
  }, [dispatch]);

  return { imgRef, handleImageLoad };
};