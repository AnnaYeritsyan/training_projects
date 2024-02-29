import EventEmitter from '../Event-emitter/event-emitter';
import { Player_Event_Types, PLAYER_STATES } from '../constant/const';

class PlayerProvider {
  private bufferItems: string[] = [];
  public eventEmitter: EventEmitter = new EventEmitter();

  public addBufferingItem(url: string) {
    this.bufferItems.push(url);
    this.eventEmitter.emit(Player_Event_Types.STATE_CHANGE, PLAYER_STATES.PAUSED);
  }

  public removeBufferingItem(url: string) {
    const i = this.bufferItems.indexOf(url);

    if (i !== -1) {
      this.bufferItems.splice(i, 1);
      if (this.bufferItems.length === 0) {
        this.eventEmitter.emit(Player_Event_Types.STATE_CHANGE, PLAYER_STATES.PLAYING);
      }
    }
  }

  public play() {
    this.eventEmitter.emit(Player_Event_Types.STATE_CHANGE, PLAYER_STATES.PLAYING);
  }

  public pause() {
    this.eventEmitter.emit(Player_Event_Types.STATE_CHANGE, PLAYER_STATES.PAUSED);
  }

  public jump(time: number) {
    this.eventEmitter.emit(Player_Event_Types.TIME_UPDATE, time);
  }
}

export const playerProvider = new PlayerProvider();
