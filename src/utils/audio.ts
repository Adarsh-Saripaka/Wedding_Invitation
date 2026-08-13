class AmbientSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: any = null;
  private delayNode: DelayNode | null = null;
  private feedbackNode: GainNode | null = null;
  private mainGain: GainNode | null = null;

  start() {
    if (this.isPlaying) return;
    
    // Create AudioContext on demand
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
    this.mainGain = this.ctx.createGain();
    this.mainGain.gain.setValueAtTime(0.08, this.ctx.currentTime); // Soft volume

    // Create delay effect for dreamy tail
    this.delayNode = this.ctx.createDelay(1.0);
    this.feedbackNode = this.ctx.createGain();

    this.delayNode.delayTime.setValueAtTime(0.6, this.ctx.currentTime);
    this.feedbackNode.gain.setValueAtTime(0.4, this.ctx.currentTime);

    // Wire delay loops
    this.mainGain.connect(this.delayNode);
    this.delayNode.connect(this.feedbackNode);
    this.feedbackNode.connect(this.delayNode);

    // Connect both dry and wet to destination
    this.mainGain.connect(this.ctx.destination);
    this.delayNode.connect(this.ctx.destination);

    this.isPlaying = true;
    this.playMelody();
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }

  setMute(mute: boolean) {
    if (this.mainGain && this.ctx) {
      this.mainGain.gain.setValueAtTime(mute ? 0 : 0.08, this.ctx.currentTime);
    }
  }

  private playMelody() {
    // Beautiful pentatonic warm progression (C Major / A minor pentatonic: C, D, E, G, A)
    const notes = [
      261.63, // C4
      293.66, // D4
      329.63, // E4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
      659.25, // E5
    ];

    const sequence = [0, 2, 4, 3, 5, 4, 2, 1]; // Gentle pattern
    let step = 0;

    const playTone = () => {
      if (!this.ctx || !this.isPlaying || !this.mainGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Soft triangle wave for a woodwind/flute vibe
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(notes[sequence[step]], this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(this.mainGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 2.0);

      // Advance sequence step
      step = (step + 1) % sequence.length;
    };

    // Play initial tone and then trigger interval
    playTone();
    this.intervalId = setInterval(playTone, 1200);
  }
}

export const ambientMusic = new AmbientSynth();
