import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  // Arguments
  public servers: { id: number; name: string; status: string }[] = [];

  // Constructor
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Hooks
  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  // Methods
  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
