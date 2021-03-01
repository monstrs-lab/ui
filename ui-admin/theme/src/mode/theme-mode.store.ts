import { EventEmitter } from 'events'

import { ThemeMode }    from './theme-mode.interfaces'

export class ThemeModeStore extends EventEmitter {
  private mode: ThemeMode

  constructor(mode: ThemeMode = 'dark') {
    super()

    this.mode = mode
  }

  public getCurrent() {
    return this.mode
  }

  public set(mode: ThemeMode) {
    this.mode = mode

    this.emit('change', mode)
  }
}
