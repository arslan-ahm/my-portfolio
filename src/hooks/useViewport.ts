import { writable } from 'svelte/store';
import { isBrowser, createMediaQuery, throttle } from '~/utils';
import { MEDIA_QUERIES } from '~/constants';
import type { DeviceInfo, ViewportDimensions } from '~/types';

function createViewportStore() {
  const deviceInfo = writable<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasReducedMotion: false,
    isTouch: false,
  });

  const dimensions = writable<ViewportDimensions>({
    width: 1920,
    height: 1080,
  });

  const updateDeviceInfo = () => {
    if (!isBrowser) return;

    const isMobile = createMediaQuery(MEDIA_QUERIES.mobile)?.matches ?? false;
    const isTablet = createMediaQuery(MEDIA_QUERIES.tablet)?.matches ?? false;
    const hasReducedMotion = createMediaQuery(MEDIA_QUERIES.reduceMotion)?.matches ?? false;
    const isTouch = createMediaQuery(MEDIA_QUERIES.touch)?.matches ?? false;

    deviceInfo.set({
      isMobile,
      isTablet,
      isDesktop: !isMobile && !isTablet,
      hasReducedMotion,
      isTouch,
    });
  };

  const updateDimensions = () => {
    if (!isBrowser) return;

    dimensions.set({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttledUpdate = throttle(() => {
    updateDeviceInfo();
    updateDimensions();
  }, 100);

  const init = () => {
    if (!isBrowser) return;

    updateDeviceInfo();
    updateDimensions();

    window.addEventListener('resize', throttledUpdate);
    
    // Listen for orientation change on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(throttledUpdate, 100);
    });

    return () => {
      window.removeEventListener('resize', throttledUpdate);
      window.removeEventListener('orientationchange', throttledUpdate);
    };
  };

  return {
    deviceInfo: { subscribe: deviceInfo.subscribe },
    dimensions: { subscribe: dimensions.subscribe },
    init,
  };
}

export const viewportStore = createViewportStore();
