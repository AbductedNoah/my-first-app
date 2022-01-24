import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
        `]
})
export class ServerComponent {
    serverId = 10;
    // can declare the type explicitly
    serverStatus: string = 'offline';
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }
    
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}