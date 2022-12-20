import { Component, OnInit } from '@angular/core';
import * as mqtt from 'mqtt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  
  ngOnInit(): void {

    //instancia
    const client = mqtt.connect('mqtt://test.mosquitto.org');

    //sub
    client.subscribe('my_topic');

    client.on('message', (topic, message) => {
      console.log(`Received message ${message} on topic ${topic}`);
    });

    //mensaje
    client.publish('my_topic', 'Hello MQTT');

  }
  
}
