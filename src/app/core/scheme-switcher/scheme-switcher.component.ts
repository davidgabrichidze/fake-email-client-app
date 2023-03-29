import { Component, Input } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config';

@Component({
  selector: 'fuse-scheme-switcher',
  templateUrl: './scheme-switcher.component.html',
  exportAs: 'ouseSchemeSwitcher',
})
export class SchemeSwitcherComponent {
  @Input() icon = 'mat_outline:light_mode';
  @Input() tooltip = 'Activate light mode';
  @Input() scheme = 'dark';

  /**
   * Constructor
   */
  constructor(private _fuseConfigService: FuseConfigService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this._fuseConfigService.config$.subscribe((config) => {
      this.setScheme(config.scheme);
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the fullscreen mode
   */
  toggleScheme(): void {
    this.scheme = this.scheme === 'dark' ? 'light' : 'dark';
    this._fuseConfigService.config = {
      ...this._fuseConfigService.config,
      scheme: this.scheme,
    };
  }

  private setScheme(scheme: string): void {
    this.scheme = scheme;

    switch (this.scheme) {
      case 'dark':
        this.icon = 'mat_outline:light_mode';
        this.tooltip = 'Activate light mode';
        break;
      case 'light':
        this.icon = 'mat_outline:dark_mode';
        this.tooltip = 'Activate dark mode';
        break;
    }
  }
}
