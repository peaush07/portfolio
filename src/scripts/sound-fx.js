// Sound System Completely Disabled
class SoundFXManager {
  isMuted = true;
  playHover() {}
  playClick() {}
  playModalOpen() {}
  playSuccess() {}
  playKeypress() {}
  toggleMute() { return true; }
}

export const soundFX = new SoundFXManager();
